const assert = require("assert");
const { pipe, assign, map, omit, tap, get, eq } = require("rubico");
const { when } = require("rubico/x");

const { compare } = require("@grucloud/core/Common");

const { isOurMinionObject } = require("../AwsCommon");

const { SQSQueue } = require("./SQSQueue");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html
const GROUP = "SQS";

const isOurMinion = ({ live, config }) =>
  isOurMinionObject({ tags: live.tags, config });

module.exports = () =>
  map(assign({ group: () => GROUP }))([
    {
      type: "Queue",
      Client: SQSQueue,
      isOurMinion,
      propertiesDefault: {
        Attributes: {
          VisibilityTimeout: "30",
          MaximumMessageSize: "262144",
          MessageRetentionPeriod: "345600",
          DelaySeconds: "0",
          ReceiveMessageWaitTimeSeconds: "0",
        },
      },
      compare: compare({
        filterTarget: pipe([
          tap((params) => {
            assert(true);
          }),
          omit(["QueueName"]),
        ]),
        filterLive: pipe([
          omit([
            "QueueUrl",
            "Attributes.QueueArn",
            "Attributes.ApproximateNumberOfMessages",
            "Attributes.ApproximateNumberOfMessagesNotVisible",
            "Attributes.ApproximateNumberOfMessagesDelayed",
            "Attributes.CreatedTimestamp",
            "Attributes.LastModifiedTimestamp",
            "Attributes.SqsManagedSseEnabled",
          ]),
        ]),
      }),
      filterLive: () =>
        pipe([
          omit(["QueueUrl"]),
          assign({
            Attributes: pipe([
              get("Attributes"),
              omit([
                "QueueArn",
                "ApproximateNumberOfMessages",
                "ApproximateNumberOfMessagesNotVisible",
                "ApproximateNumberOfMessagesDelayed",
                "CreatedTimestamp",
                "LastModifiedTimestamp",
                "SqsManagedSseEnabled",
              ]),
              when(
                eq(get("Policy.Id"), "__default_policy_ID"),
                omit(["Policy"])
              ),
              tap((params) => {
                assert(true);
              }),
            ]),
          }),
        ]),
    },
  ]);
