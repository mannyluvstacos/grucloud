const assert = require("assert");
const { MockProvider } = require("../MockProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { createAxiosMock } = require("../MockAxios");
const { ProviderGru } = require("@grucloud/core/ProviderGru");
const { createProviderMaker } = require("@grucloud/core/cli/infra");

const createMockProvider = async ({
  name,
  config,
  mockCloud,
  createResources,
}) => {
  return createProviderMaker({})(MockProvider, {
    name,
    createResources,
    config: () => ({
      //...config,
      mockCloud,
      createAxios: createAxiosMock,
    }),
  });
};

describe("MockProvider errors", async function () {
  let config;
  let mockCloud;
  before(async () => {
    config = ConfigLoader({ path: "examples/multi" });
    mockCloud = MockCloud();
  });
  after(async () => {});

  it("create 2 resources with the same name", async function () {
    const provider = await createMockProvider({
      name: "mock",
      config,
      mockCloud: MockCloud(),
      createResources: ({ provider }) => {
        provider.makeIp({ name: "myip" });
        provider.makeIp({ name: "myip" });
      },
    });
    const resources = provider.resources();
    assert(!isEmpty(resources));
  });
  it("create 2 providers with the same resource name", async function () {
    const provider1 = await createMockProvider({
      name: "mock1",
      config,
      mockCloud,
      createResources: ({ provider }) => {
        provider.makeIp({ name: "myip" });
      },
    });
    const provider2 = await createMockProvider({
      name: "mock2",
      config,
      mockCloud,
      createResources: ({ provider }) => {
        provider.makeIp({ name: "myip" });
      },
    });

    const providersGru = ProviderGru({
      stacks: [{ provider: provider1 }, { provider: provider2 }],
    });
    const result = providersGru.planQuery();
    assert(!result.error);
  });

  it("empty create plan, non empty destroy plan", async function () {
    const mockCloud = MockCloud();
    {
      const provider = await createMockProvider({
        name: "mock1",
        config,
        mockCloud,
        createResources: ({ provider }) => {
          provider.makeVolume({
            name: "volume1",
            properties: () => ({
              size: 20_000_000_000,
            }),
          });

          provider.makeServer({
            name: "web-server",
            properties: () => ({
              diskSizeGb: "20",
              machineType: "f1-micro",
            }),
          });

          provider.makeIp({
            name: "ip",
            properties: () => ({}),
          });
        },
      });

      const providersGru = ProviderGru({ stacks: [{ provider }] });
      const { error } = providersGru.planQuery();
      assert(!error);
    }
    {
      const provider = await createMockProvider({
        name: "mock2",
        config,
        mockCloud,
        createResources: ({ provider }) => {},
      });
      const providersGru = ProviderGru({ stacks: [{ provider }] });
      const { error } = providersGru.planQuery();
      assert(!error);
    }
  });
});
