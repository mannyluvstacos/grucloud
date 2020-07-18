const { AwsProvider } = require("@grucloud/core");
const { GoogleProvider } = require("@grucloud/core");
const { AzureProvider } = require("@grucloud/core");
const { ScalewayProvider } = require("@grucloud/core");
const { MockProvider } = require("@grucloud/core");

const AwsStackEC2 = require("../aws/ec2/iac");
const AwsHooksEC2 = require("../aws/ec2/hooks");

const AwsStackEC2Vpc = require("../aws/ec2-vpc/iac");
const AwsHooksEC2Vpc = require("../aws/ec2-vpc/hooks");

const AwsStackS3 = require("../aws/s3/iac");
const AwsHooksS3 = require("../aws/s3/hooks");

const AzureStack = require("../azure/iac");
const AzureHooks = require("../azure/hooks");

const GoogleStack = require("../google/iac");
const GoogleHooks = require("../google/hooks");

const ScalewayStack = require("../scaleway/iac");
const ScalewayHooks = require("../scaleway/hooks");

const MockStack = require("../mock/iac");
const MockHooks = require("../mock/hooks");

const createAws = async ({ config }) => {
  const provider = await AwsProvider({
    config: { ...config.aws, stage: config.stage },
  });

  const keyPair = await provider.useKeyPair({
    name: "kp",
  });
  // Aws stack ec2
  const ec2 = await AwsStackEC2.createResources({
    provider,
    resources: { keyPair },
  });

  provider.hookAdd("ec2", AwsHooksEC2({ resources: ec2 }));

  // Aws stack ec2-vpc
  const ec2Vpc = await AwsStackEC2Vpc.createResources({
    provider,
    resources: { keyPair },
  });
  provider.hookAdd("ec2-vpc", AwsHooksEC2Vpc({ resources: ec2Vpc }));

  const s3 = await AwsStackS3.createResources({
    provider,
  });

  provider.hookAdd("ec3", AwsHooksS3({ resources: s3 }));
  return provider;
};

const createGoogle = async ({ config }) => {
  // Google
  const provider = await GoogleProvider({
    config: { ...config.google, stage: config.stage },
  });

  const resources = await GoogleStack.createResources({
    provider,
  });

  provider.hookAdd("google", GoogleHooks({ resources }));
  return provider;
};

const createAzure = async ({ config }) => {
  const provider = await AzureProvider({
    config: { ...config.azure, stage: config.stage },
  });
  const resources = await AzureStack.createResources({ provider });
  provider.hookAdd("azure", AzureHooks({ resources }));
  return provider;
};

const createScaleway = async ({ config }) => {
  const provider = await ScalewayProvider({
    config: { ...config.scaleway, stage: config.stage },
  });
  const resources = await ScalewayStack.createResources({ provider });
  provider.hookAdd("scaleway", ScalewayHooks({ resources }));
  return provider;
};

const createMock = async ({ config }) => {
  const provider = await MockProvider({
    config: { stage: config.stage },
  });

  const mock = await MockStack.createResources({ provider });
  provider.hookAdd("mock", MockHooks({ resources: mock }));
  return provider;
};

exports.createStack = async ({ config }) => {
  return {
    providers: [
      await createMock({ config }),
      await createAws({ config }),
      await createAzure({ config }),
      await createGoogle({ config }),
      await createScaleway({ config }),
    ],
  };
};
