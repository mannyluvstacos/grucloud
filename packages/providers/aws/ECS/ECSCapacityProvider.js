const assert = require("assert");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  eq,
  not,
  pick,
  omit,
} = require("rubico");
const { defaultsDeep, isEmpty, includes, first, unless } = require("rubico/x");

const logger = require("@grucloud/core/logger")({
  prefix: "ECSCapacityProvider",
});
const { tos } = require("@grucloud/core/tos");
const { retryCall } = require("@grucloud/core/Retry");
const {
  createEndpoint,
  shouldRetryOnException,
  buildTags,
} = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const {
  AutoScalingAutoScalingGroup,
} = require("../Autoscaling/AutoScalingAutoScalingGroup");
const { AwsClient } = require("../AwsClient");

const findId = get("live.capacityProviderArn");
const findName = get("live.name");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html

exports.ECSCapacityProvider = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const ecs = () => createEndpoint({ endpointName: "ECS" })(config);
  const autoScalingGroup = AutoScalingAutoScalingGroup({
    spec: { type: "AutoScalingGroup", group: "AutoScaling" },
    config,
  });
  const findDependencies = ({ live }) => [
    {
      type: "AutoScalingGroup",
      group: "AutoScaling",
      ids: [
        pipe([
          () => live,
          get("autoScalingGroupProvider.autoScalingGroupArn"),
        ])(),
      ],
    },
  ];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    () => "",
  ]);

  const notFound = eq(
    get("message"),
    "The specified capacity provider does not exist. Specify a valid name or ARN and try again."
  );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#describeCapacityProviders-property
  const describeCapacityProviders = (params = {}) =>
    pipe([
      () => params,
      defaultsDeep({ include: ["TAGS"] }),
      ecs().describeCapacityProviders,
      get("capacityProviders"),
      tap((capacityProviders) => {
        logger.debug(`describeCapacityProviders ${tos(capacityProviders)}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#describeCapacityProviders-property
  const getById = client.getById({
    pickId: ({ name }) => ({ capacityProviders: [name] }),
    extraParams: { include: ["TAGS"] },
    method: "describeCapacityProviders",
    getField: "capacityProviders",
  });

  const getByName = getById;

  const getList = () => pipe([describeCapacityProviders])();

  const isUpByName = pipe([getByName, not(isEmpty)]);
  const isDownByName = pipe([
    getByName,
    switchCase([
      eq(get("updateStatus"), "DELETE_FAILED"),
      () => {
        throw Error(`DELETE_FAILED`);
      },
      eq(get("updateStatus"), "DELETE_COMPLETE"),
      () => true,
      isEmpty,
      () => true,
      () => false,
    ]),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#createCapacityProvider-property
  const create = ({ payload, name, namespace }) =>
    pipe([
      () => payload,
      ecs().createCapacityProvider,
      tap(() =>
        retryCall({
          name: `createCapacityProvider isUpByName: ${name}`,
          fn: () => isUpByName({ name }),
        })
      ),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#updateCapacityProvider-property
  const update = client.update({
    pickId: pick(["name", "autoScalingGroupProvider"]),
    filterParams: ({ payload, diff }) =>
      pipe([
        () => payload,
        omit(["autoScalingGroupProvider.autoScalingGroupArn", "tags"]),
      ])(),
    method: "updateCapacityProvider",
    config,
    getById,
  });

  const deleteAutoScalingGroup = ({ live, lives }) =>
    pipe([
      () => live,
      get("autoScalingGroupProvider.autoScalingGroupArn"),
      tap((params) => {
        assert(true);
      }),
      (id) =>
        lives.getById({
          id,
          providerName: config.providerName,
          type: "AutoScalingGroup",
          group: "AutoScaling",
        }),
      get("name"),
      unless(
        isEmpty,
        pipe([
          (AutoScalingGroupName) => ({ live: { AutoScalingGroupName } }),
          autoScalingGroup.destroy,
        ])
      ),
      tap((params) => {
        assert(true);
      }),
    ])();
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#deleteCapacityProvider-property
  const destroy = ({ live, lives }) =>
    pipe([
      () => ({ live, lives }),
      deleteAutoScalingGroup,
      () => live,
      tap(({ name }) => {
        assert(name);
      }),
      ({ name }) => ({ capacityProvider: name }),
      tryCatch(
        pipe([
          ecs().deleteCapacityProvider,
          () =>
            retryCall({
              name: `deleteCapacityProvider isDownByName: ${live.name}`,
              fn: () => isDownByName({ name: live.name }),
              config,
            }),
        ]),
        (error, params) =>
          pipe([
            tap(() => {
              logger.error(
                `error deleteCapacityProvider ${tos({ params, error })}`
              );
            }),
            () => error,
            switchCase([
              notFound,
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
    properties: { Tags, ...otherProps },
    dependencies: { autoScalingGroup },
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        name,
        ...(autoScalingGroup && {
          autoScalingGroupProvider: {
            autoScalingGroupArn: getField(
              autoScalingGroup,
              "AutoScalingGroupARN"
            ),
          },
        }),
        tags: buildTags({
          name,
          config,
          namespace,
          UserTags: Tags,
          key: "key",
          value: "value",
        }),
      }),
    ])();

  const cannotBeDeleted = ({ live }) =>
    pipe([() => ["FARGATE", "FARGATE_SPOT"], includes(live.name)])();

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
    cannotBeDeleted,
    managedByOther: cannotBeDeleted,
    isDefault: cannotBeDeleted,
  };
};
