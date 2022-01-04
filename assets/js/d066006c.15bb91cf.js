"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4792],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?t.createElement(y,s(s({ref:n},p),{},{components:r})):t.createElement(y,s({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29111:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={id:"VirtualNetwork",title:"VirtualNetwork"},c=void 0,u={unversionedId:"azure/resources/Network/VirtualNetwork",id:"azure/resources/Network/VirtualNetwork",isDocsHomePage:!1,title:"VirtualNetwork",description:"Provides a VirtualNetwork from the Network group",source:"@site/docs/azure/resources/Network/VirtualNetwork.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/VirtualNetwork",permalink:"/docs/azure/resources/Network/VirtualNetwork",tags:[],version:"current",frontMatter:{id:"VirtualNetwork",title:"VirtualNetwork"},sidebar:"docs",previous:{title:"VirtualHubRouteTableV2",permalink:"/docs/azure/resources/Network/VirtualHubRouteTableV2"},next:{title:"VirtualNetworkGateway",permalink:"/docs/azure/resources/Network/VirtualNetworkGateway"}},p=[{value:"Examples",id:"examples",children:[{value:"Create virtual network",id:"create-virtual-network",children:[],level:3},{value:"Create virtual network with subnet",id:"create-virtual-network-with-subnet",children:[],level:3},{value:"Create virtual network with subnet containing address prefixes",id:"create-virtual-network-with-subnet-containing-address-prefixes",children:[],level:3},{value:"Create virtual network with Bgp Communities",id:"create-virtual-network-with-bgp-communities",children:[],level:3},{value:"Create virtual network with service endpoints",id:"create-virtual-network-with-service-endpoints",children:[],level:3},{value:"Create virtual network with service endpoints and service endpoint policy",id:"create-virtual-network-with-service-endpoints-and-service-endpoint-policy",children:[],level:3},{value:"Create virtual network with delegated subnets",id:"create-virtual-network-with-delegated-subnets",children:[],level:3},{value:"Create virtual network with encryption",id:"create-virtual-network-with-encryption",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"VirtualNetwork")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-virtual-network"},"Create virtual network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      flowTimeoutInMinutes: 10,\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-subnet"},"Create virtual network with subnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        { name: "test-1", properties: { addressPrefix: "10.0.0.0/24" } },\n      ],\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-subnet-containing-address-prefixes"},"Create virtual network with subnet containing address prefixes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        {\n          name: "test-2",\n          properties: { addressPrefixes: ["10.0.0.0/28", "10.0.1.0/28"] },\n        },\n      ],\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-bgp-communities"},"Create virtual network with Bgp Communities"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        { name: "test-1", properties: { addressPrefix: "10.0.0.0/24" } },\n      ],\n      bgpCommunities: { virtualNetworkCommunity: "12076:20000" },\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-service-endpoints"},"Create virtual network with service endpoints"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        {\n          name: "test-1",\n          properties: {\n            addressPrefix: "10.0.0.0/16",\n            serviceEndpoints: [{ service: "Microsoft.Storage" }],\n          },\n        },\n      ],\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-service-endpoints-and-service-endpoint-policy"},"Create virtual network with service endpoints and service endpoint policy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        {\n          name: "test-1",\n          properties: {\n            addressPrefix: "10.0.0.0/16",\n            serviceEndpoints: [{ service: "Microsoft.Storage" }],\n            serviceEndpointPolicies: [\n              {\n                id: "/subscriptions/subid/resourceGroups/vnetTest/providers/Microsoft.Network/serviceEndpointPolicies/ServiceEndpointPolicy1",\n              },\n            ],\n          },\n        },\n      ],\n    },\n    location: "eastus2euap",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-delegated-subnets"},"Create virtual network with delegated subnets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        {\n          name: "test-1",\n          properties: {\n            addressPrefix: "10.0.0.0/24",\n            delegations: [\n              {\n                name: "myDelegation",\n                properties: { serviceName: "Microsoft.Sql/managedInstances" },\n              },\n            ],\n          },\n        },\n      ],\n    },\n    location: "westcentralus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-virtual-network-with-encryption"},"Create virtual network with encryption"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetwork({\n  name: "myVirtualNetwork",\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        { name: "test-1", properties: { addressPrefix: "10.0.0.0/24" } },\n      ],\n      encryption: { enabled: true, enforcement: "AllowUnencrypted" },\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    extendedLocation: {\n      description: 'The extended location of the virtual network.',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'The name of the extended location.'\n        },\n        type: {\n          description: 'The type of the extended location.',\n          type: 'string',\n          enum: [ 'EdgeZone' ],\n          'x-ms-enum': { name: 'ExtendedLocationTypes', modelAsString: true }\n        }\n      }\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the virtual network.',\n      properties: {\n        addressSpace: {\n          description: 'The AddressSpace that contains an array of IP address ranges that can be used by subnets.',\n          properties: {\n            addressPrefixes: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'A list of address blocks reserved for this virtual network in CIDR notation.'\n            }\n          }\n        },\n        dhcpOptions: {\n          description: 'The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.',\n          properties: {\n            dnsServers: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'The list of DNS servers IP addresses.'\n            }\n          }\n        },\n        flowTimeoutInMinutes: {\n          type: 'integer',\n          format: 'int32',\n          description: 'The FlowTimeout value (in minutes) for the Virtual Network'\n        },\n        subnets: {\n          type: 'array',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the subnet.',\n                properties: {\n                  addressPrefix: {\n                    type: 'string',\n                    description: 'The address prefix for the subnet.'\n                  },\n                  addressPrefixes: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'List of address prefixes for the subnet.'\n                  },\n                  networkSecurityGroup: {\n                    description: 'The reference to the NetworkSecurityGroup resource.',\n                    properties: { properties: [Object], etag: [Object] },\n                    allOf: [ [Object] ]\n                  },\n                  routeTable: {\n                    description: 'The reference to the RouteTable resource.',\n                    properties: { properties: [Object], etag: [Object] },\n                    allOf: [ [Object] ]\n                  },\n                  natGateway: {\n                    properties: { id: [Object] },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true\n                  },\n                  serviceEndpoints: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      description: 'The service endpoint properties.'\n                    },\n                    description: 'An array of service endpoints.'\n                  },\n                  serviceEndpointPolicies: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Service End point policy resource.'\n                    },\n                    description: 'An array of service endpoint policies.'\n                  },\n                  privateEndpoints: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Private endpoint resource.'\n                    },\n                    description: 'An array of references to private endpoints.'\n                  },\n                  ipConfigurations: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration.'\n                    },\n                    description: 'An array of references to the network interface IP configurations using subnet.'\n                  },\n                  ipConfigurationProfiles: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration profile child resource.'\n                    },\n                    description: 'Array of IP configuration profiles which reference this subnet.'\n                  },\n                  ipAllocations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      description: 'Reference to another subresource.',\n                      'x-ms-azure-resource': true\n                    },\n                    description: 'Array of IpAllocation which reference this subnet.'\n                  },\n                  resourceNavigationLinks: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'ResourceNavigationLink resource.'\n                    },\n                    description: 'An array of references to the external resources using subnet.'\n                  },\n                  serviceAssociationLinks: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'ServiceAssociationLink resource.'\n                    },\n                    description: 'An array of references to services injecting into this subnet.'\n                  },\n                  delegations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Details the service to which the subnet is delegated.'\n                    },\n                    description: 'An array of references to the delegations on the subnet.'\n                  },\n                  purpose: {\n                    type: 'string',\n                    readOnly: true,\n                    description: 'A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.'\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the subnet resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  },\n                  privateEndpointNetworkPolicies: {\n                    type: 'string',\n                    default: 'Enabled',\n                    description: 'Enable or Disable apply network policies on private end point in the subnet.',\n                    enum: [ 'Enabled', 'Disabled' ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPrivateEndpointNetworkPolicies',\n                      modelAsString: true\n                    }\n                  },\n                  privateLinkServiceNetworkPolicies: {\n                    type: 'string',\n                    default: 'Enabled',\n                    description: 'Enable or Disable apply network policies on private link service in the subnet.',\n                    enum: [ 'Enabled', 'Disabled' ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPrivateLinkServiceNetworkPolicies',\n                      modelAsString: true\n                    }\n                  },\n                  applicationGatewayIpConfigurations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.'\n                    },\n                    description: 'Application gateway IP configurations of virtual network resource.'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              etag: {\n                readOnly: true,\n                type: 'string',\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              },\n              type: { type: 'string', description: 'Resource type.' }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'Subnet in a virtual network resource.'\n          },\n          description: 'A list of subnets in a Virtual Network.'\n        },\n        virtualNetworkPeerings: {\n          type: 'array',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the virtual network peering.',\n                properties: {\n                  allowVirtualNetworkAccess: {\n                    type: 'boolean',\n                    description: 'Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.'\n                  },\n                  allowForwardedTraffic: {\n                    type: 'boolean',\n                    description: 'Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.'\n                  },\n                  allowGatewayTransit: {\n                    type: 'boolean',\n                    description: 'If gateway links can be used in remote virtual networking to link to this virtual network.'\n                  },\n                  useRemoteGateways: {\n                    type: 'boolean',\n                    description: 'If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.'\n                  },\n                  remoteVirtualNetwork: {\n                    properties: { id: [Object] },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true\n                  },\n                  remoteAddressSpace: {\n                    description: 'The reference to the address space peered with the remote virtual network.',\n                    properties: { addressPrefixes: [Object] }\n                  },\n                  remoteVirtualNetworkAddressSpace: {\n                    description: 'The reference to the current address space of the remote virtual network.',\n                    properties: { addressPrefixes: [Object] }\n                  },\n                  remoteBgpCommunities: {\n                    default: null,\n                    description: \"The reference to the remote virtual network's Bgp Communities.\",\n                    properties: {\n                      virtualNetworkCommunity: [Object],\n                      regionalCommunity: [Object]\n                    },\n                    required: [ 'virtualNetworkCommunity' ]\n                  },\n                  remoteVirtualNetworkEncryption: {\n                    readOnly: true,\n                    default: null,\n                    description: \"The reference to the remote virtual network's encryption\",\n                    type: 'object',\n                    properties: { enabled: [Object], enforcement: [Object] },\n                    required: [ 'enabled' ]\n                  },\n                  peeringState: {\n                    type: 'string',\n                    description: 'The status of the virtual network peering.',\n                    enum: [ 'Initiated', 'Connected', 'Disconnected' ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPeeringState',\n                      modelAsString: true\n                    }\n                  },\n                  peeringSyncLevel: {\n                    type: 'string',\n                    description: 'The peering sync status of the virtual network peering.',\n                    enum: [\n                      'FullyInSync',\n                      'RemoteNotInSync',\n                      'LocalNotInSync',\n                      'LocalAndRemoteNotInSync'\n                    ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPeeringLevel',\n                      modelAsString: true\n                    }\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the virtual network peering resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  },\n                  doNotVerifyRemoteGateways: {\n                    type: 'boolean',\n                    description: 'If we need to verify the provisioning state of the remote gateway.'\n                  },\n                  resourceGuid: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The resourceGuid property of the Virtual Network peering resource.'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              etag: {\n                readOnly: true,\n                type: 'string',\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              },\n              type: { type: 'string', description: 'Resource type.' }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'Peerings in a virtual network resource.'\n          },\n          description: 'A list of peerings in a Virtual Network.'\n        },\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resourceGuid property of the Virtual Network resource.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the virtual network resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        enableDdosProtection: {\n          type: 'boolean',\n          default: false,\n          description: 'Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.'\n        },\n        enableVmProtection: {\n          type: 'boolean',\n          default: false,\n          description: 'Indicates if VM protection is enabled for all the subnets in the virtual network.'\n        },\n        ddosProtectionPlan: {\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          description: 'Reference to another subresource.',\n          'x-ms-azure-resource': true,\n          default: null\n        },\n        bgpCommunities: {\n          default: null,\n          description: 'Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.',\n          properties: {\n            virtualNetworkCommunity: {\n              type: 'string',\n              description: 'The BGP community associated with the virtual network.'\n            },\n            regionalCommunity: {\n              type: 'string',\n              readOnly: true,\n              description: 'The BGP community associated with the region of the virtual network.'\n            }\n          },\n          required: [ 'virtualNetworkCommunity' ]\n        },\n        encryption: {\n          default: null,\n          description: 'Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.',\n          type: 'object',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Indicates if encryption is enabled on the virtual network.'\n            },\n            enforcement: {\n              type: 'string',\n              description: 'If the encrypted VNet allows VM that does not support encryption',\n              enum: [ 'DropUnencrypted', 'AllowUnencrypted' ],\n              'x-ms-enum': {\n                name: 'VirtualNetworkEncryptionEnforcement',\n                modelAsString: true\n              }\n            }\n          },\n          required: [ 'enabled' ]\n        },\n        ipAllocations: {\n          type: 'array',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          },\n          description: 'Array of IpAllocation which reference this VNET.'\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Virtual Network resource.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualNetwork.json"},"here"),"."))}d.isMDXComponent=!0}}]);