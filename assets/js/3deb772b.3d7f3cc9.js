"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=c(r),g=i,f=l["".concat(p,".").concat(g)]||l[g]||u[g]||o;return r?t.createElement(f,s(s({ref:n},d),{},{components:r})):t.createElement(f,s({ref:n},d))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=l;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},31267:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={id:"DscpConfiguration",title:"DscpConfiguration"},p=void 0,c={unversionedId:"azure/resources/Network/DscpConfiguration",id:"azure/resources/Network/DscpConfiguration",isDocsHomePage:!1,title:"DscpConfiguration",description:"Provides a DscpConfiguration from the Network group",source:"@site/docs/azure/resources/Network/DscpConfiguration.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/DscpConfiguration",permalink:"/docs/azure/resources/Network/DscpConfiguration",tags:[],version:"current",frontMatter:{id:"DscpConfiguration",title:"DscpConfiguration"},sidebar:"docs",previous:{title:"DdosProtectionPlan",permalink:"/docs/azure/resources/Network/DdosProtectionPlan"},next:{title:"ExpressRouteCircuit",permalink:"/docs/azure/resources/Network/ExpressRouteCircuit"}},d=[{value:"Examples",id:"examples",children:[{value:"Create DSCP Configuration",id:"create-dscp-configuration",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:d};function l(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"DscpConfiguration")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-dscp-configuration"},"Create DSCP Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeDscpConfiguration({\n  name: "myDscpConfiguration",\n  properties: () => ({\n    properties: {\n      qosDefinitionCollection: [\n        {\n          markings: [1],\n          sourceIpRanges: [{ startIP: "127.0.0.1", endIP: "127.0.0.2" }],\n          destinationIpRanges: [{ startIP: "127.0.10.1", endIP: "127.0.10.2" }],\n          sourcePortRanges: [\n            { start: 10, end: 11 },\n            { start: 20, end: 21 },\n          ],\n          destinationPortRanges: [{ start: 15, end: 15 }],\n          protocol: "Tcp",\n        },\n        {\n          markings: [2],\n          sourceIpRanges: [{ startIP: "12.0.0.1", endIP: "12.0.0.2" }],\n          destinationIpRanges: [{ startIP: "12.0.10.1", endIP: "12.0.10.2" }],\n          sourcePortRanges: [{ start: 11, end: 12 }],\n          destinationPortRanges: [{ start: 51, end: 52 }],\n          protocol: "Udp",\n        },\n      ],\n    },\n    location: "eastus",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    virtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],\n    natGateway: resources.Network.NatGateway["myNatGateway"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/VirtualMachine"},"VirtualMachine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/NatGateway"},"NatGateway"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the network interface.',\n      properties: {\n        markings: {\n          type: 'array',\n          items: { type: 'integer', format: 'int32' },\n          description: 'List of markings to be used in the configuration.'\n        },\n        sourceIpRanges: {\n          type: 'array',\n          items: {\n            properties: {\n              startIP: { type: 'string', description: 'Start IP Address.' },\n              endIP: { type: 'string', description: 'End IP Address.' }\n            },\n            description: 'Qos Traffic Profiler IP Range properties.'\n          },\n          description: 'Source IP ranges.'\n        },\n        destinationIpRanges: {\n          type: 'array',\n          items: {\n            properties: {\n              startIP: { type: 'string', description: 'Start IP Address.' },\n              endIP: { type: 'string', description: 'End IP Address.' }\n            },\n            description: 'Qos Traffic Profiler IP Range properties.'\n          },\n          description: 'Destination IP ranges.'\n        },\n        sourcePortRanges: {\n          type: 'array',\n          items: {\n            properties: {\n              start: {\n                type: 'integer',\n                format: 'int32',\n                description: 'Qos Port Range start.'\n              },\n              end: {\n                type: 'integer',\n                format: 'int32',\n                description: 'Qos Port Range end.'\n              }\n            },\n            description: 'Qos Traffic Profiler Port range properties.'\n          },\n          description: 'Sources port ranges.'\n        },\n        destinationPortRanges: {\n          type: 'array',\n          items: {\n            properties: {\n              start: {\n                type: 'integer',\n                format: 'int32',\n                description: 'Qos Port Range start.'\n              },\n              end: {\n                type: 'integer',\n                format: 'int32',\n                description: 'Qos Port Range end.'\n              }\n            },\n            description: 'Qos Traffic Profiler Port range properties.'\n          },\n          description: 'Destination port ranges.'\n        },\n        protocol: {\n          type: 'string',\n          enum: [\n            'DoNotUse', 'Icmp',\n            'Tcp',      'Udp',\n            'Gre',      'Esp',\n            'Ah',       'Vxlan',\n            'All'\n          ],\n          'x-ms-enum': { name: 'ProtocolType', modelAsString: true },\n          description: 'RNM supported protocol types.'\n        },\n        qosDefinitionCollection: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              markings: {\n                type: 'array',\n                items: { type: 'integer', format: 'int32' },\n                description: 'List of markings to be used in the configuration.'\n              },\n              sourceIpRanges: {\n                type: 'array',\n                items: {\n                  properties: {\n                    startIP: {\n                      type: 'string',\n                      description: 'Start IP Address.'\n                    },\n                    endIP: { type: 'string', description: 'End IP Address.' }\n                  },\n                  description: 'Qos Traffic Profiler IP Range properties.'\n                },\n                description: 'Source IP ranges.'\n              },\n              destinationIpRanges: {\n                type: 'array',\n                items: {\n                  properties: {\n                    startIP: {\n                      type: 'string',\n                      description: 'Start IP Address.'\n                    },\n                    endIP: { type: 'string', description: 'End IP Address.' }\n                  },\n                  description: 'Qos Traffic Profiler IP Range properties.'\n                },\n                description: 'Destination IP ranges.'\n              },\n              sourcePortRanges: {\n                type: 'array',\n                items: {\n                  properties: {\n                    start: {\n                      type: 'integer',\n                      format: 'int32',\n                      description: 'Qos Port Range start.'\n                    },\n                    end: {\n                      type: 'integer',\n                      format: 'int32',\n                      description: 'Qos Port Range end.'\n                    }\n                  },\n                  description: 'Qos Traffic Profiler Port range properties.'\n                },\n                description: 'Sources port ranges.'\n              },\n              destinationPortRanges: {\n                type: 'array',\n                items: {\n                  properties: {\n                    start: {\n                      type: 'integer',\n                      format: 'int32',\n                      description: 'Qos Port Range start.'\n                    },\n                    end: {\n                      type: 'integer',\n                      format: 'int32',\n                      description: 'Qos Port Range end.'\n                    }\n                  },\n                  description: 'Qos Traffic Profiler Port range properties.'\n                },\n                description: 'Destination port ranges.'\n              },\n              protocol: {\n                type: 'string',\n                enum: [\n                  'DoNotUse', 'Icmp',\n                  'Tcp',      'Udp',\n                  'Gre',      'Esp',\n                  'Ah',       'Vxlan',\n                  'All'\n                ],\n                'x-ms-enum': { name: 'ProtocolType', modelAsString: true },\n                description: 'RNM supported protocol types.'\n              }\n            },\n            description: 'Quality of Service defines the traffic configuration between endpoints. Mandatory to have one marking.'\n          },\n          description: 'QoS object definitions'\n        },\n        qosCollectionId: {\n          type: 'string',\n          readOnly: true,\n          description: 'Qos Collection ID generated by RNM.'\n        },\n        associatedNetworkInterfaces: {\n          type: 'array',\n          items: {\n            properties: {\n              extendedLocation: {\n                description: 'The extended location of the network interface.',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'The name of the extended location.'\n                  },\n                  type: {\n                    description: 'The type of the extended location.',\n                    type: 'string',\n                    enum: [ 'EdgeZone' ],\n                    'x-ms-enum': {\n                      name: 'ExtendedLocationTypes',\n                      modelAsString: true\n                    }\n                  }\n                }\n              },\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the network interface.',\n                properties: {\n                  virtualMachine: {\n                    description: 'The reference to a virtual machine.',\n                    readOnly: true,\n                    properties: { id: [Object] },\n                    'x-ms-azure-resource': true\n                  },\n                  networkSecurityGroup: {\n                    description: 'The reference to the NetworkSecurityGroup resource.',\n                    properties: { properties: [Object], etag: [Object] },\n                    allOf: [ [Object] ]\n                  },\n                  privateEndpoint: {\n                    properties: {\n                      extendedLocation: [Object],\n                      properties: [Object],\n                      etag: [Object]\n                    },\n                    allOf: [ [Object] ],\n                    description: 'Private endpoint resource.',\n                    readOnly: true\n                  },\n                  ipConfigurations: {\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'IPConfiguration in a network interface.'\n                    },\n                    description: 'A list of IPConfigurations of the network interface.'\n                  },\n                  tapConfigurations: {\n                    readOnly: true,\n                    type: 'array',\n                    items: {\n                      properties: [Object],\n                      allOf: [Array],\n                      description: 'Tap configuration in a Network Interface.'\n                    },\n                    description: 'A list of TapConfigurations of the network interface.'\n                  },\n                  dnsSettings: {\n                    description: 'The DNS settings in network interface.',\n                    properties: {\n                      dnsServers: [Object],\n                      appliedDnsServers: [Object],\n                      internalDnsNameLabel: [Object],\n                      internalFqdn: [Object],\n                      internalDomainNameSuffix: [Object]\n                    }\n                  },\n                  macAddress: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The MAC address of the network interface.'\n                  },\n                  primary: {\n                    readOnly: true,\n                    type: 'boolean',\n                    description: 'Whether this is a primary network interface on a virtual machine.'\n                  },\n                  vnetEncryptionSupported: {\n                    readOnly: true,\n                    type: 'boolean',\n                    description: 'Whether the virtual machine this nic is attached to supports encryption.'\n                  },\n                  enableAcceleratedNetworking: {\n                    type: 'boolean',\n                    description: 'If the network interface is accelerated networking enabled.'\n                  },\n                  enableIPForwarding: {\n                    type: 'boolean',\n                    description: 'Indicates whether IP forwarding is enabled on this network interface.'\n                  },\n                  hostedWorkloads: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    readOnly: true,\n                    description: 'A list of references to linked BareMetal resources.'\n                  },\n                  dscpConfiguration: {\n                    properties: { id: [Object] },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true,\n                    readOnly: true\n                  },\n                  resourceGuid: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The resource GUID property of the network interface resource.'\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the network interface resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  },\n                  workloadType: {\n                    type: 'string',\n                    description: 'WorkloadType of the NetworkInterface for BareMetal resources'\n                  },\n                  nicType: {\n                    type: 'string',\n                    description: 'Type of Network Interface resource.',\n                    enum: [ 'Standard', 'Elastic' ],\n                    'x-ms-enum': {\n                      name: 'NetworkInterfaceNicType',\n                      modelAsString: true\n                    }\n                  },\n                  privateLinkService: {\n                    description: 'Privatelinkservice of the network interface resource.',\n                    properties: {\n                      extendedLocation: [Object],\n                      properties: [Object],\n                      etag: [Object]\n                    },\n                    allOf: [ [Object] ]\n                  },\n                  migrationPhase: {\n                    type: 'string',\n                    description: 'Migration phase of Network Interface resource.',\n                    enum: [\n                      'None',\n                      'Prepare',\n                      'Commit',\n                      'Abort',\n                      'Committed'\n                    ],\n                    'x-ms-enum': {\n                      name: 'NetworkInterfaceMigrationPhase',\n                      modelAsString: true\n                    }\n                  }\n                }\n              },\n              etag: {\n                readOnly: true,\n                type: 'string',\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              }\n            },\n            allOf: [\n              {\n                properties: {\n                  id: { type: 'string', description: 'Resource ID.' },\n                  name: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'Resource name.'\n                  },\n                  type: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'Resource type.'\n                  },\n                  location: { type: 'string', description: 'Resource location.' },\n                  tags: {\n                    type: 'object',\n                    additionalProperties: { type: 'string' },\n                    description: 'Resource tags.'\n                  }\n                },\n                description: 'Common resource representation.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'A network interface in a resource group.'\n          },\n          readOnly: true,\n          description: 'Associated Network Interfaces to the DSCP Configuration.'\n        },\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resource GUID property of the DSCP Configuration resource.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the DSCP Configuration resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Differentiated Services Code Point configuration for any given network interface'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/dscpConfiguration.json"},"here"),"."))}l.isMDXComponent=!0}}]);