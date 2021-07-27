const { AwsProvider } = require("@grucloud/provider-aws");
const AdmZip = require("adm-zip");

const lambdaPolicy = require("./lambdaPolicy.json");
const lambdaAssumePolicy = require("./lambdaAssumePolicy.json");

const createZipBuffer = ({ files = [] }) => {
  const zip = new AdmZip();
  files.forEach((file) => zip.addLocalFile(file));
  return zip.toBuffer();
};

const createResources = async ({ provider }) => {
  const { config } = provider;

  const iamPolicy = provider.iam.makePolicy({
    name: "lambda-policy",
    properties: () => lambdaPolicy,
  });

  const iamRole = provider.iam.makeRole({
    name: "lambda-role",
    dependencies: { policies: [iamPolicy] },
    properties: () => lambdaAssumePolicy,
  });

  const layer = provider.lambda.makeLayer({
    name: "lambda-layer",
    dependencies: { role: iamRole },
    properties: () => ({
      Content: { ZipFile: createZipBuffer({ files: ["layer.js"] }) },
      CompatibleRuntimes: ["nodejs"],
      Description: "My Layer",
    }),
  });

  const lambda = provider.lambda.makeFunction({
    name: "lambda-hello-world-1",
    dependencies: { role: iamRole, layers: [layer] },
    properties: () => ({
      Code: { ZipFile: createZipBuffer({ files: ["helloworld.js"] }) },
      PackageType: "Zip",
      Handler: "helloworld.handler",
      Runtime: "nodejs14.x",
    }),
  });

  return {};
};

exports.createStack = async ({ config, stage }) => {
  const provider = AwsProvider({ config, stage });
  const resources = await createResources({ provider });

  return {
    provider,
    resources,
    hooks: [require("./hook")],
  };
};
