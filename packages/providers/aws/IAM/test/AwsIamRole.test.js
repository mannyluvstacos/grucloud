const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { AwsIamRole } = require("../AwsIamRole");

describe("AwsIamRole", async function () {
  let config;
  let provider;
  let iamRole;
  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({
      name: "aws",
      config: () => ({ projectName: "gru-test" }),
    });
    await provider.start();
    iamRole = AwsIamRole({ config: provider.config });
  });
  it(
    "delete with invalid id",
    pipe([
      () =>
        iamRole.destroy({
          live: { Arn: "1234", apiId: "12345" },
        }),
    ])
  );
});
