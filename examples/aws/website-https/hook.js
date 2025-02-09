const assert = require("assert");
const { Resolver } = require("dns").promises;
const { retryCallOnError, retryCall } = require("@grucloud/core").Retry;
const Axios = require("axios");
const { pipe, get, switchCase } = require("rubico");
const { first, find, isEmpty } = require("rubico/x");
const { makeDomainName } = require("./dumpster");

const checkDig = async ({ nameServer, domain, type = "A" }) => {
  let commandParam = [domain, type];
  const resolver = new Resolver();

  if (nameServer) {
    const ipDns = await resolver.resolve4(nameServer);
    resolver.setServers(ipDns);
  }

  await retryCall({
    name: `dig ${commandParam}`,
    // TODO rubico when
    fn: switchCase([
      () => type === "A",
      () => resolver.resolve4(domain),
      () => {
        //TODO
      },
    ]),
    shouldRetryOnException: ({ error, name }) => {
      return true;
    },
    isExpectedResult: (digResult) => {
      return !isEmpty(digResult);
    },
    config: { retryCount: 200, retryDelay: 5e3 },
  });
};

module.exports = ({ provider }) => {
  const { DomainName, stage } = provider.config;

  const domainName = makeDomainName({
    DomainName,
    stage,
  });

  const bucketUrl = `https://${domainName}`;

  //const bucketUrl404 = `${bucketStorageUrl}/404.html`;

  const axios = Axios.create({
    timeout: 15e3,
    withCredentials: true,
  });

  return {
    onDeployed: {
      init: async () => {
        const resources = provider.resources();
        const websiteBucket =
          resources.S3.Bucket["cloudfront.aws.test.grucloud.org-dev"];
        const hostedZone =
          resources.Route53.HostedZone["dev.cloudfront.aws.test.grucloud.org."];
        const distribution =
          resources.CloudFront.Distribution[
            "distribution-cloudfront.aws.test.grucloud.org-dev"
          ];
        const certificate =
          resources.ACM.Certificate["dev.cloudfront.aws.test.grucloud.org"];
        assert(websiteBucket);
        assert(hostedZone);
        assert(distribution);
        assert(DomainName);
        assert(certificate);
        const hostedZoneLive = await hostedZone.getLive();
        assert.equal(hostedZoneLive.ResourceRecordSetCount, 4);

        const sslCertificateLive = await certificate.getLive();
        const distributionLive = await distribution.getLive();

        const distributionDomainName = distributionLive.DomainName;
        assert(distributionDomainName);
        const distrubutionUrl = `https://${distributionDomainName}`;

        const bucketStorageUrl = `http://${websiteBucket.name}.s3.amazonaws.com`;
        const bucketUrlIndex = `${bucketStorageUrl}/index.html`;

        return {
          hostedZoneLive,
          sslCertificateLive,
          distrubutionUrl,
          bucketStorageUrl,
          bucketUrlIndex,
          certificate,
        };
      },
      actions: [
        {
          name: `get`,
          command: async ({ bucketUrlIndex }) => {
            await retryCallOnError({
              name: `get  ${bucketUrlIndex}`,
              fn: () => axios.get(bucketUrlIndex),
              shouldRetryOnException: ({ error }) =>
                [404].includes(error.response?.status),
              isExpectedResult: (result) => {
                assert(result.headers["content-type"], `text/html`);
                return [200].includes(result.status);
              },
              config: { retryCount: 20, retryDelay: 5e3 },
            });
          },
        },
        {
          name: `get distribution default page`,
          command: async ({ distrubutionUrl }) => {
            await retryCallOnError({
              name: `get  ${distrubutionUrl}`,
              fn: () => axios.get(distrubutionUrl),
              shouldRetryOnException: ({ error }) => {
                return [404].includes(error.response?.status);
              },
              config: { retryCount: 20, retryDelay: 5e3 },
            });
          },
        },
        {
          name: `ssl certificate ready`,
          command: async ({ certificate }) => {
            await retryCall({
              name: `getting certificate status`,
              fn: () => certificate.getLive(),
              isExpectedResult: (sslCertificateLive) => {
                return sslCertificateLive.Status == "ISSUED";
              },
              config: { retryCount: 500, retryDelay: 5e3 },
            });
          },
        },
        // {
        //   name: `dig nameservers from RecordSet ${domainName}`,
        //   command: async ({ hostedZoneLive }) => {
        //     const nameServer = pipe([
        //       find((record) => record.Type === "NS"),
        //       get("ResourceRecords"),
        //       first,
        //       get("Value"),
        //     ])(hostedZoneLive.RecordSet);
        //     await checkDig({
        //       nameServer,
        //       domain: domainName,
        //     });
        //   },
        // },
        // {
        //   name: `dig default nameserver ${domainName}`,
        //   command: async ({}) => {
        //     await checkDig({
        //       domain: domainName,
        //     });
        //   },
        // },
        // {
        //   name: `get ${bucketUrl}`,
        //   command: async () => {
        //     await retryCallOnError({
        //       name: `get  ${bucketUrl}`,
        //       fn: () => axios.get(bucketUrl),
        //       shouldRetryOnException: ({ error }) =>
        //         [404].includes(error.response?.status),
        //       isExpectedResult: (result) => {
        //         assert.equal(result.headers["content-type"], `text/html`);
        //         return [200].includes(result.status);
        //       },
        //       config: { retryCount: 200, retryDelay: 5e3 },
        //     });
        //   },
        // },
      ],
    },
  };
};
