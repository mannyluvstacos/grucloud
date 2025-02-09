// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeVpc({
    name: "vpc",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/16",
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "internet-gateway",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeNatGateway({
    name: "nat-gateway",
    dependencies: ({ resources }) => ({
      subnet: resources.EC2.Subnet["subnet-public-a"],
      eip: resources.EC2.ElasticIpAddress["eip"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-private-a",
    properties: ({ config }) => ({
      CidrBlock: "192.168.96.0/19",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-private-b",
    properties: ({ config }) => ({
      CidrBlock: "192.168.128.0/19",
      AvailabilityZone: `${config.region}b`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-public-a",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}a`,
      MapPublicIpOnLaunch: true,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-public-b",
    properties: ({ config }) => ({
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}b`,
      MapPublicIpOnLaunch: true,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "route-table-private-a",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "route-table-private-b",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.useDefaultRouteTable({
    name: "rt-default-vpc",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-private-a"],
      subnet: resources.EC2.Subnet["subnet-private-a"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-private-b"],
      subnet: resources.EC2.Subnet["subnet-private-b"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["rt-default-vpc"],
      subnet: resources.EC2.Subnet["subnet-public-a"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["rt-default-vpc"],
      subnet: resources.EC2.Subnet["subnet-public-b"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-private-a"],
      natGateway: resources.EC2.NatGateway["nat-gateway"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-private-b"],
      natGateway: resources.EC2.NatGateway["nat-gateway"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["rt-default-vpc"],
      ig: resources.EC2.InternetGateway["internet-gateway"],
    }),
  });

  provider.EC2.makeElasticIpAddress({
    name: "eip",
  });
};

exports.createResources = createResources;
