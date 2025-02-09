const assert = require("assert");
const {
  map,
  transform,
  get,
  tap,
  pipe,
  filter,
  eq,
  not,
  or,
  tryCatch,
  switchCase,
  omit,
  assign,
} = require("rubico");
const {
  defaultsDeep,
  isEmpty,
  first,
  pluck,
  flatten,
  size,
  find,
  includes,
  when,
} = require("rubico/x");
const { AwsClient } = require("../AwsClient");
const { omitIfEmpty } = require("@grucloud/core/Common");

const { detailedDiff } = require("deep-object-diff");

const logger = require("@grucloud/core/logger")({ prefix: "AwsEc2" });
const {
  getByNameCore,
  isUpByIdCore,
  isDownByIdCore,
  convertError,
} = require("@grucloud/core/Common");
const { retryCall } = require("@grucloud/core/Retry");
const { tos } = require("@grucloud/core/tos");
const {
  Ec2New,
  getByIdCore,
  findNameInTags,
  buildTags,
  findValueInTags,
  findNamespaceInTagsOrEksCluster,
  isOurMinion,
  findEksCluster,
} = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { hasKeyInTags } = require("../AwsCommon");

const { CheckAwsTags } = require("../AwsTagCheck");

const StateRunning = "running";
const StateTerminated = "terminated";
const StateStopped = "stopped";

const configDefault =
  ({ config, includeTags = true }) =>
  ({
    name,
    namespace,
    properties: { UserData, ...otherProperties },
    dependencies: {
      keyPair,
      subnet,
      securityGroups,
      iamInstanceProfile,
      image,
    },
  }) =>
    pipe([
      tap((params) => {
        assert(true);
      }),
      () => otherProperties,
      defaultsDeep({
        ...(UserData && {
          UserData: Buffer.from(UserData, "utf-8").toString("base64"),
        }),
        ...(image && { ImageId: getField(image, "ImageId") }),
        ...(iamInstanceProfile && {
          IamInstanceProfile: {
            Arn: getField(iamInstanceProfile, "Arn"),
          },
        }),
        ...(includeTags && {
          TagSpecifications: [
            {
              ResourceType: "instance",
              Tags: buildTags({ config, namespace, name }),
            },
          ],
        }),
        ...(keyPair && { KeyName: keyPair.resource.name }),
      }),
      // Subnet
      when(
        () => subnet,
        assign({
          SubnetId: () => getField(subnet, "SubnetId"),
        })
      ),
      // Security Groups
      when(
        () => securityGroups,
        assign({
          SecurityGroupIds: pipe([
            () => securityGroups,
            map((sg) => getField(sg, "GroupId")),
          ]),
        })
      ),
      tap((params) => {
        assert(true);
      }),
    ])();

exports.configDefault = configDefault;

