const { isEmpty } = require("ramda");
const AWS = require("aws-sdk");
const assert = require("assert");
const { KeyName } = require("./AwsCommon");
const toString = (x) => JSON.stringify(x, null, 4);
const logger = require("../../logger")({ prefix: "AwsTagResource" });

exports.tagResource = async ({ config, resourceType, resourceId, name }) => {
  const {
    managedByKey,
    managedByValue,
    region,
    accountId,
    stageTagKey,
    stage,
  } = config;
  assert(region);
  assert(accountId);
  assert(stage);

  AWS.config.update({ region });
  const tagApi = new AWS.ResourceGroupsTaggingAPI();

  const arnId = `arn:aws:ec2:${region}:${accountId}:${resourceType}/${resourceId}`;
  const fqn = `arn:aws:ec2:${region}:${accountId}:${resourceType}/${name}`;

  logger.debug(`tagResource: arn ${arnId}`);
  const params = {
    ResourceARNList: [arnId],
    Tags: {
      [KeyName]: name,
      [managedByKey]: managedByValue,
      [stageTagKey]: stage,
      id: resourceId,
      arnId,
      fqn,
    },
  };
  await tagApi.tagResources(params).promise();
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ResourceGroupsTaggingAPI.html#getResources-property
  const getParams = {
    TagFilters: [
      {
        Key: "id",
        Values: [resourceId],
      },
    ],
  };

  const { ResourceTagMappingList } = await tagApi
    .getResources(getParams)
    .promise();
  logger.debug(`getResource for ${arnId}: ${toString(ResourceTagMappingList)}`);
  if (isEmpty(ResourceTagMappingList)) {
    throw { code: 422, message: "resource not tagged" };
  }
};
