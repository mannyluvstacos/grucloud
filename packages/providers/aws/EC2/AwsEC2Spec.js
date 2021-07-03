const { pipe, assign, map } = require("rubico");

const { isOurMinion } = require("../AwsCommon");

const {
  AwsEC2,
  isOurMinionEC2Instance,
  compareEC2Instance,
} = require("./AwsEC2");
const { AwsClientKeyPair } = require("./AwsKeyPair");
const { AwsVpc } = require("./AwsVpc");
const { AwsInternetGateway } = require("./AwsInternetGateway");
const { AwsNatGateway } = require("./AwsNatGateway");
const { AwsRouteTable } = require("./AwsRouteTable");
const { AwsRoute } = require("./AwsRoute");
const { AwsSubnet } = require("./AwsSubnet");
const { AwsSecurityGroup } = require("./AwsSecurityGroup");
const {
  AwsSecurityGroupRuleIngress,
  AwsSecurityGroupRuleEgress,
} = require("./AwsSecurityGroupRule");
const { AwsElasticIpAddress } = require("./AwsElasticIpAddress");
const { AwsVolume, setupEbsVolume } = require("./AwsVolume");
const { AwsNetworkInterface } = require("./AwsNetworkInterface");
const { AwsNetworkAcl } = require("./AwsNetworkAcl");
const { AwsImage } = require("./AwsImage");

const GROUP = "ec2";

module.exports = () =>
  map(assign({ group: () => GROUP }))([
    {
      type: "KeyPair",
      Client: AwsClientKeyPair,
      listOnly: true,
      isOurMinion, // TODO do we need isOurMinion for listOnly ?
    },
    {
      type: "Image",
      Client: AwsImage,
      isOurMinion,
    },
    {
      type: "Volume",
      Client: AwsVolume,
      isOurMinion,
      setupEbsVolume,
    },
    {
      type: "Vpc",
      dependsOn: ["User", "Group"],
      Client: AwsVpc,
      isOurMinion,
    },
    {
      type: "InternetGateway",
      dependsOn: ["Vpc", "NetworkInterface"],
      Client: AwsInternetGateway,
      isOurMinion,
    },
    {
      type: "NatGateway",
      dependsOn: ["ElasticIpAddress", "Subnet", "NetworkInterface"],
      Client: AwsNatGateway,
      isOurMinion,
    },
    {
      type: "Subnet",
      dependsOn: ["Vpc", "InternetGateway", "NetworkInterface"],
      Client: AwsSubnet,
      isOurMinion,
    },
    {
      type: "RouteTable",
      dependsOn: ["Vpc", "Subnet"],
      Client: AwsRouteTable,
      isOurMinion,
    },
    {
      type: "Route",
      dependsOn: ["RouteTable", "InternetGateway", "NatGateway"],
      Client: AwsRoute,
      isOurMinion,
    },
    {
      type: "SecurityGroup",
      dependsOn: ["Vpc", "NetworkInterface", "Subnet"],
      Client: AwsSecurityGroup,
      isOurMinion,
    },
    {
      type: "SecurityGroupRuleIngress",
      dependsOn: ["SecurityGroup"],
      Client: AwsSecurityGroupRuleIngress,
      isOurMinion,
    },
    {
      type: "SecurityGroupRuleEgress",
      dependsOn: ["SecurityGroup"],
      Client: AwsSecurityGroupRuleEgress,
      isOurMinion,
    },
    {
      type: "ElasticIpAddress",
      dependsOn: ["InternetGateway", "NetworkInterface"],
      Client: AwsElasticIpAddress,
      isOurMinion,
    },
    {
      type: "Instance",
      dependsOn: [
        "SecurityGroup",
        "Subnet",
        "ElasticIpAddress",
        "IamInstanceProfile",
        "Volume",
        "NetworkInterface",
        "InternetGateway",
        "NetworkInterface",
      ],
      Client: AwsEC2,
      // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS.html#runInstances-property
      propertiesDefault: {
        InstanceType: "t2.micro",
        MaxCount: 1,
        MinCount: 1,
      },
      compare: compareEC2Instance,
      isOurMinion: isOurMinionEC2Instance,
    },
    {
      type: "NetworkInterface",
      Client: AwsNetworkInterface,
      isOurMinion,
    },
    {
      type: "NetworkAcl",
      Client: AwsNetworkAcl,
      listOnly: true,
      isOurMinion,
    },
  ]);
