"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9389],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return y}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,f=d["".concat(p,".").concat(y)]||d[y]||l[y]||i;return r?t.createElement(f,s(s({ref:n},c),{},{components:r})):t.createElement(f,s({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23401:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"RouteTable",title:"RouteTable"},p=void 0,u={unversionedId:"azure/resources/Network/RouteTable",id:"azure/resources/Network/RouteTable",isDocsHomePage:!1,title:"RouteTable",description:"Provides a RouteTable from the Network group",source:"@site/docs/azure/resources/Network/RouteTable.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/RouteTable",permalink:"/docs/azure/resources/Network/RouteTable",tags:[],version:"current",frontMatter:{id:"RouteTable",title:"RouteTable"},sidebar:"docs",previous:{title:"RouteFilterRule",permalink:"/docs/azure/resources/Network/RouteFilterRule"},next:{title:"RoutingIntent",permalink:"/docs/azure/resources/Network/RoutingIntent"}},c=[{value:"Examples",id:"examples",children:[{value:"Create route table",id:"create-route-table",children:[],level:3},{value:"Create route table with route",id:"create-route-table-with-route",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:c};function d(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"RouteTable")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"create-route-table"},"Create route table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeRouteTable({\n  name: "myRouteTable",\n  properties: () => ({ location: "westus" }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    natGateway: resources.Network.NatGateway["myNatGateway"],\n  }),\n});\n\n')),(0,i.kt)("h3",{id:"create-route-table-with-route"},"Create route table with route"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeRouteTable({\n  name: "myRouteTable",\n  properties: () => ({\n    properties: {\n      disableBgpRoutePropagation: true,\n      routes: [\n        {\n          name: "route1",\n          properties: {\n            addressPrefix: "10.0.3.0/24",\n            nextHopType: "VirtualNetworkGateway",\n          },\n        },\n      ],\n    },\n    location: "westus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    natGateway: resources.Network.NatGateway["myNatGateway"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/NatGateway"},"NatGateway"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: <ref *1> {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the route table.',\n      properties: {\n        routes: {\n          type: 'array',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the route.',\n                properties: {\n                  addressPrefix: {\n                    type: 'string',\n                    description: 'The destination CIDR to which the route applies.'\n                  },\n                  nextHopType: {\n                    description: 'The type of Azure hop the packet should be sent to.',\n                    type: 'string',\n                    enum: [\n                      'VirtualNetworkGateway',\n                      'VnetLocal',\n                      'Internet',\n                      'VirtualAppliance',\n                      'None'\n                    ],\n                    'x-ms-enum': { name: 'RouteNextHopType', modelAsString: true }\n                  },\n                  nextHopIpAddress: {\n                    type: 'string',\n                    description: 'The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.'\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the route resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  },\n                  hasBgpOverride: {\n                    type: 'boolean',\n                    description: 'A value indicating whether this route overrides overlapping BGP routes regardless of LPM.'\n                  }\n                },\n                required: [ 'nextHopType' ]\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              etag: {\n                readOnly: true,\n                type: 'string',\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              },\n              type: {\n                type: 'string',\n                description: 'The type of the resource.'\n              }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'Route resource.'\n          },\n          description: 'Collection of routes contained within a route table.'\n        },\n        subnets: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the subnet.',\n                properties: {\n                  addressPrefix: {\n                    type: 'string',\n                    description: 'The address prefix for the subnet.'\n                  },\n                  addressPrefixes: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'List of address prefixes for the subnet.'\n                  },\n                  networkSecurityGroup: {\n                    description: 'The reference to the NetworkSecurityGroup resource.',\n                    properties: { properties: [Object], etag: [Object] },\n                    allOf: [ [Object] ]\n                  },\n                  routeTable: {\n                    description: 'The reference to the RouteTable resource.',\n                    properties: [Circular *1],\n                    allOf: [ [Object] ]\n                  },\n                  natGateway: {\n                    properties: { id: [Object] },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true\n                  },\n                  serviceEndpoints: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      description: 'The service endpoint properties.'\n                    },\n                    description: 'An array of service endpoints.'\n                  },\n                  serviceEndpointPolicies: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Service End point policy resource.'\n                    },\n                    description: 'An array of service endpoint policies.'\n                  },\n                  privateEndpoints: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Private endpoint resource.'\n                    },\n                    description: 'An array of references to private endpoints.'\n                  },\n                  ipConfigurations: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration.'\n                    },\n                    description: 'An array of references to the network interface IP configurations using subnet.'\n                  },\n                  ipConfigurationProfiles: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration profile child resource.'\n                    },\n                    description: 'Array of IP configuration profiles which reference this subnet.'\n                  },\n                  ipAllocations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      description: 'Reference to another subresource.',\n                      'x-ms-azure-resource': true\n                    },\n                    description: 'Array of IpAllocation which reference this subnet.'\n                  },\n                  resourceNavigationLinks: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'ResourceNavigationLink resource.'\n                    },\n                    description: 'An array of references to the external resources using subnet.'\n                  },\n                  serviceAssociationLinks: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'ServiceAssociationLink resource.'\n                    },\n                    description: 'An array of references to services injecting into this subnet.'\n                  },\n                  delegations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Details the service to which the subnet is delegated.'\n                    },\n                    description: 'An array of references to the delegations on the subnet.'\n                  },\n                  purpose: {\n                    type: 'string',\n                    readOnly: true,\n                    description: 'A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.'\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the subnet resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  },\n                  privateEndpointNetworkPolicies: {\n                    type: 'string',\n                    default: 'Enabled',\n                    description: 'Enable or Disable apply network policies on private end point in the subnet.',\n                    enum: [ 'Enabled', 'Disabled' ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPrivateEndpointNetworkPolicies',\n                      modelAsString: true\n                    }\n                  },\n                  privateLinkServiceNetworkPolicies: {\n                    type: 'string',\n                    default: 'Enabled',\n                    description: 'Enable or Disable apply network policies on private link service in the subnet.',\n                    enum: [ 'Enabled', 'Disabled' ],\n                    'x-ms-enum': {\n                      name: 'VirtualNetworkPrivateLinkServiceNetworkPolicies',\n                      modelAsString: true\n                    }\n                  },\n                  applicationGatewayIpConfigurations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.'\n                    },\n                    description: 'Application gateway IP configurations of virtual network resource.'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              etag: {\n                readOnly: true,\n                type: 'string',\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              },\n              type: { type: 'string', description: 'Resource type.' }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'Subnet in a virtual network resource.'\n          },\n          description: 'A collection of references to subnets.'\n        },\n        disableBgpRoutePropagation: {\n          type: 'boolean',\n          description: 'Whether to disable the routes learned by BGP on that route table. True means disable.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the route table resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        resourceGuid: {\n          type: 'string',\n          readOnly: true,\n          description: 'The resource GUID property of the route table.'\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Route table resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/routeTable.json"},"here"),"."))}d.isMDXComponent=!0}}]);