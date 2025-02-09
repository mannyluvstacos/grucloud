const assert = require("assert");
const {
  get,
  pipe,
  map,
  eq,
  or,
  tap,
  fork,
  filter,
  not,
  omit,
} = require("rubico");
const {
  find,
  defaultsDeep,
  pluck,
  flatten,
  isEmpty,
  identity,
  when,
  prepend,
  first,
} = require("rubico/x");
const {
  Ec2New,
  shouldRetryOnException,
  buildTags,
  findNameInTags,
  findNamespaceInTagsOrEksCluster,
  revokeSecurityGroupIngress,
} = require("../AwsCommon");
const { retryCall } = require("@grucloud/core/Retry");
const { getField } = require("@grucloud/core/ProviderCommon");
const { hasKeyInTags, findEksCluster } = require("../AwsCommon");

const { getByNameCore } = require("@grucloud/core/Common");
const logger = require("@grucloud/core/logger")({ prefix: "AwsSecurityGroup" });
const { tos } = require("@grucloud/core/tos");
const { AwsClient } = require("../AwsClient");

exports.AwsSecurityGroup = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const { managedByDescription, providerName } = config;
  assert(managedByDescription);
  assert(providerName);

  const ec2 = Ec2New(config);

  const findName = ({ live, lives }) =>
    pipe([
      tap(() => {
        assert(lives);
      }),
      () => live,
      get("GroupName"),
      when(
        eq(identity, "default"),
        pipe([
          () =>
            lives.getById({
              id: live.VpcId,
              type: "Vpc",
              group: "EC2",
              providerName,
            }),
          tap((vpc) => {
            assert(vpc);
          }),
          get("name"),
          tap((vpcName) => {
            assert(vpcName);
          }),
          prepend("sg-default-"),
        ])
      ),
      tap((name) => {
        assert(name);
      }),
    ])();

  const findId = get("live.GroupId");

  const findDependencies = ({ live, lives }) => [
    { type: "Vpc", group: "EC2", ids: [live.VpcId] },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: pipe([
        () => live,
        get("IpPermissions"),
        pluck("UserIdGroupPairs"),
        flatten,
        pluck("GroupId"),
      ])(),
    },
    {
      type: "Cluster",
      group: "EKS",
      ids: [
        pipe([
          () => ({ live, lives }),
          findEksCluster({ config }),
          get("id"),
        ])(),
      ],
    },
  ];

  const findNamespace = (param) =>
    pipe([
      () => [
        findNamespaceInTagsOrEksCluster({
          config,
          key: "aws:eks:cluster-name",
        })(param),
        findNamespaceInTagsOrEksCluster({
          config,
          key: "elbv2.k8s.aws/cluster",
        })(param),
      ],
      find(not(isEmpty)),
      tap((namespace) => {
        logger.debug(`findNamespace ${namespace}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeSecurityGroups-property

  const getList = client.getList({
    method: "describeSecurityGroups",
    getParam: "SecurityGroups",
  });

  const getByName = ({ name, dependencies }) =>
    pipe([
      () => ({
        params: {
          Filters: [
            {
              Name: "group-name",
              Values: [name],
            },
          ],
        },
      }),
      getList,
      first,
      tap((securityGroup) => {
        logger.debug(`getByName ${name}: ${JSON.stringify(securityGroup)}`);
      }),
    ])();

  const getById = client.getById({
    pickId: ({ GroupId }) => ({ GroupIds: [GroupId] }),
    method: "describeSecurityGroups",
    getField: "SecurityGroups",
    ignoreErrorCodes: ["InvalidGroup.NotFound"],
  });

  const isUpById = pipe([getById, not(isEmpty)]);
  const isDownById = pipe([getById, isEmpty]);

  const cannotBeDeleted = pipe([
    get("live"),
    or([
      eq(get("GroupName"), "default"),
      //pipe([get("Tags"), find(eq(get("Key"), "aws:eks:cluster-name"))]),
    ]),
  ]);
  const isDefault = cannotBeDeleted;

  const managedByOther = or([
    hasKeyInTags({
      key: "aws:eks:cluster-name",
    }),
    hasKeyInTags({
      key: "elbv2.k8s.aws/cluster",
    }),
    isDefault,
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createSecurityGroup-property

  const create = ({ payload, name }) =>
    pipe([
      tap(() => {
        logger.info(`create sg ${tos({ name })}`);
      }),
      () => payload,
      ec2().createSecurityGroup,
      get("GroupId"),
      tap((GroupId) =>
        pipe([
          () =>
            retryCall({
              name: `sg create isUpById: ${name} id: ${GroupId}`,
              fn: () => isUpById({ GroupId, name }),
              config,
            }),
        ])()
      ),
      tap((GroupId) => {
        logger.info(`created sg ${tos({ name, GroupId })}`);
      }),
    ])();

  const revokeIngressRules = (live) =>
    pipe([
      tap(() => {
        logger.debug(`revokeIngressRules`);
      }),
      () => live.IpPermissions,
      filter(pipe([get("UserIdGroupPairs"), not(isEmpty)])),
      map(
        pipe([
          omit(["IpRanges", "Ipv6Ranges", "PrefixListIds"]),
          (ipPermission) => ({
            GroupId: live.GroupId,
            IpPermissions: [ipPermission],
          }),
          revokeSecurityGroupIngress({ ec2 }),
        ])
      ),
    ])();

  const destroy = ({ live, lives }) =>
    pipe([
      () => ({
        name: findName({ live, lives }),
        GroupId: findId({ live, lives }),
      }),
      ({ name, GroupId }) =>
        pipe([
          tap(() => {
            logger.info(`destroy sg ${JSON.stringify({ name, GroupId })}`);
            logger.debug(`destroy sg ${JSON.stringify(live)}`);
          }),
          () => revokeIngressRules(live),
          //() => destroyNetworkInterfaces({ ec2, Name: "group-id", Values: [id] }),
          () =>
            retryCall({
              name: `deleteSecurityGroup: ${name}`,
              fn: () => ec2().deleteSecurityGroup({ GroupId }),
              config: { retryCount: 20, repeatDelay: 5e3 },
              isExpectedException: pipe([
                tap((ex) => {
                  logger.error(
                    `delete sg ${name} isExpectedException ? ${tos(ex)}`
                  );
                }),
                eq(get("code"), "InvalidGroup.NotFound"),
              ]),
              shouldRetryOnException: ({ error, name }) =>
                pipe([
                  () => error,
                  tap(() => {
                    logger.error(
                      `delete sg ${name} shouldRetryOnException ? ${tos({
                        name,
                        error,
                      })}`
                    );
                  }),
                  eq(get("code"), "DependencyViolation"),
                ])(),
            }),
          tap(() =>
            retryCall({
              name: `destroy sg isDownById: ${name} GroupId: ${GroupId}`,
              fn: () => isDownById({ GroupId }),
              config,
            })
          ),
          tap(() => {
            logger.debug(`destroyed sg ${JSON.stringify({ name, GroupId })}`);
          }),
        ])(),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { vpc },
  }) =>
    pipe([
      () => ({}),
      defaultsDeep(otherProps),
      defaultsDeep({
        GroupName: name,
        ...(vpc && { VpcId: getField(vpc, "VpcId") }),
        TagSpecifications: [
          {
            ResourceType: "security-group",
            Tags: buildTags({ config, namespace, name, UserTags: Tags }),
          },
        ],
      }),
      tap((params) => {
        assert(true);
      }),
    ])();

  return {
    spec,
    getByName,
    findId,
    findName,
    findDependencies,
    findNamespace,
    isDefault,
    cannotBeDeleted,
    managedByOther,
    getList,
    create,
    destroy,
    configDefault,
    shouldRetryOnException,
  };
};
