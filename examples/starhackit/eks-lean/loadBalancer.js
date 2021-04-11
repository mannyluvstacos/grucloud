const assert = require("assert");
const { map, assign, pipe } = require("rubico");

// Create Load Balancer, Target Group, Listeners and Rule

exports.createResources = async ({
  provider,
  resources: { vpc, subnets, hostedZone, k8s, eks, certificate },
}) => {
  assert(Array.isArray(subnets));
  assert(vpc);
  assert(certificate);
  assert(hostedZone);
  assert(k8s);
  assert(eks);
  const { config } = provider;
  assert(config.eks);
  assert(config.eks.cluster);
  assert(config.eks.cluster.name);
  assert(config.elb);
  assert(config.elb.loadBalancer);
  assert(config.elb.targetGroups);
  assert(config.elb.listeners);
  assert(config.elb.rules);
  assert(config.elb.listeners.https.name);

  const securityGroupLoadBalancer = await provider.makeSecurityGroup({
    name: "load-balancer-security-group",
    dependencies: { vpc },
    properties: () => ({
      create: {
        Description: "Load Balancer HTTP HTTPS Security Group",
      },
      Tags: [
        {
          Key: "ingress.k8s.aws/stack",
          Value: "default/ingress",
        },
        {
          Key: "elbv2.k8s.aws/cluster",
          Value: config.eks.cluster.name,
        },
        {
          Key: "ingress.k8s.aws/resource",
          Value: "ManagedLBSecurityGroup",
        },
      ],
      ingress: {
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
      },
    }),
  });

  const loadBalancer = await provider.makeLoadBalancer({
    name: config.elb.loadBalancer.name,
    dependencies: {
      subnets,
      securityGroups: [securityGroupLoadBalancer],
    },
    properties: () => ({}),
  });

  const targetGroups = {
    web: await provider.makeTargetGroup({
      name: config.elb.targetGroups.web.name,
      dependencies: {
        vpc,
        nodeGroup: eks.nodeGroupsPrivate[0],
      },
      properties: () => ({
        Port: config.elb.targetGroups.web.nodePort,
      }),
    }),
    rest: await provider.makeTargetGroup({
      name: config.elb.targetGroups.rest.name,
      dependencies: {
        nodeGroup: eks.nodeGroupsPrivate[0],
        vpc,
      },
      properties: () => ({
        Port: config.elb.targetGroups.rest.nodePort,
      }),
    }),
  };

  const listeners = {
    http: await provider.makeListener({
      name: config.elb.listeners.http.name,
      dependencies: {
        loadBalancer,
        targetGroups: [targetGroups.web],
      },
      properties: ({
        dependencies: {
          targetGroups: [targetGroup],
        },
      }) => ({
        Port: 80,
        Protocol: "HTTP",
        DefaultActions: [
          {
            TargetGroupArn: targetGroup?.live?.TargetGroupArn,
            Type: "forward",
          },
        ],
      }),
    }),
    https: await provider.makeListener({
      name: config.elb.listeners.https.name,
      dependencies: {
        loadBalancer,
        targetGroups: [targetGroups.web],
        certificate,
      },
      properties: ({
        dependencies: {
          targetGroups: [targetGroup],
          certificate,
        },
      }) => ({
        Port: 443,
        Protocol: "HTTPS",
        Certificates: [
          {
            CertificateArn: certificate?.live.CertificateArn,
          },
        ],
        DefaultActions: [
          {
            TargetGroupArn: targetGroup?.live?.TargetGroupArn,
            Type: "forward",
          },
        ],
      }),
    }),
  };

  const rules = {
    http: {
      web: await provider.makeRule({
        name: config.elb.rules.http.web.name,
        dependencies: {
          listener: listeners.http,
          targetGroup: targetGroups.web,
        },
        properties: config.elb.rules.http.web.properties,
      }),
      rest: await provider.makeRule({
        name: config.elb.rules.http.rest.name,
        dependencies: {
          listener: listeners.http,
          targetGroup: targetGroups.rest,
        },
        properties: config.elb.rules.http.rest.properties,
      }),
    },
  };

  const loadBalancerDnsRecord = await provider.makeRoute53Record({
    name: `load-balancer-dns-record-alias-${hostedZone.name}`,
    dependencies: { hostedZone, loadBalancer },
    properties: ({ dependencies: { loadBalancer } }) => {
      const hostname = loadBalancer.live?.DNSName;
      if (!hostname) {
        return {
          message: "loadBalancer not up yet",
          Type: "A",
          Name: hostedZone.name,
        };
      }
      return {
        Name: hostedZone.name,
        Type: "A",
        AliasTarget: {
          HostedZoneId: "ZHURV8PSTC4K8",
          DNSName: `${hostname}.`,
          EvaluateTargetHealth: false,
        },
      };
    },
  });

  return {
    loadBalancer,
    targetGroups,
    listeners,
    rules,
    loadBalancerDnsRecord,
  };
};
