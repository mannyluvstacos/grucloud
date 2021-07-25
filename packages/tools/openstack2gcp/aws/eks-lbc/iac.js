// Generated by aws2gc
const { set, pipe } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = async ({ provider }) => {
  const { config } = provider;

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEc2ContainerRegistryReadOnly.name,
    namespace: "EKS",
    properties: () =>
      config.iam.Policy.amazonEc2ContainerRegistryReadOnly.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksCniPolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksCniPolicy.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksClusterPolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksClusterPolicy.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksvpcResourceController.name,
    namespace: "EKS",
    properties: () =>
      config.iam.Policy.amazonEksvpcResourceController.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksWorkerNodePolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksWorkerNodePolicy.properties,
  });

  provider.iam.makePolicy({
    name: config.iam.Policy.awsLoadBalancerControllerIamPolicy.name,
    namespace: "LoadBalancerControllerRole",
    properties: () =>
      config.iam.Policy.awsLoadBalancerControllerIamPolicy.properties,
  });

  provider.iam.makeRole({
    name: config.iam.Role.roleCluster.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      policies: [
        resources.iam.Policy.amazonEksClusterPolicy,
        resources.iam.Policy.amazonEksvpcResourceController,
      ],
    }),
    properties: () => config.iam.Role.roleCluster.properties,
  });

  provider.iam.makeRole({
    name: config.iam.Role.roleLoadBalancer.name,
    namespace: "LoadBalancerControllerRole",
    dependencies: (resources) => ({
      policies: [resources.iam.Policy.awsLoadBalancerControllerIamPolicy],
      openIdConnectProvider: resources.iam.OpenIDConnectProvider.oidcEks,
    }),
  });

  provider.iam.makeRole({
    name: config.iam.Role.roleNodeGroup.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      policies: [
        resources.iam.Policy.amazonEksWorkerNodePolicy,
        resources.iam.Policy.amazonEc2ContainerRegistryReadOnly,
        resources.iam.Policy.amazonEksCniPolicy,
      ],
    }),
    properties: () => config.iam.Role.roleNodeGroup.properties,
  });

  provider.iam.useInstanceProfile({
    name: config.iam.InstanceProfile.eks_1abd6da8_68d5_84a6_7af4_30618ba3c23a
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      roles: [resources.iam.Role.roleNodeGroup],
    }),
  });

  provider.iam.makeOpenIDConnectProvider({
    name: config.iam.OpenIDConnectProvider.oidcEks.name,
    namespace: "LoadBalancerControllerRole",
    dependencies: (resources) => ({
      cluster: resources.eks.Cluster.cluster,
    }),
  });

  provider.ec2.makeVpc({
    name: config.ec2.Vpc.vpc.name,
    namespace: "VPC",
    properties: () => config.ec2.Vpc.vpc.properties,
  });

  provider.ec2.useDefaultVpc({
    name: config.ec2.Vpc.vpcDefault.name,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPrivateA.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPrivateA.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPrivateB.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPrivateB.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPublicA.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPublicA.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPublicB.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPublicB.properties,
  });

  provider.ec2.useVolume({
    name: config.ec2.Volume.kubernetesPvDbPostgres_0.name,
    namespace: "EKS",
    properties: () => config.ec2.Volume.kubernetesPvDbPostgres_0.properties,
  });

  provider.ec2.useVolume({
    name: config.ec2.Volume.vol_0f1087128099b1ce7.name,
    namespace: "EKS",
    properties: () => config.ec2.Volume.vol_0f1087128099b1ce7.properties,
  });

  provider.ec2.makeElasticIpAddress({
    name: config.ec2.ElasticIpAddress.iep.name,
    namespace: "VPC",
  });

  provider.ec2.makeInternetGateway({
    name: config.ec2.InternetGateway.internetGateway.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeNatGateway({
    name: config.ec2.NatGateway.natGateway.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      subnet: resources.ec2.Subnet.subnetPublicA,
      eip: resources.ec2.ElasticIpAddress.iep,
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePrivateA.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [resources.ec2.Subnet.subnetPrivateA],
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePrivateB.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [resources.ec2.Subnet.subnetPrivateB],
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePublic.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [
        resources.ec2.Subnet.subnetPublicB,
        resources.ec2.Subnet.subnetPublicA,
      ],
    }),
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePrivateA.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      routeTable: resources.ec2.RouteTable.routeTablePrivateA,
      natGateway: resources.ec2.NatGateway.natGateway,
    }),
    properties: () => config.ec2.Route.routePrivateA.properties,
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePrivateB.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      routeTable: resources.ec2.RouteTable.routeTablePrivateB,
      natGateway: resources.ec2.NatGateway.natGateway,
    }),
    properties: () => config.ec2.Route.routePrivateB.properties,
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePublic.name,
    namespace: "VPC",
    dependencies: (resources) => ({
      routeTable: resources.ec2.RouteTable.routeTablePublic,
      ig: resources.ec2.InternetGateway.internetGateway,
    }),
    properties: () => config.ec2.Route.routePublic.properties,
  });

  provider.ec2.useSecurityGroup({
    name: config.ec2.SecurityGroup.eksClusterSgCluster_872092154.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () =>
      config.ec2.SecurityGroup.eksClusterSgCluster_872092154.properties,
  });

  provider.ec2.useSecurityGroup({
    name: config.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () =>
      config.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6.properties,
  });

  provider.ec2.makeSecurityGroup({
    name: config.ec2.SecurityGroup.securityGroupCluster.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.SecurityGroup.securityGroupCluster.properties,
  });

  provider.ec2.makeSecurityGroup({
    name: config.ec2.SecurityGroup.securityGroupNode.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.SecurityGroup.securityGroupNode.properties,
  });

  provider.ec2.useDefaultSecurityGroup({
    name: config.ec2.SecurityGroup.sgDefaultVpc.name,
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.useDefaultSecurityGroup({
    name: config.ec2.SecurityGroup.sgDefaultVpcDefault.name,
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpcDefault,
    }),
  });

  provider.ec2.useDefaultSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress
      .eksClusterSgCluster_872092154RuleIngressAllFromEksClusterSgCluster_872092154
      .name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.eksClusterSgCluster_872092154,
      securityGroupFrom:
        resources.ec2.SecurityGroup.eksClusterSgCluster_872092154,
    }),
  });

  provider.ec2.useSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress
      .eksClusterSgCluster_872092154RuleIngressTcp_0_65535FromK8sDefaultIngress_05be0614e6
      .name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.eksClusterSgCluster_872092154,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress
        .eksClusterSgCluster_872092154RuleIngressTcp_0_65535FromK8sDefaultIngress_05be0614e6
        .properties,
  });

  provider.ec2.useSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress
      .k8sDefaultIngress_05be0614e6RuleIngressTcp_443V4.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress
        .k8sDefaultIngress_05be0614e6RuleIngressTcp_443V4.properties,
  });

  provider.ec2.useSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress
      .k8sDefaultIngress_05be0614e6RuleIngressTcp_80V4.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress
        .k8sDefaultIngress_05be0614e6RuleIngressTcp_80V4.properties,
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgClusterRuleIngressHttps.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress.sgClusterRuleIngressHttps.properties,
  });

  provider.ec2.useDefaultSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress
      .sgDefaultVpcRuleIngressAllFromSgDefaultVpc.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.sgDefaultVpc,
      securityGroupFrom: resources.ec2.SecurityGroup.sgDefaultVpc,
    }),
  });

  provider.ec2.useDefaultSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgNodesRuleIngressAll.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupNode,
    }),
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgRuleNodeGroupIngressCluster
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupNode,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress.sgRuleNodeGroupIngressCluster
        .properties,
  });

  provider.ec2.useDefaultSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress
      .eksClusterSgCluster_872092154RuleEgressAllV4.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.eksClusterSgCluster_872092154,
    }),
  });

  provider.ec2.useDefaultSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress
      .k8sDefaultIngress_05be0614e6RuleEgressAllV4.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6,
    }),
  });

  provider.ec2.useDefaultSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress.securityGroupClusterRuleEgressAllV4
      .name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
  });

  provider.ec2.useDefaultSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress.securityGroupNodeRuleEgressAllV4
      .name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupNode,
    }),
  });

  provider.ec2.makeSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress.sgClusterRuleEgress.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleEgress.sgClusterRuleEgress.properties,
  });

  provider.ec2.useDefaultSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress.sgDefaultVpcRuleEgressAllV4.name,
    dependencies: (resources) => ({
      securityGroup: resources.ec2.SecurityGroup.sgDefaultVpc,
    }),
  });

  provider.ec2.useInstance({
    name: config.ec2.Instance.nodeGroupPrivateClusterI_0b83ed3973287c57e.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      subnet: resources.ec2.Subnet.subnetPrivateB,
      iamInstanceProfile:
        resources.iam.InstanceProfile.eks_1abd6da8_68d5_84a6_7af4_30618ba3c23a,
      securityGroups: [
        resources.ec2.SecurityGroup.eksClusterSgCluster_872092154,
      ],
      volumes: [resources.ec2.Volume.kubernetesPvDbPostgres_0],
    }),
    properties: () =>
      config.ec2.Instance.nodeGroupPrivateClusterI_0b83ed3973287c57e.properties,
  });

  provider.acm.useCertificate({
    name: config.acm.Certificate.exampleModuleAwsCertificateGrucloudOrg.name,
    namespace: "Certificate",
    properties: () =>
      config.acm.Certificate.exampleModuleAwsCertificateGrucloudOrg.properties,
  });

  provider.acm.useCertificate({
    name: config.acm.Certificate.modAwsLoadBalancerGrucloudOrg.name,
    namespace: "Certificate",
    properties: () =>
      config.acm.Certificate.modAwsLoadBalancerGrucloudOrg.properties,
  });

  provider.acm.useCertificate({
    name: config.acm.Certificate.starhackitEksLbcGrucloudOrg.name,
    namespace: "Certificate",
    properties: () =>
      config.acm.Certificate.starhackitEksLbcGrucloudOrg.properties,
  });

  provider.acm.useCertificate({
    name: config.acm.Certificate.starhackitEksLeanGrucloudOrg.name,
    namespace: "Certificate",
    properties: () =>
      config.acm.Certificate.starhackitEksLeanGrucloudOrg.properties,
  });

  provider.autoscaling.useAutoScalingGroup({
    name: config.autoscaling.AutoScalingGroup
      .eks_1abd6da8_68d5_84a6_7af4_30618ba3c23a.name,
    namespace: "EKS",
    properties: () =>
      config.autoscaling.AutoScalingGroup
        .eks_1abd6da8_68d5_84a6_7af4_30618ba3c23a.properties,
  });

  provider.elb.useLoadBalancer({
    name: config.elb.LoadBalancer.k8sDefaultIngressE514cce9f1.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      subnets: [
        resources.ec2.Subnet.subnetPublicB,
        resources.ec2.Subnet.subnetPublicA,
      ],
      securityGroups: [
        resources.ec2.SecurityGroup.k8sDefaultIngress_05be0614e6,
      ],
    }),
    properties: () =>
      config.elb.LoadBalancer.k8sDefaultIngressE514cce9f1.properties,
  });

  provider.elb.useTargetGroup({
    name: config.elb.TargetGroup.k8sDefaultRestF2d39b1bea.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () =>
      config.elb.TargetGroup.k8sDefaultRestF2d39b1bea.properties,
  });

  provider.elb.useTargetGroup({
    name: config.elb.TargetGroup.k8sDefaultWebC7d57981c9.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.elb.TargetGroup.k8sDefaultWebC7d57981c9.properties,
  });

  provider.elb.useListener({
    name: config.elb.Listener
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      loadBalancer: resources.elb.LoadBalancer.k8sDefaultIngressE514cce9f1,
      certificate: resources.acm.Certificate.starhackitEksLbcGrucloudOrg,
    }),
    properties: () =>
      config.elb.Listener
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f
        .properties,
  });

  provider.elb.useListener({
    name: config.elb.Listener
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      loadBalancer: resources.elb.LoadBalancer.k8sDefaultIngressE514cce9f1,
    }),
    properties: () =>
      config.elb.Listener
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637
        .properties,
  });

  provider.elb.useRule({
    name: config.elb.Rule
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f_4bea3f1f090d25dc
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f,
      targetGroup: resources.elb.TargetGroup.k8sDefaultWebC7d57981c9,
    }),
    properties: () =>
      config.elb.Rule
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f_4bea3f1f090d25dc
        .properties,
  });

  provider.elb.useRule({
    name: config.elb.Rule
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f_75d1cc3e15ae481b
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f,
      targetGroup: resources.elb.TargetGroup.k8sDefaultRestF2d39b1bea,
    }),
    properties: () =>
      config.elb.Rule
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f_75d1cc3e15ae481b
        .properties,
  });

  provider.elb.useRule({
    name: config.elb.Rule
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637_06881494aa16f0c2
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637,
      targetGroup: resources.elb.TargetGroup.k8sDefaultRestF2d39b1bea,
    }),
    properties: () =>
      config.elb.Rule
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637_06881494aa16f0c2
        .properties,
  });

  provider.elb.useRule({
    name: config.elb.Rule
      .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637_5d97d397c4531bab
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637,
      targetGroup: resources.elb.TargetGroup.k8sDefaultWebC7d57981c9,
    }),
    properties: () =>
      config.elb.Rule
        .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerRuleAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637_5d97d397c4531bab
        .properties,
  });

  provider.elb.useDefaultRule({
    name: config.elb.Rule
      .ruleDefaultArnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f,
    }),
    properties: () =>
      config.elb.Rule
        .ruleDefaultArnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277a_81b987253d9c289f
        .properties,
  });

  provider.elb.useDefaultRule({
    name: config.elb.Rule
      .ruleDefaultArnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637
      .name,
    namespace: "EKS",
    dependencies: (resources) => ({
      listener:
        resources.elb.Listener
          .arnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637,
    }),
    properties: () =>
      config.elb.Rule
        .ruleDefaultArnAwsElasticloadbalancingEuWest_2_840541460064ListenerAppK8sDefaultIngressE514cce9f1Ca2e2a5dc510277aEc89cb412dae7637
        .properties,
  });

  provider.eks.makeCluster({
    name: config.eks.Cluster.cluster.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      subnets: [
        resources.ec2.Subnet.subnetPublicA,
        resources.ec2.Subnet.subnetPublicB,
        resources.ec2.Subnet.subnetPrivateA,
        resources.ec2.Subnet.subnetPrivateB,
      ],
      securityGroups: [
        resources.ec2.SecurityGroup.securityGroupCluster,
        resources.ec2.SecurityGroup.securityGroupNode,
      ],
      role: resources.iam.Role.roleCluster,
    }),
    properties: () => config.eks.Cluster.cluster.properties,
  });

  provider.eks.makeNodeGroup({
    name: config.eks.NodeGroup.nodeGroupPrivateCluster.name,
    namespace: "EKS",
    dependencies: (resources) => ({
      cluster: resources.eks.Cluster.cluster,
      subnets: [
        resources.ec2.Subnet.subnetPrivateA,
        resources.ec2.Subnet.subnetPrivateB,
      ],
      role: resources.iam.Role.roleNodeGroup,
    }),
    properties: () => config.eks.NodeGroup.nodeGroupPrivateCluster.properties,
  });

  provider.route53Domain.useDomain({
    name: config.route53Domain.Domain.grucloudOrg.name,
  });

  provider.route53.makeHostedZone({
    name: config.route53.HostedZone.starhackitEksLbcGrucloudOrg.name,
    properties: () =>
      config.route53.HostedZone.starhackitEksLbcGrucloudOrg.properties,
  });

  provider.route53.makeRecord({
    name: config.route53.Record.certificateValidationStarhackitEksLbcGrucloudOrg
      .name,
    namespace: "Certificate",
    dependencies: (resources) => ({
      hostedZone: resources.route53.HostedZone.starhackitEksLbcGrucloudOrg,
      certificate: resources.acm.Certificate.starhackitEksLbcGrucloudOrg,
    }),
  });

  provider.route53.makeRecord({
    name: config.route53.Record
      .dnsRecordAliasLoadBalancerStarhackitEksLbcGrucloudOrg.name,
    dependencies: (resources) => ({
      hostedZone: resources.route53.HostedZone.starhackitEksLbcGrucloudOrg,
      loadBalancer: resources.elb.LoadBalancer.k8sDefaultIngressE514cce9f1,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async () => {
  const provider = AwsProvider({ config: require("./config") });
  const resources = await createResources({
    provider,
  });

  return {
    provider,
    resources,
  };
};
