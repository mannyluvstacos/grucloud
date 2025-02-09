const assert = require("assert");
const { ScalewayProvider } = require("../ScalewayProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/E2ETestUtils");

describe("ScalewayVolume", async function () {
  let config;
  let provider;
  let volume;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = ScalewayProvider({
      name: "scaleway",
      config: () => ({}),
    });
    volume = provider.makeVolume({
      name: "volume1",
      config: () => ({
        size: 20_000_000_000,
      }),
    });
  });

  after(async () => {});

  it.skip("apply and destroy", async function () {
    await testPlanDeploy({ provider });
    await testPlanDestroy({ provider });
  });
});
