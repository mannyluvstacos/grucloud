// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.storage.makeBucket({
    name: "grucloud-test",
    properties: ({ config }) => ({
      storageClass: "STANDARD",
      iamConfiguration: {
        bucketPolicyOnly: {
          enabled: false,
        },
        uniformBucketLevelAccess: {
          enabled: false,
        },
        publicAccessPrevention: "inherited",
      },
      iam: {
        bindings: [
          {
            role: "roles/storage.legacyBucketOwner",
            members: [
              "projectEditor:grucloud-test",
              "projectOwner:grucloud-test",
            ],
          },
          {
            role: "roles/storage.legacyBucketReader",
            members: ["projectViewer:grucloud-test"],
          },
        ],
      },
    }),
  });

  provider.storage.makeObject({
    name: "myfile",
    properties: ({ config }) => ({
      contentType: "text/json",
      storageClass: "STANDARD",
    }),
    dependencies: ({ resources }) => ({
      bucket: resources.storage.Bucket["grucloud-test"],
    }),
  });
};

exports.createResources = createResources;
