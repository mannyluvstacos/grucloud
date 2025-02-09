const assert = require("assert");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  eq,
  pick,
  assign,
  omit,
} = require("rubico");
const { defaultsDeep, first } = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "EcrRepository" });
const { tos } = require("@grucloud/core/tos");
const {
  buildTags,
  createEndpoint,
  shouldRetryOnException,
} = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");

const findName = get("live.repositoryName");
const findId = get("live.repositoryArn");
const pickParam = pick(["repositoryName", "registryId"]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html
exports.EcrRepository = ({ spec, config }) => {
  const ecr = () => createEndpoint({ endpointName: "ECR" })(config);

  const findDependencies = ({ live }) => [];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    () => "",
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#getRepositoryPolicy-property
  const getRepositoryPolicy = tryCatch(
    pipe([pickParam, ecr().getRepositoryPolicy, get("policyText"), JSON.parse]),
    switchCase([
      eq(get("code"), "RepositoryPolicyNotFoundException"),
      () => undefined,
      () => {
        throw error;
      },
    ])
  );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#getLifecyclePolicy-property
  const getLifecyclePolicy = tryCatch(
    pipe([
      pickParam,
      ecr().getLifecyclePolicy,
      get("lifecyclePolicyText"),
      JSON.parse,
    ]),
    switchCase([
      eq(get("code"), "LifecyclePolicyNotFoundException"),
      () => undefined,
      () => {
        throw error;
      },
    ])
  );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#listTagsForResource-property
  const getTags = pipe([
    ({ repositoryArn }) => ({ resourceArn: repositoryArn }),
    ecr().listTagsForResource,
    get("tags"),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#describeRepositories-property
  const describeRepositories = (params = {}) =>
    pipe([
      () => params,
      ecr().describeRepositories,
      get("repositories"),
      map(
        assign({
          policyText: getRepositoryPolicy,
          lifecyclePolicyText: getLifecyclePolicy,
          tags: getTags,
        })
      ),
      tap((repositories) => {
        logger.debug(`describeRepositories ${tos(repositories)}`);
      }),
    ])();

  const getList = () => pipe([describeRepositories])();

  const getByName = pipe([
    ({ name }) => ({ repositoryNames: [name] }),
    tryCatch(pipe([describeRepositories, first]), (error, params) =>
      pipe([
        () => error,
        switchCase([
          eq(get("code"), "RepositoryNotFoundException"),
          () => undefined,
          () => {
            logger.error(
              `error describeRepositories ${tos({ params, error })}`
            );
            throw error;
          },
        ]),
      ])()
    ),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#setRepositoryPolicy-property
  const setRepositoryPolicy = ({ payload }) =>
    tap.if(
      () => payload.policyText,
      pipe([
        pickParam,
        assign({ policyText: () => JSON.stringify(payload.policyText) }),
        ecr().setRepositoryPolicy,
      ])
    );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putLifecyclePolicy-property
  const putLifecyclePolicy = ({ payload }) =>
    tap.if(
      () => payload.lifecyclePolicyText,
      pipe([
        pickParam,
        assign({
          lifecyclePolicyText: () =>
            JSON.stringify(payload.lifecyclePolicyText),
        }),
        ecr().putLifecyclePolicy,
      ])
    );
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#createRepository-property
  const create = ({ payload, name }) =>
    pipe([
      () => payload,
      omit(["policyText", "lifecyclePolicyText"]),
      ecr().createRepository,
      get("repository"),
      setRepositoryPolicy({ payload }),
      putLifecyclePolicy({ payload }),
    ])();

  const update = async ({ payload, live, name, diff }) =>
    pipe([
      () => live,
      tap(() => {
        assert(diff);
        assert(payload);
        assert(live);
      }),
      //TODO https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putImageScanningConfiguration-property
      setRepositoryPolicy({ payload }),
      putLifecyclePolicy({ payload }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#deleteRepository-property
  const destroy = ({ live }) =>
    pipe([
      tap(() => {
        assert(live.repositoryName);
      }),
      () => live,
      pickParam,
      //TODO make it configurable
      assign({ force: () => true }),
      tryCatch(ecr().deleteRepository, (error, params) =>
        pipe([
          tap(() => {
            logger.error(`error deleteRepository ${tos({ params, error })}`);
          }),
          () => error,
          switchCase([
            eq(get("code"), "RepositoryNotFoundException"),
            () => undefined,
            () => {
              throw error;
            },
          ]),
        ])()
      ),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { kmsKey },
  }) =>
    pipe([
      () => properties,
      defaultsDeep({
        repositoryName: name,
        tags: buildTags({ config, namespace, name }),
        ...(kmsKey &
          {
            encryptionConfiguration: {
              encryptionType: "KMS",
              kmsKey: getField(kmsKey, "Arn"),
            },
          }),
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    getByName,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};

//TODO compare
