const assert = require("assert");
const { assign, pipe, tap, get, eq, pick } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const {
  createEndpoint,
  buildTags,
  shouldRetryOnException,
} = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");

const findId = get("live.Arn");
const pickId = pick(["Name"]);
const findName = get("live.Name");

const isDefault = eq(get("live.Name"), "default");

const buildArn =
  ({ config }) =>
  ({ Name }) =>
    `arn:aws:events:${config.region}:${config.accountId()}:event-bus/${Name}`;

exports.CloudWatchEventBus = ({ spec, config }) => {
  const cloudWatchEvents = () =>
    createEndpoint({ endpointName: "CloudWatchEvents" })(config);
  const client = AwsClient({ spec, config });

  const findDependencies = ({ live, lives }) => [];

  const decorate = () =>
    pipe([
      assign({
        Tags: pipe([
          buildArn({ config }),
          (ResourceARN) => ({ ResourceARN }),
          // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listTagsForResource-property
          cloudWatchEvents().listTagsForResource,
          get("Tags"),
        ]),
      }),
      tap((params) => {
        assert(true);
      }),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listEventBuses-property
  const getList = client.getList({
    method: "listEventBuses",
    getParam: "EventBuses",
    decorate,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#describeEventBus-property
  const getById = client.getById({
    pickId,
    method: "describeEventBus",
    ignoreErrorCodes: ["ResourceNotFoundException"],
  });

  const getByName = pipe([({ name }) => ({ Name: name }), getById]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#createEventBus-property
  const create = client.create({
    method: "createEventBus",
    pickId,
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#deleteEventBus-property
  const destroy = client.destroy({
    pickId,
    method: "deleteEventBus",
    getById,
    ignoreError: eq(get("code"), "ResourceNotFoundException"),
    config,
  });

  const configDefault = async ({
    name,
    namespace,
    properties,
    dependencies: {},
  }) =>
    pipe([
      () => properties,
      defaultsDeep({
        Name: name,
        Tags: buildTags({ config, namespace, name }),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    create,
    destroy,
    getByName,
    getList,
    configDefault,
    shouldRetryOnException,
    findDependencies,
    cannotBeDeleted: isDefault,
    managedByOther: isDefault,
    isDefault,
  };
};
