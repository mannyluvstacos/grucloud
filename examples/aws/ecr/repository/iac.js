const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.ecr.makeRepository({
    name: config.ecr.Repository.starhackitLb.name,
    properties: () => config.ecr.Repository.starhackitLb.properties,
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
