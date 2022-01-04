"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[121],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=i,y=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},53699:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={id:"ApplicationGatewayPrivateEndpointConnection",title:"ApplicationGatewayPrivateEndpointConnection"},p=void 0,s={unversionedId:"azure/resources/Network/ApplicationGatewayPrivateEndpointConnection",id:"azure/resources/Network/ApplicationGatewayPrivateEndpointConnection",isDocsHomePage:!1,title:"ApplicationGatewayPrivateEndpointConnection",description:"Provides a ApplicationGatewayPrivateEndpointConnection from the Network group",source:"@site/docs/azure/resources/Network/ApplicationGatewayPrivateEndpointConnection.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/ApplicationGatewayPrivateEndpointConnection",permalink:"/docs/azure/resources/Network/ApplicationGatewayPrivateEndpointConnection",tags:[],version:"current",frontMatter:{id:"ApplicationGatewayPrivateEndpointConnection",title:"ApplicationGatewayPrivateEndpointConnection"},sidebar:"docs",previous:{title:"ApplicationGateway",permalink:"/docs/azure/resources/Network/ApplicationGateway"},next:{title:"ApplicationSecurityGroup",permalink:"/docs/azure/resources/Network/ApplicationSecurityGroup"}},u=[{value:"Examples",id:"examples",children:[{value:"Update Application Gateway Private Endpoint Connection",id:"update-application-gateway-private-endpoint-connection",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:u};function l(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"ApplicationGatewayPrivateEndpointConnection")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"update-application-gateway-private-endpoint-connection"},"Update Application Gateway Private Endpoint Connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeApplicationGatewayPrivateEndpointConnection({\n  name: "myApplicationGatewayPrivateEndpointConnection",\n  properties: () => ({\n    name: "connection1",\n    properties: {\n      privateEndpoint: {\n        id: "/subscriptions/subId2/resourceGroups/rg1/providers/Microsoft.Network/privateEndpoints/testPe",\n      },\n      privateLinkServiceConnectionState: {\n        status: "Approved",\n        description: "approved it for some reason.",\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    virtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],\n    dscpConfiguration:\n      resources.Network.DscpConfiguration["myDscpConfiguration"],\n    natGateway: resources.Network.NatGateway["myNatGateway"],\n    workspace: resources.OperationalInsights.Workspace["myWorkspace"],\n    ddosCustomPolicy: resources.Network.DdosCustomPolicy["myDdosCustomPolicy"],\n    publicIpPrefix: resources.Network.PublicIPPrefix["myPublicIPPrefix"],\n    privateLinkService:\n      resources.Network.PrivateLinkService["myPrivateLinkService"],\n    applicationGateway:\n      resources.Network.ApplicationGateway["myApplicationGateway"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/VirtualMachine"},"VirtualMachine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/DscpConfiguration"},"DscpConfiguration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/NatGateway"},"NatGateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/OperationalInsights/Workspace"},"Workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../Network/DdosCustomPolicy.md"},"DdosCustomPolicy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PublicIPPrefix"},"PublicIPPrefix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PrivateLinkService"},"PrivateLinkService")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/ApplicationGateway"},"ApplicationGateway"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the application gateway private endpoint connection.',\n      properties: {\n        privateEndpoint: {\n          properties: {\n            extendedLocation: {\n              description: 'The extended location of the load balancer.',\n              properties: {\n                name: {\n                  type: 'string',\n                  description: 'The name of the extended location.'\n                },\n                type: {\n                  description: 'The type of the extended location.',\n                  type: 'string',\n                  enum: [ 'EdgeZone' ],\n                  'x-ms-enum': {\n                    name: 'ExtendedLocationTypes',\n                    modelAsString: true\n                  }\n                }\n              }\n            },\n            properties: {\n              'x-ms-client-flatten': true,\n              description: 'Properties of the private endpoint.',\n              properties: {\n                subnet: {\n                  description: 'The ID of the subnet from which the private IP will be allocated.',\n                  properties: {\n                    properties: {\n                      'x-ms-client-flatten': true,\n                      description: 'Properties of the subnet.',\n                      properties: [Object]\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n                    },\n                    etag: {\n                      readOnly: true,\n                      type: 'string',\n                      description: 'A unique read-only string that changes whenever the resource is updated.'\n                    },\n                    type: { type: 'string', description: 'Resource type.' }\n                  },\n                  allOf: [\n                    {\n                      properties: [Object],\n                      description: 'Reference to another subresource.',\n                      'x-ms-azure-resource': true\n                    }\n                  ]\n                },\n                networkInterfaces: {\n                  type: 'array',\n                  readOnly: true,\n                  items: {\n                    properties: {\n                      extendedLocation: [Object],\n                      properties: [Object],\n                      etag: [Object]\n                    },\n                    allOf: [ [Object] ],\n                    description: 'A network interface in a resource group.'\n                  },\n                  description: 'An array of references to the network interfaces created for this private endpoint.'\n                },\n                provisioningState: {\n                  readOnly: true,\n                  description: 'The provisioning state of the private endpoint resource.',\n                  type: 'string',\n                  enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                  'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                },\n                privateLinkServiceConnections: {\n                  type: 'array',\n                  items: {\n                    properties: {\n                      properties: [Object],\n                      name: [Object],\n                      type: [Object],\n                      etag: [Object]\n                    },\n                    allOf: [ [Object] ],\n                    description: 'PrivateLinkServiceConnection resource.'\n                  },\n                  description: 'A grouping of information about the connection to the remote resource.'\n                },\n                manualPrivateLinkServiceConnections: {\n                  type: 'array',\n                  items: {\n                    properties: {\n                      properties: [Object],\n                      name: [Object],\n                      type: [Object],\n                      etag: [Object]\n                    },\n                    allOf: [ [Object] ],\n                    description: 'PrivateLinkServiceConnection resource.'\n                  },\n                  description: 'A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.'\n                },\n                customDnsConfigs: {\n                  type: 'array',\n                  items: {\n                    properties: { fqdn: [Object], ipAddresses: [Object] },\n                    description: 'Contains custom Dns resolution configuration from customer.'\n                  },\n                  description: 'An array of custom dns configurations.'\n                },\n                applicationSecurityGroups: {\n                  type: 'array',\n                  items: {\n                    properties: { properties: [Object], etag: [Object] },\n                    allOf: [ [Object] ],\n                    description: 'An application security group in a resource group.'\n                  },\n                  description: 'Application security groups in which the private endpoint IP configuration is included.'\n                },\n                ipConfigurations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      properties: [Object],\n                      name: [Object],\n                      type: [Object],\n                      etag: [Object]\n                    },\n                    description: 'An IP Configuration of the private endpoint.'\n                  },\n                  description: \"A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.\"\n                },\n                customNetworkInterfaceName: {\n                  type: 'string',\n                  description: 'The custom name of the network interface attached to the private endpoint.'\n                }\n              }\n            },\n            etag: {\n              readOnly: true,\n              type: 'string',\n              description: 'A unique read-only string that changes whenever the resource is updated.'\n            }\n          },\n          allOf: [\n            {\n              properties: {\n                id: { type: 'string', description: 'Resource ID.' },\n                name: {\n                  readOnly: true,\n                  type: 'string',\n                  description: 'Resource name.'\n                },\n                type: {\n                  readOnly: true,\n                  type: 'string',\n                  description: 'Resource type.'\n                },\n                location: { type: 'string', description: 'Resource location.' },\n                tags: {\n                  type: 'object',\n                  additionalProperties: { type: 'string' },\n                  description: 'Resource tags.'\n                }\n              },\n              description: 'Common resource representation.',\n              'x-ms-azure-resource': true\n            }\n          ],\n          description: 'Private endpoint resource.',\n          readOnly: true\n        },\n        privateLinkServiceConnectionState: {\n          description: 'A collection of information about the state of the connection between service consumer and provider.',\n          properties: {\n            status: {\n              type: 'string',\n              description: 'Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.'\n            },\n            description: {\n              type: 'string',\n              description: 'The reason for approval/rejection of the connection.'\n            },\n            actionsRequired: {\n              type: 'string',\n              description: 'A message indicating if changes on the service provider require any updates on the consumer.'\n            }\n          }\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the application gateway private endpoint connection resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        linkIdentifier: {\n          readOnly: true,\n          type: 'string',\n          description: 'The consumer link id.'\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'Name of the private endpoint connection on an application gateway.'\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    type: {\n      readOnly: true,\n      type: 'string',\n      description: 'Type of the resource.'\n    }\n  },\n  allOf: [\n    {\n      properties: { id: { type: 'string', description: 'Resource ID.' } },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Private Endpoint connection on an application gateway.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/applicationGateway.json"},"here"),"."))}l.isMDXComponent=!0}}]);