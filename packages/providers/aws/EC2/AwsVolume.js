const {
  get,
  switchCase,
  tryCatch,
  pipe,
  not,
  tap,
  eq,
  omit,
  or,
  any,
} = require("rubico");
const {
  isEmpty,
  defaultsDeep,
  first,
  identity,
  find,
  prepend,
  unless,
} = require("rubico/x");
const assert = require("assert");
const logger = require("@grucloud/core/logger")({ prefix: "AwsVolume" });
const { retryCall } = require("@grucloud/core/Retry");
const { EC2Instance } = require("./EC2Instance");

const { tos } = require("@grucloud/core/tos");
const {
  getByNameCore,
  isUpByIdCore,
  isDownByIdCore,
} = require("@grucloud/core/Common");
const {
  Ec2New,
  findNameInTagsOrId,
  shouldRetryOnException,
  getByIdCore,
  buildTags,
  findNamespaceInTags,
  hasKeyInTags,
  findValueInTags,
} = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");

exports.AwsVolume = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const ec2 = Ec2New(config);

  const awsEC2 = EC2Instance({ config, spec });

  const managedByOther = or([
    hasKeyInTags({
      key: "kubernetes.io/cluster/",
    }),
    ({ live, lives }) =>
      pipe([
        () => live,
        get("Attachments"),
        any(({ Device, InstanceId }) =>
          pipe([
            () =>
              lives.getById({
                providerName: config.providerName,
                type: "Instance",
                group: "EC2",
                id: InstanceId,
              }),
            tap((instance) => {
              assert(instance, "cannot find ec2 instance");
            }),
            eq(get("live.RootDeviceName"), Device),
          ])()
        ),
      ])(),
  ]);

  const findId = get("live.VolumeId");

  const findNameKubernetes = switchCase([
    managedByOther,
    pipe([
      get("live"),
      findValueInTags({ key: "kubernetes.io/created-for/pvc/name" }),
      tap((pvcName) => {
        //assert(pvcName);
      }),
      unless(isEmpty, prepend("kubernetes-")),
    ]),
    () => undefined,
  ]);

  const findNameEC2 = switchCase([
    managedByOther,
    ({ live, lives }) =>
      pipe([
        () => live,
        get("Attachments"),
        first,
        ({ InstanceId }) =>
          lives.getById({
            providerName: config.providerName,
            type: "Instance",
            group: "EC2",
            id: InstanceId,
          }),
        get("name"),
        prepend("vol-"),
      ])(),
    () => undefined,
  ]);

  const findName = (params) => {
    const fns = [
      findNameKubernetes,
      findNameEC2,
      findNameInTagsOrId({ findId }),
    ];
    for (fn of fns) {
      const name = fn(params);
      if (!isEmpty(name)) {
        return name;
      }
    }
    assert(false, "should have a name");
  };

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeVolumes-property
  const getList = ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList volume ${JSON.stringify({ params })}`);
      }),
      () => ec2().describeVolumes(params),
      get("Volumes"),
    ])();

  const getByName = getByNameCore({ getList, findName });
  const getById = getByIdCore({ fieldIds: "VolumeIds", getList });
  const isInstanceUp = eq(get("State"), "available");
  const isUpById = isUpByIdCore({
    isInstanceUp,
    getById,
  });

  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createVolume-property

  const create = ({ payload, name }) =>
    pipe([
      tap(() => {
        logger.info(`create volume ${tos({ name })}`);
        logger.debug(tos({ payload }));
      }),
      () => ec2().createVolume(omit(["Device"])(payload)),
      tap((result) => {
        logger.info(`created volume ${tos({ result })}`);
      }),
      ({ VolumeId }) =>
        retryCall({
          name: `volume is available: ${name} VolumeId: ${VolumeId}`,
          fn: () => isUpById({ name, id: VolumeId }),
          config,
        }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deleteVolume-property
  const destroy = ({ id, name }) =>
    pipe([
      tap(() => {
        logger.info(`destroy volume ${JSON.stringify({ name, id })}`);
      }),
      tryCatch(
        () => ec2().deleteVolume({ VolumeId: id }),
        tap.if(not(eq(get("code"), "InvalidVolume.NotFound")), (error) => {
          throw error;
        })
      ),
      tap(() =>
        retryCall({
          name: `destroy volume isDownById: ${name} id: ${id}`,
          fn: () => isDownById({ id }),
          config,
        })
      ),
      tap(() => {
        logger.info(`volume destroyed ${JSON.stringify({ name, id })}`);
      }),
    ])();

  const configDefault = ({ name, namespace, properties, dependencies }) =>
    defaultsDeep({
      Size: 10,
      Device: "/dev/sdf",
      AvailabilityZone: config.zone(),
      VolumeType: "standard",
      TagSpecifications: [
        {
          ResourceType: "volume",
          Tags: buildTags({ config, namespace, name }),
        },
      ],
    })(properties);

  const cannotBeDeleted = pipe([
    get("live.Attachments"),
    first,
    get("DeleteOnTermination"),
  ]);

  const findInstanceId = pipe([get("Attachments"), first, get("InstanceId")]);

  const findNamespaceFromInstanceId = ({ live, lives }) =>
    pipe([
      () =>
        lives.getByType({
          type: "Instance",
          group: "EC2",
          providerName: config.providerName,
        }),
      find(eq(get("live.InstanceId"), findInstanceId(live))),
      unless(isEmpty, ({ live }) => awsEC2.findNamespace({ live, lives })),
      tap((namespace) => {
        logger.debug(`findNamespaceFromInstanceId ${namespace}`);
      }),
    ])();

  const findNamespace = ({ live, lives }) =>
    pipe([
      () => findNamespaceInTags(config)({ live }),
      switchCase([
        isEmpty,
        () => findNamespaceFromInstanceId({ live, lives }),
        identity,
      ]),
      tap((namespace) => {
        logger.debug(`findNamespace`, namespace);
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    getByName,
    findName,
    getList,
    create,
    destroy,
    configDefault,
    shouldRetryOnException,
    cannotBeDeleted,
    managedByOther,
  };
};

exports.setupEbsVolume = ({
  deviceMounted = "/dev/xvdf",
  mountPoint = "/data",
}) => `#!/bin/bash
echo "Mounting ${deviceMounted}"
while ! ls ${deviceMounted} > /dev/null
do 
  sleep 1
done
if [ \`file -s ${deviceMounted} | cut -d ' ' -f 2\` = 'data' ]
then
  echo "Formatting ${deviceMounted}"
  mkfs.xfs ${deviceMounted}
fi
mkdir -p ${mountPoint}
mount ${deviceMounted} ${mountPoint}
echo ${deviceMounted} ${mountPoint} defaults,nofail 0 2 >> /etc/fstab
`;