exports.EC2Instance = ({ spec, config }) => {
  const client = AwsClient({ spec, config });

  const { providerName } = config;
  assert(providerName);
  const clientConfig = {
    ...config,
    retryCount: 100,
    retryDelay: 5e3,
    repeatCount: 1,
  };

  const ec2 = Ec2New(config);

  const managedByOther = or([
    hasKeyInTags({
      key: "eks:cluster-name",
    }),
    hasKeyInTags({
      key: "aws:autoscaling:groupName",
    }),
  ]);

  const findDependencies = ({ live, lives }) => [
    {
      type: "Image",
      group: "EC2",
      ids: pipe([
        () => lives.getByType({ type: "Image", group: "EC2", providerName }),
        filter(eq(get("id"), live.ImageId)),
        pluck("id"),
      ])(),
    },
    {
      type: "KeyPair",
      group: "EC2",
      ids: [live.KeyName],
    },
    { type: "Vpc", group: "EC2", ids: [live.VpcId] },
    { type: "Subnet", group: "EC2", ids: [live.SubnetId] },
    {
      type: "Volume",
      group: "EC2",
      ids: pipe([
        () => live,
        get("BlockDeviceMappings"),
        pluck("Ebs.VolumeId"),
      ])(),
    },
    {
      type: "NetworkInterface",
      group: "EC2",
      ids: pipe([
        () => live,
        get("NetworkInterfaces"),
        pluck("NetworkInterfaceId"),
      ])(),
    },
    {
      type: "ElasticIpAddress",
      group: "EC2",
      ids: pipe([
        () => live,
        get("PublicIpAddress"),
        (PublicIpAddress) =>
          pipe([
            () =>
              lives.getByType({
                type: "ElasticIpAddress",
                group: "EC2",
                providerName,
              }),
            filter(eq(get("live.PublicIp"), PublicIpAddress)),
            pluck("id"),
          ])(),
      ])(),
    },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: pipe([() => live, get("SecurityGroups"), pluck("GroupId")])(),
    },
    {
      type: "InstanceProfile",
      group: "IAM",
      ids: [pipe([() => live, get("IamInstanceProfile.Arn")])()],
    },
  ];

  const findNamespace = findNamespaceInTagsOrEksCluster({
    config,
    key: "eks:cluster-name",
  });

  const findEksName = (live) =>
    pipe([
      () => live,
      findValueInTags({ key: "eks:nodegroup-name" }),
      switchCase([
        isEmpty,
        () => undefined,
        (nodegroupName) => `${nodegroupName}::${live.InstanceId}`,
      ]),
    ])();

  const findId = get("live.InstanceId");

  const findName = (params) => {
    assert(params.live);
    assert(params.lives);

    const fns = [findNameInTags(), ({ live }) => findEksName(live), findId];
    for (fn of fns) {
      const name = fn(params);
      if (!isEmpty(name)) {
        return name;
      }
    }
  };

  const getStateName = get("State.Name");
  const isInstanceUp = eq(getStateName, StateRunning);
  const isInstanceTerminated = (instance) =>
    pipe([() => [StateTerminated], includes(getStateName(instance))])();
  const isInstanceDown = (instance) =>
    pipe([
      () => [StateTerminated, StateStopped],
      includes(getStateName(instance)),
    ])();
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeInstances-property

  const decorate = pipe([
    assign({
      UserData: pipe([
        ({ InstanceId }) => ({ Attribute: "userData", InstanceId }),
        ec2().describeInstanceAttribute,
        get("UserData.Value"),
      ]),
    }),
  ]);

  const getList = ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList ec2 ${JSON.stringify(params)}`);
      }),
      () => ec2().describeInstances(params),
      get("Reservations"),
      pluck("Instances"),
      flatten,
      filter(not(isInstanceTerminated)),
      map(decorate),
    ])();

  const getByName = getByNameCore({ getList, findName });
  const getById = getByIdCore({ fieldIds: "InstanceIds", getList });

  const isUpById = isUpByIdCore({
    isInstanceUp,
    getById,
  });

  const isDownById = isDownByIdCore({
    isInstanceDown,
    getById,
  });

  const volumesAttach = ({ InstanceId, volumes = [] }) =>
    pipe([
      () => volumes,
      tap(() => {
        logger.debug(
          `volumesAttach InstanceId: ${InstanceId}, #volumes: ${size(volumes)}`
        );
      }),
      map((volume) =>
        tryCatch(
          () =>
            ec2().attachVolume({
              Device: volume.config.Device,
              InstanceId,
              VolumeId: volume.live.VolumeId,
            }),
          pipe([
            (error) => convertError({ error }),
            tap((error) => {
              logger.error(
                `error attaching volume ${volume}, error: ${tos(error)}`
              );
            }),
            (error) => ({ error, volume }),
          ])
        )()
      ),
      filter(get("error")),
      tap.if(not(isEmpty), (errors) => {
        throw Error(`cannot attach volume: ${tos(errors)}`);
      }),
      tap(() => {
        logger.debug(`volumes attached InstanceId: ${InstanceId}`);
      }),
    ])();

  const associateAddress = ({ InstanceId, eip }) =>
    pipe([
      tap(() => {
        logger.debug(`associateAddress InstanceId: ${InstanceId}`);
        assert(eip.live.AllocationId);
      }),
      () =>
        ec2().associateAddress({
          AllocationId: eip.live.AllocationId,
          InstanceId,
        }),
      tap(() => {
        logger.debug(`eip address associated, InstanceId: ${InstanceId}`);
      }),
    ])();

  const shouldRetryOnExceptionCreate = ({ error, name }) =>
    pipe([
      tap(() => {
        logger.error(
          `ec2 shouldRetryOnExceptionCreate ${tos({ name, error })}`
        );
      }),
      () => error,
      get("message"),
      includes("Invalid IAM Instance Profile ARN"),
      tap((retry) => {
        logger.error(`ec2 shouldRetryOnExceptionCreate retry: ${retry}`);
      }),
    ])();

  const updateInstanceType = ({ InstanceId, updated }) =>
    pipe([
      () => updated,
      get("InstanceType"),
      tap.if(
        not(isEmpty),
        pipe([
          (Value) => ({ InstanceId, InstanceType: { Value } }),
          ec2().modifyInstanceAttribute,
        ])
      ),
    ])();

  const instanceStart = ({ InstanceId }) =>
    pipe([
      tap(() => {
        logger.info(`instanceStart ${tos(InstanceId)}`);
      }),
      () => ec2().startInstances({ InstanceIds: [InstanceId] }),
      () =>
        retryCall({
          name: `startInstances: ${InstanceId}`,
          fn: () => isUpById({ id: InstanceId }),
          config,
        }),
    ])();

  const instanceStop = ({ InstanceId }) =>
    pipe([
      tap(() => {
        logger.info(`instanceStop ${tos(InstanceId)}`);
      }),
      () => ec2().stopInstances({ InstanceIds: [InstanceId] }),
      () =>
        retryCall({
          name: `stopInstances: ${InstanceId}`,
          fn: () => isDownById({ id: InstanceId }),
          config,
        }),
    ])();

  const update = async ({
    name,
    payload,
    live: { InstanceId },
    diff,
    dependencies,
    resolvedDependencies,
  }) =>
    pipe([
      tap(() => {
        logger.info(`update ec2 ${tos({ name, InstanceId, diff })}`);
      }),
      () => diff,
      switchCase([
        get("updateNeedDestroy"),
        pipe([
          tap(() => {
            logger.info(`ec2 updateNeedDestroy ${name}`);
          }),
          () => destroy({ id: InstanceId }),
          () => create({ name, payload, resolvedDependencies }),
        ]),
        get("updateNeedRestart"),
        pipe([
          () => instanceStop({ InstanceId }),
          () =>
            updateInstanceType({
              InstanceId,
              updated: diff.liveDiff.updated,
            }),
          () => instanceStart({ InstanceId }),
        ]),
        () => {
          throw Error(
            `Either updateNeedDestroy or updateNeedRestart is required`
          );
        },
      ]),

      tap(() => {
        logger.info(`ec2 updated ${name}`);
      }),
    ])();
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property
  const create = async ({
    name,
    payload,
    resolvedDependencies: { volumes, eip },
  }) =>
    pipe([
      tap(() => {
        logger.info(`create ec2 ${tos({ name })}`);
        logger.debug(`create ec2 ${tos({ name, payload })}`);
        assert(name, "name");
        assert(payload, "payload");
      }),
      () =>
        retryCall({
          name: `ec2 runInstances: ${name}`,
          fn: () => ec2().runInstances(payload),
          shouldRetryOnException: shouldRetryOnExceptionCreate,
          config,
        }),
      get("Instances"),
      first,
      get("InstanceId"),
      (id) =>
        retryCall({
          name: `ec2 isUpById: ${name} id: ${id}`,
          fn: () => isUpById({ name, id }),
          config: clientConfig,
        }),
      tap((instance) => {
        assert(instance, "instanceUp");
        assert(instance.Tags, "instanceUp.Tags");
        assert(
          CheckAwsTags({
            config,
            tags: instance.Tags,
            name,
          }),
          `missing tag for ${name}`
        );
      }),
      tap(({ InstanceId }) => volumesAttach({ InstanceId, volumes })),
      tap.if(
        () => eip,
        ({ InstanceId }) => associateAddress({ InstanceId, eip })
      ),
      tap(({ InstanceId }) => {
        logger.info(`created ec2 ${name}, InstanceId: ${InstanceId}`);
      }),
    ])();

  const disassociateAddress = ({ id }) =>
    pipe([
      () =>
        ec2().describeAddresses({
          Filters: [
            {
              Name: "instance-id",
              Values: [id],
            },
          ],
        }),
      get("Addresses"),
      tap((Addresses) => {
        logger.debug(`disassociateAddress ${tos({ Addresses })}`);
      }),
      first,
      tap.if(not(isEmpty), ({ AssociationId }) =>
        ec2().disassociateAddress({
          AssociationId,
        })
      ),
    ]);

  const volumesDetach = ({ id }) =>
    pipe([
      () =>
        ec2().describeVolumes({
          Filters: [
            {
              Name: "attachment.instance-id",
              Values: [id],
            },
            {
              Name: "tag-key",
              Values: [config.managedByKey],
            },
          ],
        }),
      get("Volumes"),
      tap((volumes) => {
        logger.info(`destroy ec2, detachVolume #volumes: ${volumes.length}`);
      }),
      map(
        tryCatch(
          ({ VolumeId }) => ec2().detachVolume({ VolumeId }),
          (error, volume) =>
            pipe([
              tap(() => {
                logger.error(
                  `error detaching volume ${volume}, error: ${JSON.stringify(
                    error
                  )}`
                );
              }),
              () => ({ error, volume }),
            ])()
        )
      ),
      tap((result) => {
        logger.info(`destroy ec2 volumes detached`);
      }),
    ]);

  const destroyById = async ({ id, name }) =>
    pipe([
      tap(() => {
        logger.info(
          `destroy ec2  ${tos({
            name,
            id,
          })}`
        );
        assert(id, "destroyById missing id");
      }),
      disassociateAddress({ id }),
      volumesDetach({ id }),
      () =>
        ec2().terminateInstances({
          InstanceIds: [id],
        }),
      () =>
        retryCall({
          name: `ec2 isDownById: ${name} id: ${id}`,
          fn: () => isDownById({ id }),
          config,
        }),
      tap(() => {
        logger.info(`destroyed ec2  ${tos({ name, id })}`);
      }),
    ])();
  //By live
  const destroy = destroyById;

  return {
    spec,
    findId,
    findDependencies,
    findNamespace,
    getByName,
    findName,
    create,
    update,
    destroyById,
    destroy,
    getList,
    configDefault: configDefault({ config }),
    managedByOther,
  };
};

