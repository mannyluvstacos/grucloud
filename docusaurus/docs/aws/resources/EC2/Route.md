---
id: Route
title: Route
---

Create a route and associate it to an internet gateway or NAT gateway.

## Example code

### Attach a route to an internet gateway

```js
const vpc = provider.EC2.makeVpc({
  name: "vpc",
  properties: () => ({
    CidrBlock: "10.1.0.0/16",
  }),
});

const ig = provider.EC2.makeInternetGateway({
  name: "ig",
  dependencies: () => ({ vpc }),
});

const subnet = provider.EC2.makeSubnet({
  name: "subnet",
  dependencies: () => ({ vpc }),
  properties: () => ({
    CidrBlock: "10.1.0.1/24",
  }),
});

const routeTable = provider.EC2.makeRouteTable({
  name: "route-table",
  dependencies: () => ({ vpc, subnets: [subnet] }),
});

const route = provider.EC2.makeRoute({
  dependencies: () => ({ routeTable, ig }),
});
```

### Attach a route to a NAT gateway

```js
const vpc = provider.EC2.makeVpc({
  name: "vpc",
  properties: () => ({
    CidrBlock: "10.1.0.0/16",
  }),
});

const subnetPublic = provider.EC2.makeSubnet({
  name: "subnet-public",
  dependencies: () => ({ vpc }),
  properties: () => ({
    CidrBlock: "10.1.0.1/24",
  }),
});

const eip = provider.EC2.makeElasticIpAddress({
  name: "myip",
});

const natGateway = provider.EC2.makeNatGateway({
  name: "nat-gateway",
  dependencies: () => ({ subnet: subnetPublic, eip }),
});

const subnetPrivate = provider.EC2.makeSubnet({
  name: "subnet-private",
  dependencies: () => ({ vpc }),
  properties: () => ({
    CidrBlock: "10.1.1.1/24",
  }),
});

const routeTablePrivate = provider.EC2.makeRouteTable({
  name: "route-table-private",
  dependencies: () => ({ vpc, subnets: [subnetPrivate] }),
});

const routeNat = provider.EC2.makeRoute({
  dependencies: () => ({ routeTable: routeTablePrivate, natGateway }),
});
```

## Examples

- [simple example](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js)
- [EKS](https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/eks/iac.js)

## Dependencies

- [RouteTable](./RouteTable.md)
- [InternetGateway](./InternetGateway.md)
- [NatGateway](./NatGateway.md)
