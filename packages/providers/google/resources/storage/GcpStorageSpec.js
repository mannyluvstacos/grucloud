const assert = require("assert");
const { md5FileBase64 } = require("@grucloud/core/Common");
const GoogleTag = require("../../GoogleTag");
const logger = require("@grucloud/core/logger")({ prefix: "GcpStorageSpec" });

const { GcpBucket } = require("./GcpBucket");
const { GcpObject, isGcpObjectOurMinion } = require("./GcpObject");

module.exports = (config) => [
  {
    type: "Bucket",
    Client: ({ spec }) =>
      GcpBucket({
        spec,
        config,
      }),
    isOurMinion: GoogleTag.isOurMinion,
  },
  {
    type: "Object",
    dependsOn: ["Bucket"],
    Client: ({ spec }) =>
      GcpObject({
        spec,
        config,
      }),
    compare: async ({ target, live }) => {
      logger.debug(`compare object`);
      assert(live.md5Hash);
      if (target.source) {
        const md5 = await md5FileBase64(target.source);
        if (live.md5Hash !== md5) {
          return {
            liveDiff: { updated: { md5: live.md5Hash } },
            targetDiff: { updated: { md5: md5 } },
          };
        }
      }

      return [];
    },
    isOurMinion: isGcpObjectOurMinion,
  },
];
