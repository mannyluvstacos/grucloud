const assert = require("assert");
const path = require("path");
const { map } = require("rubico");
const mime = require("mime-types");

const { GoogleProvider } = require("@grucloud/provider-google");
const hook = require("./hook");
const { getFiles } = require("./utils");

exports.createResources = async ({ provider }) => {
  const { bucketName, websiteDir } = provider.config;
  assert(bucketName);
  assert(websiteDir);

  const domain = bucketName;
  const files = await getFiles({ dir: websiteDir });

  const bucketPublic = provider.storage.makeBucket({
    name: bucketName,
    properties: () => ({
      iamConfiguration: {
        uniformBucketLevelAccess: {
          enabled: true,
        },
      },
      iam: {
        bindings: [
          {
            role: "roles/storage.objectViewer",
            members: ["allUsers"],
          },
        ],
      },
      website: { mainPageSuffix: "index.html", notFoundPage: "404.html" },
    }),
  });

  await map((file) =>
    provider.storage.makeObject({
      name: file,
      dependencies: { bucket: bucketPublic },
      properties: () => ({
        path: "/",
        contentType: mime.lookup(file),
        source: path.join(websiteDir, file),
      }),
    })
  )(files);

  const sslCertificate = provider.compute.makeSslCertificate({
    name: "ssl-certificate",
    properties: () => ({
      managed: {
        domains: [domain],
      },
    }),
  });

  const backendBucket = provider.compute.makeBackendBucket({
    name: "backend-bucket",
    dependencies: { bucket: bucketPublic },
    properties: () => ({
      bucketName,
    }),
  });

  const urlMap = provider.compute.makeUrlMap({
    name: "url-map",
    dependencies: { service: backendBucket },
    properties: () => ({}),
  });

  const httpsTargetProxy = provider.compute.makeHttpsTargetProxy({
    name: "https-target-proxy",
    dependencies: { sslCertificate, urlMap },
    properties: () => ({}),
  });

  const globalForwardingRule = provider.compute.makeGlobalForwardingRule({
    name: "global-forwarding-rule",
    dependencies: { httpsTargetProxy },
    properties: () => ({}),
  });
};
