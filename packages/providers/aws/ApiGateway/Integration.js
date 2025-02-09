const assert = require("assert");
const {
  map,
  pipe,
  tap,
  get,
  eq,
  tryCatch,
  switchCase,
  and,
} = require("rubico");
const { pluck, defaultsDeep, when, find } = require("rubico/x");
const logger = require("@grucloud/core/logger")({
  prefix: "Integration",
});

const { tos } = require("@grucloud/core/tos");
const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");

const {
  createEndpoint,
  shouldRetryOnException,
  tagsExtractFromDescription,
  tagsRemoveFromDescription,
  findNameInTagsOrId,
} = require("../AwsCommon");

const { getField } = require("@grucloud/core/ProviderCommon");

const findName = pipe([
  get("live"),
  ({ restApiName, path, httpMethod }) =>
    `integration::${restApiName}::${path}::${httpMethod}`,
]);

const findId = pipe([
  get("live"),
  ({ restApiId, path, httpMethod }) =>
    `integration::${restApiId}::${path}::${httpMethod}`,
]);

const pickId = ({ restApiId, resourceId, httpMethod }) => ({
  restApiId,
  resourceId,
  httpMethod,
});

exports.Integration = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const apiGateway = () =>
    createEndpoint({ endpointName: "APIGateway" })(config);
  const lambda = () => createEndpoint({ endpointName: "Lambda" })(config);
  const findDependencies = ({ live, lives }) => [
    {
      type: "Method",
      group: "APIGateway",
      ids: [
        pipe([
          tap(() => {
            assert(live);
          }),
          () =>
            lives.getByType({
              providerName: config.providerName,
              type: "Method",
              group: "APIGateway",
            }),
          find(
            and([
              eq(get("live.restApiId"), live.restApiId),
              eq(get("live.resourceId"), live.resourceId),
              eq(get("live.httpMethod"), live.httpMethod),
            ])
          ),
          tap((params) => {
            assert(true);
          }),
          get("id"),
        ])(),
      ],
    },
    {
      type: "Function",
      group: "Lambda",
      ids: pipe([
        () => live,
        //TODO
        switchCase([
          eq(get("integrationType"), "AWS_PROXY"),
          () => live.integrationUri,
          () => undefined,
        ]),
        (id) => [id],
      ])(),
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getIntegration-property
  const getById = client.getById({
    pickId,
    method: "getIntegration",
    ignoreErrorCodes: ["NotFoundException"],
    decorate: (method) =>
      pipe([
        tap((params) => {
          assert(method);
        }),
        defaultsDeep({
          restApiId: method.restApiId,
          restApiName: method.restApiName,
          resourceId: method.resourceId,
          path: method.path,
          httpMethod: method.httpMethod,
        }),
        tap((params) => {
          assert(true);
        }),
      ]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getIntegration-property
  const getList = ({ lives }) =>
    pipe([
      tap(() => {
        assert(lives);
        logger.info(`getList integration`);
      }),
      () =>
        lives.getByType({
          providerName: config.providerName,
          type: "Method",
          group: "APIGateway",
        }),
      pluck("live"),
      map(getById),
      tap((params) => {
        assert(true);
      }),
    ])();

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#putIntegration-property
  const create = ({
    name,
    payload,
    resolvedDependencies: { restApi, lambdaFunction },
  }) =>
    pipe([
      tap(() => {
        logger.info(`create integration: ${name}`);
        logger.debug(tos(payload));
      }),
      () => payload,
      apiGateway().putIntegration,
      tap.if(
        () => lambdaFunction,
        ({ id }) =>
          pipe([
            () => ({
              Action: "lambda:InvokeFunction",
              FunctionName: lambdaFunction.resource.name,
              Principal: "apigateway.amazonaws.com",
              StatementId: id,
              SourceArn: `arn:aws:execute-api:${
                config.region
              }:${config.accountId()}:${getField(restApi, "id")}/*/*/${
                lambdaFunction.resource.name
              }`,
            }),
            lambda().addPermission,
          ])()
      ),
      tap((params) => {
        logger.info(`created integration ${name}`);
      }),
    ])();

  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`update integration: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      apiGateway().updateIntegration,
      tap(() => {
        logger.info(`updated integration ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#removePermission-property
  const lambdaRemovePermission = ({ live }) =>
    pipe([
      tap(() => {
        assert(true);
      }),
      () => live,
      tap.if(
        eq(get("integrationType"), "AWS_PROXY"),
        pipe([
          () => ({
            FunctionName: live.integrationUri,
            StatementId: live.id,
          }),
          tryCatch(lambda().removePermission, (error) =>
            pipe([
              tap(() => {
                logger.error(`lambdaRemovePermission ${tos(error)}`);
              }),
              () => {
                throw error;
              },
            ])()
          ),
        ])
      ),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#deleteIntegration-property
  const destroy = ({ live }) =>
    pipe([
      tap(() => {
        assert(true);
      }),
      () => lambdaRemovePermission({ live }),
      () => live,
      pickId,
      tap((params) => {
        logger.info(`destroy integration ${JSON.stringify({ params })}`);
        assert(params.restApiId);
        assert(params.resourceId);
        assert(params.httpMethod);
      }),
      tryCatch(apiGateway().deleteIntegration, (error, params) =>
        pipe([
          tap(() => {
            logger.error(
              `deleteIntegration ${JSON.stringify({ params, error })}`
            );
          }),
          () => error,
          switchCase([
            eq(get("code"), "NotFoundException"),
            () => undefined,
            () => {
              throw error;
            },
          ]),
        ])()
      ),
      tap((params) => {
        logger.debug(`destroyed integration ${JSON.stringify({ params })}`);
      }),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { method, lambdaFunction },
  }) =>
    pipe([
      tap(() => {
        assert(method, "missing 'method' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        httpMethod: getField(method, "httpMethod"),
        restApiId: getField(method, "restApiId"),
        resource: getField(method, "resourceId"),
        ...(lambdaFunction && {
          integrationUri: getField(lambdaFunction, "FunctionArn"),
        }),
        tags: buildTagsObject({ name, namespace, config, userTags: Tags }),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    getById,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    shouldRetryOnException,
    findDependencies,
  };
};
