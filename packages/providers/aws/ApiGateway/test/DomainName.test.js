const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { pipe, tap } = require("rubico");

describe("Api Gateway DomainName", async function () {
  let config;
  let provider;
  let domainName;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({ config });
    domainName = provider.getClient({ groupType: "APIGateway::DomainName" });
    await provider.start();
  });
  after(async () => {});
  it(
    "delete with invalid id",
    pipe([
      () =>
        domainName.destroy({
          live: { domainName: "abc.it" },
        }),
    ])
  );
  it(
    "getById with invalid id",
    pipe([
      () =>
        domainName.getById({
          domainName: "abc.it",
        }),
    ])
  );
  it(
    "getByLive with invalid id",
    pipe([
      () =>
        domainName.getByName({
          name: "abc.it",
        }),
    ])
  );
});
