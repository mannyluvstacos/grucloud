const assert = require("assert");

const {
  map,
  flatMap,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  pick,
  filter,
  eq,
  not,
} = require("rubico");
const { defaultsDeep, isEmpty, pluck, find, when } = require("rubico/x");
const { AwsClient } = require("../AwsClient");

const logger = require("@grucloud/core/logger")({ prefix: "EKSNodeGroup" });
const { retryCall } = require("@grucloud/core/Retry");
const { tos } = require("@grucloud/core/tos");

const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");
const {
  EKSNew,
  shouldRetryOnException,
  findNamespaceInTagsObject,
} = require("../AwsCommon");

const { getField } = require("@grucloud/core/ProviderCommon");
const { waitForUpdate } = require("./EKSCommon");
const findName = get("live.nodegroupName");
const findId = findName;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html
exports.EKSNodeGroup = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const eks = EKSNew(config);

  const findDependencies = ({ live, lives }) => [
    { type: "Cluster", group: "EKS", ids: [live.clusterName] },
    { type: "Subnet", group: "EC2", ids: live.subnets },
    {
      type: "AutoScalingGroup",
      group: "AutoScaling",
      ids: pipe([
        () => live,
        get("resources.autoScalingGroups"),
        pluck("name"),
        map((name) =>
          pipe([
            () =>
              lives.getByType({
                type: "AutoScalingGroup",
                group: "AutoScaling",
                providerName: config.providerName,
              }),
            find(eq(get("live.AutoScalingGroupName"), name)),
            get("id"),
          ])()
        ),
      ])(),
    },
    { type: "Role", group: "IAM", ids: [live.nodeRole] },
    {
      type: "LaunchTemplate",
      group: "EC2",
      ids: [pipe([() => live, get("launchTemplate.id")])()],
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#listNodegroups-property
  const getList = ({ resources = [] } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList nodeGroup`);
      }),
      //TODO
      // () =>
      // lives.getByType({
      //   providerName: config.providerName,
      //   type: "Cluster",
      //   group: "EKS",
      // }),
      eks().listClusters,
      get("clusters"),
      flatMap((clusterName) =>
        pipe([
          () =>
            eks().listNodegroups({
              clusterName,
            }),
          get("nodegroups"),
          map(
            pipe([
              (nodegroupName) =>
                eks().describeNodegroup({ clusterName, nodegroupName }),
              get("nodegroup"),
            ])
          ),
        ])()
      ),
      filter(not(isEmpty)),
    ])();

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#describeNodegroup-property
  const getById = ({ clusterName, nodegroupName }) =>
    pipe([
      tap(() => {
        logger.info(
          `getById nodeGroup: ${JSON.stringify({ clusterName, nodegroupName })}`
        );
      }),
      tryCatch(
        pipe([
          () => eks().describeNodegroup({ clusterName, nodegroupName }),
          get("nodegroup"),
        ]),
        switchCase([
          eq(get("code"), "ResourceNotFoundException"),
          () => undefined,
          (error) => {
            logger.error(`getById describeNodegroup error: ${tos(error)}`);
            throw error;
          },
        ])
      ),
      tap((result) => {
        logger.info(`getById nodeGroup: has result: ${!!result}`);
        logger.debug(`getById nodeGroup result: ${tos(result)}`);
      }),
    ])();

  const isInstanceUp = eq(get("status"), "ACTIVE");

  const isUpById = pipe([getById, isInstanceUp]);
  const isDownById = pipe([
    getById,
    isEmpty,
    tap((result) => {
      logger.info(`nodeGroup isDownById: ${result}`);
    }),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createNodegroup-property
  const create = async ({
    name,
    payload = {},
    resolvedDependencies: { cluster, subnets, role },
  }) =>
    pipe([
      tap(() => {
        assert(name);
        assert(payload);
        logger.info(`create nodeGroup: ${name}, ${tos(payload)}`);
        assert(cluster, "cluster");
        assert(subnets, "subnets");
        assert(role, "role");
      }),
      () => payload,
      tap((params) => {
        logger.debug(`create nodeGroup: ${name}, params: ${tos(params)}`);
      }),
      eks().createNodegroup,
      get("nodeGroup"),
      () =>
        retryCall({
          name: `nodeGroup create isUpById: ${name}`,
          fn: () =>
            isUpById({
              clusterName: cluster.resource.name,
              nodegroupName: name,
            }),
          config: { retryCount: 12 * 25, retryDelay: 5e3 },
        }),
      tap(() => {
        logger.info(` nodeGroup created: ${name}`);
      }),
    ])();

  //TODO
  /*
    labels: {
    addOrUpdateLabels: {
      '<labelKey>': 'STRING_VALUE',
       '<labelKey>': ... 
    },
    removeLabels: [
      'STRING_VALUE',
       more items 
    ]
  },
  */

  // TODO instanceTypes needs a destroy

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#updateNodegroupConfig-property
  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`updateNodegroupConfig: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      pick([
        "clusterName",
        "nodegroupName",
        //"labels", //TODO
        "scalingConfig",
        //"taints", //TODO
        "updateConfig",
      ]),
      eks().updateNodegroupConfig,
      get("update"),
      tap((result) => {
        logger.info(`updateNodegroupConfig: ${tos({ result })}`);
      }),
      get("id"),
      (updateId) =>
        waitForUpdate({ eks })({
          name: live.clusterName,
          nodegroupName: live.nodegroupName,
          updateId,
        }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#deleteNodegroup-property
  const destroy = ({ live }) =>
    pipe([
      () => live,
      pick(["nodegroupName", "clusterName"]),
      tap((params) => {
        assert(true);
      }),
      ({ clusterName, nodegroupName }) =>
        pipe([
          tap(() => {
            logger.info(
              `destroy nodeGroup: ${clusterName}, nodegroupName: ${nodegroupName}`
            );
            logger.debug(`destroy ${JSON.stringify({ live })}`);
            assert(live);
            assert(nodegroupName);
            assert(clusterName);
          }),
          () =>
            eks().deleteNodegroup({
              clusterName,
              nodegroupName,
            }),
          tap(() =>
            retryCall({
              name: `destroy nodeGroup isDownById: ${nodegroupName}`,
              fn: () =>
                isDownById({
                  clusterName,
                  nodegroupName,
                }),
              config: { retryCount: 20 * 6, retryDelay: 10e3 },
            })
          ),
          tap(() => {
            logger.info(`nodeGroup destroyed ${nodegroupName}`);
          }),
        ])(),
    ])();

  const configDefault = async ({
    name,
    namespace,
    properties,
    dependencies: { cluster, role, subnets, launchTemplate },
  }) =>
    pipe([
      () => properties,
      tap((params) => {
        assert(cluster, "missing 'cluster' dependency");
        assert(role, "missing 'role' dependency");
        assert(subnets, "missing 'subnets' dependency");
      }),
      defaultsDeep({
        subnets: map((subnet) => getField(subnet, "SubnetId"))(subnets),
        nodeRole: getField(role, "Arn"),
        clusterName: cluster.config.name,
        nodegroupName: name,
        capacityType: "ON_DEMAND",
        scalingConfig: {
          minSize: 1,
          maxSize: 1,
          desiredSize: 1,
        },
        tags: buildTagsObject({ config, namespace, name }),
      }),
      switchCase([
        () => launchTemplate,
        defaultsDeep({
          launchTemplate: {
            id: getField(launchTemplate, "LaunchTemplateId"),
          },
        }),
        defaultsDeep({
          amiType: "AL2_x86_64",
          instanceTypes: ["t3.medium"],
          diskSize: 20,
        }),
      ]),
    ])();

  return {
    spec,
    findId,
    findDependencies,
    findNamespace: findNamespaceInTagsObject(config),
    getByName,
    findName,
    update,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};
