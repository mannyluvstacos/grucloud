const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const {
  testPlanDeploy,
  testPlanDestroy,
} = require("@grucloud/core/E2ETestUtils");

describe.skip("AwsLoadBalancerV1", async function () {
  let config;
  let provider;
  let loadBalancer;
  let loadBalancerName = "lbv1";
  const types = ["LoadBalancerV1"];

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({
      config: () => ({ projectName: "gru-test" }),
    });

    const vpc = await provider.makeVpc({
      name: "vpc",
      properties: () => ({
        CidrBlock: "10.1.0.0/16",
      }),
    });

    const internetGateway = await provider.makeInternetGateway({
      name: "ig",
      dependencies: { vpc },
    });

    const subnet = await provider.makeSubnet({
      name: "subnet",
      dependencies: { vpc },
      properties: () => ({
        CidrBlock: "10.1.0.1/24",
      }),
    });

    const securityGroupLoadBalancer = await provider.makeSecurityGroup({
      name: "securityGroup",
      dependencies: { vpc },
      properties: () => ({
        create: {
          Description: "Security Group",
        },
      }),
    });
    const sgRuleIngressHttp = await provider.makeSecurityGroupRuleIngress({
      name: "sg-rule-ingress-http",
      dependencies: {
        securityGroup: securityGroupLoadBalancer,
      },
      properties: () => ({
        IpPermissions: [
          {
            FromPort: 80,
            IpProtocol: "tcp",
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
            ToPort: 80,
          },
        ],
      }),
    });
    const sgRuleIngressHttps = await provider.makeSecurityGroupRuleIngress({
      name: "sg-rule-ingress-https",
      dependencies: {
        securityGroup: securityGroupLoadBalancer,
      },
      properties: () => ({
        IpPermissions: [
          {
            FromPort: 443,
            IpProtocol: "tcp",
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
            ToPort: 443,
          },
        ],
      }),
    });
    loadBalancer = await provider.makeLoadBalancer({
      name: loadBalancerName,
      dependencies: {
        internetGateway,
        subnets: [subnet],
        securityGroups: [securityGroup],
      },
      properties: () => ({
        Listeners: [
          {
            InstancePort: 80,
            InstanceProtocol: "HTTP",
            LoadBalancerPort: 80,
            Protocol: "HTTP",
          },
        ],
      }),
    });
  });
  after(async () => {});
  it("load balancer v1 apply plan", async function () {
    await testPlanDeploy({ provider, types });
    await testPlanDestroy({ provider, types });
  });
});
