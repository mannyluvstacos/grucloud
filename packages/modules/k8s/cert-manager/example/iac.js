const { K8sProvider } = require("@grucloud/provider-k8s");
const ModuleCertManager = require("../iac");

const createResources = async ({ provider }) => {
  const namespace = provider.makeNamespace({
    name: "example",
  });

  const resources = await ModuleCertManager.createResources({ provider });
};
exports.createStack = async ({ createProvider }) => {
  const provider = await createProvider(K8sProvider, {
    createResources,
    configs: [require("./config"), ModuleCertManager.config],
    manifests: [...(await ModuleCertManager.loadManifest())],
  });

  return { provider };
};
