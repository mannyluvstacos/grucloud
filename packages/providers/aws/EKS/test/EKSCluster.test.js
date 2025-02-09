const assert = require("assert");
const { pipe, tap } = require("rubico");

const { AwsProvider } = require("../../AwsProvider");

describe("EKSCluster", async function () {
  let config;
  let provider;
  let cluster;

  before(async function () {
    provider = AwsProvider({
      name: "aws",
      config: () => ({ projectName: "gru-test" }),
    });
    cluster = provider.getClient({ groupType: "EKS::Cluster" });

    await provider.start();
  });

  it(
    "delete with invalid id",
    pipe([
      () =>
        cluster.destroy({
          live: { name: "12345" },
        }),
    ])
  );
});
