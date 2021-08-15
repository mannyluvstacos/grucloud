const assert = require("assert");
const { detailedDiff } = require("deep-object-diff");
const {
  switchCase,
  tryCatch,
  pipe,
  tap,
  get,
  pick,
  assign,
  omit,
  eq,
  or,
} = require("rubico");
const { defaultsDeep, isEmpty, when } = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "EcrRegistry" });
const { tos } = require("@grucloud/core/tos");
const { createEndpoint, shouldRetryOnException } = require("../AwsCommon");

const findName = () => "default";
const findId = get("live.registryId");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html
exports.EcrRegistry = ({ spec, config }) => {
  const ecr = () => createEndpoint({ endpointName: "ECR" })(config);

  const findDependencies = ({ live }) => [];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    () => "",
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#getRegistryPolicy-property
  const getRegistryPolicy = tryCatch(
    pipe([() => ({}), ecr().getRegistryPolicy, get("policyText"), JSON.parse]),
    switchCase([
      eq(get("code"), "RegistryPolicyNotFoundException"),
      () => undefined,
      () => {
        throw error;
      },
    ])
  );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#describeRegistry-property
  const describeRegistry = () =>
    pipe([
      () => ({}),
      ecr().describeRegistry,
      tap((params) => {
        assert(true);
      }),
      when(
        pipe([get("replicationConfiguration.rules"), isEmpty]),
        omit(["replicationConfiguration"])
      ),
      assign({
        policyText: getRegistryPolicy,
      }),
      tap((params) => {
        assert(true);
      }),
      when(pipe([get("policyText"), isEmpty]), omit(["policyText"])),
      tap((params) => {
        assert(true);
      }),
    ])();

  const getList = () => pipe([describeRegistry, (registry) => [registry]])();

  const getByName = pipe([describeRegistry]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putRegistryPolicy-property

  const putRegistryPolicy = pipe([
    get("policyText"),
    JSON.stringify,
    (policyText) => ({ policyText }),
    ecr().putRegistryPolicy,
  ]);

  //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putReplicationConfiguration-property
  const putReplicationConfiguration = ({ payload }) =>
    pipe([
      switchCase([
        get("targetDiff.added.replicationConfiguration"),
        pipe([
          () => ({ replicationConfiguration: { rules: [] } }),
          ecr().putReplicationConfiguration,
        ]),
        or([
          get("liveDiff.updated.replicationConfiguration"),
          get("liveDiff.added.replicationConfiguration"),
        ]),
        pipe([
          () => payload,
          pick(["replicationConfiguration"]),
          ecr().putReplicationConfiguration,
        ]),
        () => {
          assert(true);
        },
      ]),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#deleteRegistryPolicy-property

  const updateOrDeleteRegistryPolicy = ({ payload }) =>
    pipe([
      switchCase([
        get("targetDiff.added.policyText"),
        pipe([() => ({}), ecr().deleteRegistryPolicy]),
        or([
          get("liveDiff.updated.policyText"),
          get("liveDiff.added.policyText"),
        ]),
        pipe([() => payload, putRegistryPolicy]),
        () => {
          assert(true);
        },
      ]),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#createRepository-property
  const update = ({ payload, name, diff }) =>
    pipe([
      () => diff,
      tap(updateOrDeleteRegistryPolicy({ payload })),
      tap(putReplicationConfiguration({ payload })),
    ])();

  const configDefault = ({ name, namespace, properties, dependencies: {} }) =>
    pipe([() => properties, defaultsDeep({})])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    getByName,
    findName,
    update,
    getList,
    configDefault,
    shouldRetryOnException,
    cannotBeDeleted: () => true,
  };
};

const filterTarget = pipe([get("target", {}), omit(["Tags"])]);
const filterLive = ({ live }) => pipe([() => live, omit(["registryId"])])();

exports.compareRegistry = pipe([
  tap((xxx) => {
    assert(true);
  }),
  assign({
    target: filterTarget,
    live: filterLive,
  }),
  ({ target, live }) => ({
    targetDiff: pipe([() => detailedDiff(target, live), omit([])])(),
    liveDiff: pipe([() => detailedDiff(live, target), omit([])])(),
  }),
  tap((diff) => {
    logger.debug(`compareRegistry ${tos(diff)}`);
  }),
]);
