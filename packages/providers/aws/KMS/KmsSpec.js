const assert = require("assert");
const { pipe, assign, map, omit, tap, not, get, pick } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { compare } = require("@grucloud/core/Common");
const { isOurMinionFactory } = require("../AwsCommon");
const { KmsKey } = require("./KmsKey");

const GROUP = "KMS";

module.exports = () =>
  map(assign({ group: () => GROUP }))([
    {
      type: "Key",
      Client: KmsKey,
      isOurMinion: isOurMinionFactory({ key: "TagKey", value: "TagValue" }),
      compare: compare({
        filterTarget: pipe([
          omit(["Tags", "KeyState"]),
          defaultsDeep({
            Enabled: true,
            KeyManager: "CUSTOMER",
            KeySpec: "SYMMETRIC_DEFAULT",
            CustomerMasterKeySpec: "SYMMETRIC_DEFAULT",
            MultiRegion: false,
            Origin: "AWS_KMS",
            Description: "",
            KeyUsage: "ENCRYPT_DECRYPT",
            EncryptionAlgorithms: ["SYMMETRIC_DEFAULT"],
          }),
        ]),
        filterLive: pipe([
          omit([
            "AWSAccountId",
            "KeyId",
            "Arn",
            "Alias",
            "CreationDate",
            "DeletionDate",
            "KeyState",
            "Tags",
          ]),
        ]),
      }),
      filterLive: () => pick([""]),
      ignoreResource: ({ lives }) =>
        pipe([
          tap((params) => {
            assert(true);
          }),
          not(get("live.Enabled")),
        ]),
    },
  ]);
