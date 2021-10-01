// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.IAM.makePolicy({
    name: "lambda-policy",
    properties: () => ({
      PolicyName: "lambda-policy",
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["logs:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow logs",
    }),
  });

  provider.IAM.makeRole({
    name: "lambda-role",
    properties: () => ({
      RoleName: "lambda-role",
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      policies: [resources.IAM.Policy.lambdaPolicy],
    }),
  });

  provider.ACM.makeCertificate({
    name: "grucloud.org",
    properties: () => ({
      DomainName: "grucloud.org",
    }),
  });

  provider.Route53Domains.useDomain({
    name: "grucloud.org",
  });

  provider.Route53.makeHostedZone({
    name: "grucloud.org.",
    dependencies: ({ resources }) => ({
      domain: resources.Route53Domains.Domain.grucloudOrg,
    }),
  });

  provider.Route53.makeRecord({
    name: "api-gateway-alias-record",
    dependencies: ({ resources }) => ({
      hostedZone: resources.Route53.HostedZone.grucloudOrg,
      apiGatewayV2DomainName: resources.ApiGatewayV2.DomainName.grucloudOrg,
    }),
  });

  provider.Route53.makeRecord({
    name: "certificate-validation-grucloud.org.",
    dependencies: ({ resources }) => ({
      hostedZone: resources.Route53.HostedZone.grucloudOrg,
      certificate: resources.ACM.Certificate.grucloudOrg,
    }),
  });

  provider.Lambda.makeFunction({
    name: "my-function",
    properties: () => ({
      FunctionName: "my-function",
      Handler: "my-function.handler",
      PackageType: "Zip",
      Runtime: "nodejs14.x",
      Description: "",
      Timeout: 3,
      MemorySize: 128,
    }),
    dependencies: ({ resources }) => ({
      role: resources.IAM.Role.lambdaRole,
    }),
  });

  provider.ApiGatewayV2.makeApi({
    name: "my-api",
    properties: () => ({
      Name: "my-api",
      ProtocolType: "HTTP",
      ApiKeySelectionExpression: "$request.header.x-api-key",
      DisableExecuteApiEndpoint: false,
      RouteSelectionExpression: "$request.method $request.path",
    }),
  });

  provider.ApiGatewayV2.makeIntegration({
    name: "integration-lambda",
    properties: () => ({
      ConnectionType: "INTERNET",
      Description: "",
      IntegrationMethod: "POST",
      IntegrationType: "AWS_PROXY",
      PayloadFormatVersion: "2.0",
    }),
    dependencies: ({ resources }) => ({
      api: resources.ApiGatewayV2.Api.myApi,
      lambdaFunction: resources.Lambda.Function.myFunction,
    }),
  });

  provider.ApiGatewayV2.makeRoute({
    name: "ANY /my-function",
    properties: () => ({
      ApiKeyRequired: false,
      AuthorizationType: "NONE",
      RouteKey: "ANY /my-function",
    }),
    dependencies: ({ resources }) => ({
      api: resources.ApiGatewayV2.Api.myApi,
      integration: resources.ApiGatewayV2.Integration.integrationLambda,
    }),
  });

  provider.ApiGatewayV2.makeStage({
    name: "my-api-stage-dev",
    properties: () => ({
      StageName: "my-api-stage-dev",
      StageVariables: {},
    }),
    dependencies: ({ resources }) => ({
      api: resources.ApiGatewayV2.Api.myApi,
    }),
  });

  provider.ApiGatewayV2.makeDeployment({
    name: "my-api-deployment",
    properties: () => ({
      Description: "",
    }),
    dependencies: ({ resources }) => ({
      api: resources.ApiGatewayV2.Api.myApi,
      stage: resources.ApiGatewayV2.Stage.myApiStageDev,
    }),
  });

  provider.ApiGatewayV2.makeDomainName({
    name: "grucloud.org",
    properties: () => ({
      DomainName: "grucloud.org",
    }),
    dependencies: ({ resources }) => ({
      certificate: resources.ACM.Certificate.grucloudOrg,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, {
    config: require("./config"),
  });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
