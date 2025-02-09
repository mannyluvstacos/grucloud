// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.Route53.makeHostedZone({
    name: "grucloud.org.",
    dependencies: ({ resources }) => ({
      domain: resources.Route53Domains.Domain.grucloudOrg,
    }),
  });

  provider.Route53.makeRecord({
    name: "txt.grucloud.org.",
    properties: ({ config }) => ({
      Name: "grucloud.org.",
      Type: "TXT",
      TTL: 60,
      ResourceRecords: [
        {
          Value:
            '"google-site-verification=q_tZuuK8OFGzYbrhd_VXoqtOTtruiAmH811iULb-m30"',
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      hostedZone: resources.Route53.HostedZone.grucloudOrg,
    }),
  });

  provider.Route53Domains.useDomain({
    name: "grucloud.org",
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
