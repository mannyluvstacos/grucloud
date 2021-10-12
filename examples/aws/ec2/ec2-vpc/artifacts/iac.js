// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.EC2.makeVpc({
    name: "vpc-ec2-example",
    properties: ({ config }) => ({
      CidrBlock: "10.1.0.0/16",
      DnsSupport: true,
      DnsHostnames: false,
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet",
    properties: ({ config }) => ({
      CidrBlock: "10.1.0.0/24",
      AvailabilityZone: "eu-west-2a",
      MapPublicIpOnLaunch: false,
      MapCustomerOwnedIpOnLaunch: false,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc.vpcEc2Example,
    }),
  });

  provider.EC2.makeKeyPair({
    name: "kp-ec2-vpc",
  });

  provider.EC2.makeVolume({
    name: "volume",
    properties: ({ config }) => ({
      Size: 5,
      VolumeType: "standard",
      AvailabilityZone: "eu-west-2a",
    }),
  });

  provider.EC2.makeElasticIpAddress({
    name: "myip",
  });

  provider.EC2.makeInternetGateway({
    name: "ig",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc.vpcEc2Example,
    }),
  });

  provider.EC2.makeRouteTable({
    name: "route-table",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc.vpcEc2Example,
      subnets: [resources.EC2.Subnet.subnet],
    }),
  });

  provider.EC2.makeRoute({
    name: "route-ig",
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable.routeTable,
      ig: resources.EC2.InternetGateway.ig,
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "security-group",
    properties: ({ config }) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc.vpcEc2Example,
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-icmp",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "icmp",
        FromPort: -1,
        ToPort: -1,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup.securityGroup,
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-ssh",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup.securityGroup,
    }),
  });

  provider.EC2.makeInstance({
    name: "web-server-ec2-vpc",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-07d80543a234df229",
      UserData:
        "#!/bin/bash\necho \"Mounting /dev/xvdf\"\nwhile ! ls /dev/xvdf > /dev/null\ndo \n  sleep 1\ndone\nif [ `file -s /dev/xvdf | cut -d ' ' -f 2` = 'data' ]\nthen\n  echo \"Formatting /dev/xvdf\"\n  mkfs.xfs /dev/xvdf\nfi\nmkdir -p /data\nmount /dev/xvdf /data\necho /dev/xvdf /data defaults,nofail 0 2 >> /etc/fstab\n",
    }),
    dependencies: ({ resources }) => ({
      subnet: resources.EC2.Subnet.subnet,
      keyPair: resources.EC2.KeyPair.kpEc2Vpc,
      eip: resources.EC2.ElasticIpAddress.myip,
      securityGroups: [resources.EC2.SecurityGroup.securityGroup],
      volumes: [resources.EC2.Volume.volume],
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
