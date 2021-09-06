// Generated by azure2gc
const { get } = require("rubico");
const { AzureProvider } = require("@grucloud/provider-azure");

const createResources = ({ provider }) => {
  provider.resourceManagement.makeResourceGroup({
    name: get("config.resourceManagement.ResourceGroup.resourceGroup.name"),
  });

  provider.virtualNetworks.makeVirtualNetwork({
    name: get("config.virtualNetworks.VirtualNetwork.virtualNetwork.name"),
    properties: get(
      "config.virtualNetworks.VirtualNetwork.virtualNetwork.properties"
    ),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.resourceManagement.ResourceGroup.resourceGroup,
      subnets: [resources.virtualNetworks.Subnet.subnet],
    }),
  });

  provider.virtualNetworks.makeSecurityGroup({
    name: get("config.virtualNetworks.SecurityGroup.securityGroup.name"),
    properties: get(
      "config.virtualNetworks.SecurityGroup.securityGroup.properties"
    ),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.resourceManagement.ResourceGroup.resourceGroup,
    }),
  });

  provider.virtualNetworks.makePublicIpAddress({
    name: get("config.virtualNetworks.PublicIpAddress.ip.name"),
    properties: get("config.virtualNetworks.PublicIpAddress.ip.properties"),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.resourceManagement.ResourceGroup.resourceGroup,
    }),
  });

  provider.virtualNetworks.makeNetworkInterface({
    name: get("config.virtualNetworks.NetworkInterface.networkInterface.name"),
    properties: get(
      "config.virtualNetworks.NetworkInterface.networkInterface.properties"
    ),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.resourceManagement.ResourceGroup.resourceGroup,
      virtualNetwork: resources.virtualNetworks.VirtualNetwork.virtualNetwork,
      publicIpAddress: resources.virtualNetworks.PublicIpAddress.ip,
      securityGroup: resources.virtualNetworks.SecurityGroup.securityGroup,
    }),
  });

  provider.virtualNetworks.makeSubnet({
    name: get("config.virtualNetworks.Subnet.subnet.name"),
    properties: get("config.virtualNetworks.Subnet.subnet.properties"),
  });

  provider.compute.makeVirtualMachine({
    name: get("config.compute.VirtualMachine.vm.name"),
    properties: get("config.compute.VirtualMachine.vm.properties"),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.resourceManagement.ResourceGroup.resourceGroup,
      networkInterface:
        resources.virtualNetworks.NetworkInterface.networkInterface,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AzureProvider, {
    config: require("./config"),
  });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
