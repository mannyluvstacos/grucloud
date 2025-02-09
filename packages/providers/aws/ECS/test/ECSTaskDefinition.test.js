const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { pipe, tap } = require("rubico");

describe("ECSTaskDefinition", async function () {
  let config;
  let provider;
  let taskdefinition;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({ config });
    taskdefinition = provider.getClient({ groupType: "ECS::TaskDefinition" });
    await provider.start();
  });
  it(
    "delete with invalid id",
    pipe([
      () =>
        taskdefinition.destroy({
          live: {
            taskDefinitionArn:
              "arn:aws:ecs:eu-west-2:840541460064:task-definition/not-exist:1",
          },
        }),
    ])
  );
  it(
    "getByName with invalid id",
    pipe([
      () =>
        taskdefinition.getByName({
          name: "124",
        }),
    ])
  );
});
