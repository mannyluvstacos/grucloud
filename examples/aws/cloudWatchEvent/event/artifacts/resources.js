// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.CloudWatchEvents.makeEventBus({
    name: "bus-test",
  });

  provider.CloudWatchEvents.makeRule({
    name: "rule-test",
    properties: ({ config }) => ({
      EventPattern:
        '{"source":["aws.ec2"],"detail-type":["EC2 Instance State-change Notification"]}',
      State: "ENABLED",
      Description: "testing rule",
    }),
  });

  provider.CloudWatchEvents.makeRule({
    name: "rule-test-ec2",
    properties: ({ config }) => ({
      EventPattern:
        '{"source":["aws.acm"],"detail-type":["ACM Certificate Approaching Expiration"]}',
      State: "ENABLED",
    }),
    dependencies: ({ resources }) => ({
      eventBus: resources.CloudWatchEvents.EventBus["bus-test"],
    }),
  });
};

exports.createResources = createResources;