const isInOurCluster =
  ({ config }) =>
  ({ live, lives }) =>
    pipe([
      () => ({ live, lives }),
      findEksCluster({ config, key: "eks:cluster-name" }),
      tap((cluster) => {
        assert(true);
      }),
    ])();

exports.isOurMinionEC2Instance = (item) =>
  pipe([
    tap(() => {
      assert(true);
    }),
    () => item,
    or([isInOurCluster({ config: item.config }), isOurMinion]),
    tap((isOurMinion) => {
      //logger.debug(`isOurMinionEC2Instance ${isOurMinion}`);
    }),
  ])();

const filterTarget = ({ target }) =>
  pipe([
    () => target,
    omit(["NetworkInterfaces", "TagSpecifications", "MinCount", "MaxCount"]),
  ])();

const filterLive = pipe([
  get("live"),
  omit([
    "EnclaveOptions",
    "MetadataOptions",
    "Licenses",
    "HibernationOptions",
    "CapacityReservationSpecification",
    "CpuOptions",
    "VirtualizationType",
    "SourceDestCheck",
    "SecurityGroups",
    "RootDeviceType",
    "RootDeviceName",
    "NetworkInterfaces",
    "ElasticInferenceAcceleratorAssociations",
    "ElasticGpuAssociations",
    "Hypervisor",
    "EnaSupport",
    "EbsOptimized",
    "ClientToken",
    "BlockDeviceMappings",
    "Architecture",
    "VpcId",
    "SubnetId",
    "StateTransitionReason",
    "State",
    "PublicIpAddress",
    "PublicDnsName",
    "ProductCodes",
    "PrivateIpAddress",
    "PrivateDnsName",
    "Monitoring",
    "LaunchTime",
    "InstanceId",
    "AmiLaunchIndex",
    "Placement",
    "IamInstanceProfile.Id",
    "Tags",
  ]),
  omitIfEmpty(["UserData"]),
]);

exports.compareEC2Instance = pipe([
  tap((xxx) => {
    assert(true);
  }),
  assign({
    target: filterTarget,
    live: filterLive,
  }),
  ({ target, live }) => ({
    targetDiff: pipe([
      () => detailedDiff(target, live),
      omit(["added", "deleted"]),
    ])(),
    liveDiff: pipe([
      () => detailedDiff(live, target),
      omit(["added", "deleted"]),
    ])(),
  }),
  tap((diff) => {
    logger.debug(`compareEC2Instance ${tos(diff)}`);
  }),
  assign({
    updateNeedDestroy: pipe([
      get("liveDiff.updated"),
      Object.keys,
      or([find((key) => includes(key)(["ImageId"]))]),
    ]),
    updateNeedRestart: pipe([
      get("liveDiff.updated"),
      Object.keys,
      or([find((key) => includes(key)(["InstanceType"]))]),
    ]),
  }),
  tap((diff) => {
    logger.debug(`compareEC2Instance ${tos(diff)}`);
  }),
]);
