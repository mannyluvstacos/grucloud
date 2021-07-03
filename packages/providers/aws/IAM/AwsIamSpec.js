const { pipe, assign, map } = require("rubico");
const { AwsIamUser } = require("./AwsIamUser");
const { AwsIamGroup, isOurMinionIamGroup } = require("./AwsIamGroup");
const { AwsIamRole } = require("./AwsIamRole");
const {
  AwsIamInstanceProfile,
  isOurMinionInstanceProfile,
} = require("./AwsIamInstanceProfile");
const { AwsIamPolicy, isOurMinionIamPolicy } = require("./AwsIamPolicy");

const {
  AwsIamOpenIDConnectProvider,
} = require("./AwsIamOpenIDConnectProvider");

const { isOurMinion } = require("../AwsCommon");

const GROUP = "iam";

module.exports = () =>
  map(assign({ group: () => GROUP }))([
    {
      type: "OpenIDConnectProvider",
      Client: AwsIamOpenIDConnectProvider,
      isOurMinion,
    },
    {
      type: "User",
      dependsOn: ["Policy", "Group"],
      Client: AwsIamUser,
      isOurMinion,
    },
    {
      type: "Group",
      dependsOn: ["Policy"],
      Client: AwsIamGroup,
      isOurMinion: isOurMinionIamGroup,
    },
    {
      type: "Role",
      dependsOn: ["Policy"],
      Client: AwsIamRole,
      isOurMinion,
    },
    {
      type: "Policy",
      Client: AwsIamPolicy,
      isOurMinion: isOurMinionIamPolicy,
    },
    {
      type: "InstanceProfile",
      dependsOn: ["Role"],
      Client: AwsIamInstanceProfile,
      isOurMinion: isOurMinionInstanceProfile,
    },
  ]);
