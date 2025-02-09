const assert = require("assert");
const { GoogleProvider } = require("../GoogleProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { Cli } = require("@grucloud/core/cli/cliCommands");

const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/E2ETestUtils");

describe.skip("GcpServiceAccount", async function () {
  const types = ["ServiceAccount"];
  const serviceAccountName = "sa-test";
  const serviceAccountDisplayName = "Sa Display Name";
  let config;
  let provider;
  let serviceAccount;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }

    provider = GoogleProvider({
      name: "google",
      config: () => ({
        projectId: "grucloud-test",
      }),
    });

    serviceAccount = provider.iam.makeServiceAccount({
      name: serviceAccountName,
      properties: () => ({
        serviceAccount: {
          displayName: serviceAccountDisplayName,
        },
      }),
    });
  });
  after(async () => {});

  it("serviceAccount apply and destroy", async function () {
    await testPlanDeploy({
      provider,
      types,
      planResult: { create: 1, destroy: 0 },
    });

    const serviceAccountLive = await serviceAccount.getLive();
    assert(serviceAccountLive);

    {
      const providerEmpty = GoogleProvider({
        config: () => ({
          projectId: "grucloud-test",
        }),
      });
      const cli = await Cli({
        createStack: () => ({ provider: providerEmpty }),
      });

      const result = await cli.planDestroy({
        commandOptions: { force: true, types },
      });
      assert(!result.error, "destroyAll failed");
    }
    {
      const cli = await Cli({
        createStack: () => ({ provider }),
      });

      const result = await cli.planDestroy({
        commandOptions: { force: true, types, all: false },
      });
      assert(!result.error, "destroyAll failed");
    }
  });
});
