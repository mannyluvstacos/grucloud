// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.iam.usePolicy({
    name: get(
      "config.iam.Policy.serviceRoleAmazonEc2ContainerServiceforEc2Role.name"
    ),
    properties: get(
      "config.iam.Policy.serviceRoleAmazonEc2ContainerServiceforEc2Role.properties"
    ),
  });

  provider.iam.makeRole({
    name: get("config.iam.Role.ecsInstanceRole.name"),
    properties: get("config.iam.Role.ecsInstanceRole.properties"),
    dependencies: ({ resources }) => ({
      policies: [
        resources.iam.Policy.serviceRoleAmazonEc2ContainerServiceforEc2Role,
      ],
    }),
  });

  provider.iam.makeInstanceProfile({
    name: get("config.iam.InstanceProfile.ecsInstanceRole.name"),
    dependencies: ({ resources }) => ({
      roles: [resources.iam.Role.ecsInstanceRole],
    }),
  });

  provider.ec2.makeVpc({
    name: get("config.ec2.Vpc.vpc.name"),
    properties: get("config.ec2.Vpc.vpc.properties"),
  });

  provider.ec2.makeSubnet({
    name: get("config.ec2.Subnet.pubSubnetAz1.name"),
    properties: get("config.ec2.Subnet.pubSubnetAz1.properties"),
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeSubnet({
    name: get("config.ec2.Subnet.pubSubnetAz2.name"),
    properties: get("config.ec2.Subnet.pubSubnetAz2.properties"),
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeInternetGateway({
    name: get("config.ec2.InternetGateway.internetGateway.name"),
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeRouteTable({
    name: get("config.ec2.RouteTable.routeViaIgw.name"),
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [
        resources.ec2.Subnet.pubSubnetAz1,
        resources.ec2.Subnet.pubSubnetAz2,
      ],
    }),
  });

  provider.ec2.makeRoute({
    name: get("config.ec2.Route.routeViaIgwIgw.name"),
    properties: get("config.ec2.Route.routeViaIgwIgw.properties"),
    dependencies: ({ resources }) => ({
      routeTable: resources.ec2.RouteTable.routeViaIgw,
      ig: resources.ec2.InternetGateway.internetGateway,
    }),
  });

  provider.ec2.makeSecurityGroup({
    name: get("config.ec2.SecurityGroup.ecsSecurityGroup.name"),
    properties: get("config.ec2.SecurityGroup.ecsSecurityGroup.properties"),
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: get(
      "config.ec2.SecurityGroupRuleIngress.ecsSecurityGroupRuleIngressTcp_80V4.name"
    ),
    properties: get(
      "config.ec2.SecurityGroupRuleIngress.ecsSecurityGroupRuleIngressTcp_80V4.properties"
    ),
    dependencies: ({ resources }) => ({
      securityGroup: resources.ec2.SecurityGroup.ecsSecurityGroup,
    }),
  });

  provider.autoscaling.makeAutoScalingGroup({
    name: get("config.autoscaling.AutoScalingGroup.ecsInstanceAsg.name"),
    properties: get(
      "config.autoscaling.AutoScalingGroup.ecsInstanceAsg.properties"
    ),
    dependencies: ({ resources }) => ({
      subnets: [
        resources.ec2.Subnet.pubSubnetAz1,
        resources.ec2.Subnet.pubSubnetAz2,
      ],
      launchConfiguration:
        resources.autoscaling.LaunchConfiguration
          .ec2ContainerServiceClusterEcsInstanceLcCoyk3Cqz0Qrj,
    }),
  });

  provider.autoscaling.makeLaunchConfiguration({
    name: get(
      "config.autoscaling.LaunchConfiguration.ec2ContainerServiceClusterEcsInstanceLcCoyk3Cqz0Qrj.name"
    ),
    properties: get(
      "config.autoscaling.LaunchConfiguration.ec2ContainerServiceClusterEcsInstanceLcCoyk3Cqz0Qrj.properties"
    ),
    dependencies: ({ resources }) => ({
      instanceProfile: resources.iam.InstanceProfile.ecsInstanceRole,
      securityGroups: [resources.ec2.SecurityGroup.ecsSecurityGroup],
    }),
  });

  provider.ecs.makeCluster({
    name: get("config.ecs.Cluster.cluster.name"),
    properties: get("config.ecs.Cluster.cluster.properties"),
    dependencies: ({ resources }) => ({
      capacityProviders: [resources.ecs.CapacityProvider.cp],
    }),
  });

  provider.ecs.makeCapacityProvider({
    name: get("config.ecs.CapacityProvider.cp.name"),
    properties: get("config.ecs.CapacityProvider.cp.properties"),
    dependencies: ({ resources }) => ({
      autoScalingGroup: resources.autoscaling.AutoScalingGroup.ecsInstanceAsg,
    }),
  });

  provider.ecs.makeTaskDefinition({
    name: get("config.ecs.TaskDefinition.nginx.name"),
    properties: get("config.ecs.TaskDefinition.nginx.properties"),
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
