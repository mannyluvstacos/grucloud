const assert = require("assert");
const { get, pipe, map, eq, tap } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { Ec2New, getByIdCore, shouldRetryOnException } = require("../AwsCommon");
const { retryCall } = require("../../Retry");
const { getField } = require("../../ProviderCommon");

const {
  getByNameCore,
  findField,
  isUpByIdCore,
  isDownByIdCore,
} = require("../../Common");
const logger = require("../../../logger")({ prefix: "AwsSg" });
const { tagResource } = require("../AwsTagResource");
const { CheckAwsTags } = require("../AwsTagCheck");
const { tos } = require("../../../tos");

module.exports = AwsSecurityGroup = ({ spec, config }) => {
  assert(spec);
  assert(config);
  const { managedByDescription } = config;
  const ec2 = Ec2New(config);

  const findName = (item) => findField({ item, field: "GroupName" });
  const findId = get("GroupId");

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeSecurityGroups-property
  const getList = ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.debug(`list sg ${JSON.stringify(params)}`);
      }),
      () => ec2().describeSecurityGroups(params),
      get("SecurityGroups"),
      tap((securityGroups) => {
        logger.debug(`list sg result: ${tos(securityGroups)}`);
      }),
      (securityGroups) => ({
        total: securityGroups.length,
        items: securityGroups,
      }),
      tap(({ total }) => {
        logger.info(`list #sg ${total}`);
      }),
    ])();

  const getByName = ({ name }) => getByNameCore({ name, getList, findName });
  const getById = getByIdCore({ fieldIds: "GroupIds", getList });

  const isUpById = isUpByIdCore({ getById });
  const isDownById = isDownByIdCore({ getById });

  const cannotBeDeleted = eq(get("resource.GroupName"), "default");

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createSecurityGroup-property

  const create = async ({ payload, name }) =>
    pipe([
      tap(() => {
        logger.info(`create sg ${tos({ name })}`);
      }),
      () =>
        ec2().createSecurityGroup({
          Description: managedByDescription,
          GroupName: name,
          ...payload.create,
        }),
      get("GroupId"),
      tap((GroupId) =>
        pipe([
          () =>
            retryCall({
              name: `sg isUpById: ${name} id: ${GroupId}`,
              fn: () => isUpById({ id: GroupId, name }),
              config,
            }),
          () =>
            tagResource({
              config,
              name,
              resourceType: "security",
              resourceId: GroupId,
            }),
          () => getById({ id: GroupId }),
          (live) => {
            assert(
              CheckAwsTags({
                config,
                tags: live.Tags,
                name,
              }),
              `missing tag for ${name}`
            );
          },
          () =>
            ec2().authorizeSecurityGroupIngress({
              GroupId,
              ...payload.ingress,
            }),
        ])()
      ),
      tap((GroupId) => {
        logger.info(`created sg ${tos({ name, GroupId })}`);
      }),
      (GroupId) => ({ id: GroupId }),
    ])();

  const destroy = async ({ id, name }) =>
    pipe([
      tap(() => {
        logger.debug(`destroy sg ${tos({ name, id })}`);
      }),
      () => ec2().deleteSecurityGroup({ GroupId: id }),
      tap(() => {
        logger.debug(`destroyed sg ${tos({ name, id })}`);
      }),
    ])();

  const configDefault = async ({ name, properties, dependencies }) => {
    logger.debug(
      `configDefault ${tos({
        name,
        properties,
        dependencies,
      })}`
    );
    const { vpc } = dependencies;
    assert(vpc, "missing vpc dependency");

    const config = defaultsDeep(properties)({
      create: {
        ...(vpc && { VpcId: getField(vpc, "VpcId") }),
      },
    });
    logger.debug(`configDefault ${name} result: ${tos(config)}`);
    return config;
  };

  return {
    type: "SecurityGroup",
    spec,
    findId,
    getByName,
    getById,
    findName,
    cannotBeDeleted,
    isUpById,
    isDownById,
    getList,
    create,
    destroy,
    configDefault,
    shouldRetryOnException,
  };
};
