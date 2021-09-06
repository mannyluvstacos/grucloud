// Generated by gcp2gc
const { get } = require("rubico");
const { GoogleProvider } = require("@grucloud/provider-google");

const createResources = ({ provider }) => {
  provider.storage.makeBucket({
    name: get("config.storage.Bucket.grucloudTest.name"),
    properties: get("config.storage.Bucket.grucloudTest.properties"),
  });

  provider.storage.makeObject({
    name: get("config.storage.Object.myfile.name"),
    properties: get("config.storage.Object.myfile.properties"),
    dependencies: ({ resources }) => ({
      bucket: resources.storage.Bucket.grucloudTest,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(GoogleProvider, {
    config: require("./config"),
  });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
