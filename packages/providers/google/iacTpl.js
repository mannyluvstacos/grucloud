exports.iacTpl = ({ resourcesCode, resourcesVarNames = [] }) => `
// Generated by gcp2gc
const { GoogleProvider } = require("@grucloud/provider-google");

const createResources = ({ provider }) => {
  ${resourcesCode}
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(GoogleProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
`;
