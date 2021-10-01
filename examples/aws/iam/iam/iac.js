// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.IAM.usePolicy({
    name: "AmazonEKSWorkerNodePolicy",
    properties: () => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    }),
  });

  provider.IAM.makePolicy({
    name: "myPolicy-to-group",
    properties: () => ({
      PolicyName: "myPolicy-to-group",
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["s3:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow ec2:Describe",
    }),
  });

  provider.IAM.makePolicy({
    name: "myPolicy-to-role",
    properties: () => ({
      PolicyName: "myPolicy-to-role",
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["s3:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow ec2:Describe",
    }),
  });

  provider.IAM.makePolicy({
    name: "myPolicy-to-user",
    properties: () => ({
      PolicyName: "myPolicy-to-user",
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["s3:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow ec2:Describe",
    }),
  });

  provider.IAM.makeUser({
    name: "Alice",
    properties: () => ({
      UserName: "Alice",
      Path: "/",
    }),
    dependencies: ({ resources }) => ({
      iamGroups: [resources.IAM.Group.admin],
      policies: [resources.IAM.Policy.myPolicyToUser],
    }),
  });

  provider.IAM.makeGroup({
    name: "Admin",
    properties: () => ({
      GroupName: "Admin",
      Path: "/",
    }),
    dependencies: ({ resources }) => ({
      policies: [resources.IAM.Policy.myPolicyToGroup],
    }),
  });

  provider.IAM.makeRole({
    name: "role-allow-assume-role",
    properties: () => ({
      RoleName: "role-allow-assume-role",
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      policies: [
        resources.IAM.Policy.amazonEksWorkerNodePolicy,
        resources.IAM.Policy.myPolicyToRole,
      ],
    }),
  });

  provider.IAM.makeInstanceProfile({
    name: "my-profile",
    dependencies: ({ resources }) => ({
      roles: [resources.IAM.Role.roleAllowAssumeRole],
    }),
  });

  provider.EC2.makeInstance({
    name: "web-iam",
    properties: () => ({
      InstanceType: "t2.micro",
      ImageId: "ami-056bfe7d8a7bdb9d0",
    }),
    dependencies: ({ resources }) => ({
      iamInstanceProfile: resources.IAM.InstanceProfile.myProfile,
    }),
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
