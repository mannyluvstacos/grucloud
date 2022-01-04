"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2496],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return w}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),w=o,m=d["".concat(u,".").concat(w)]||d[w]||p[w]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function w(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60758:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"VirtualNetworkPeering",title:"VirtualNetworkPeering"},u=void 0,l={unversionedId:"azure/resources/Network/VirtualNetworkPeering",id:"azure/resources/Network/VirtualNetworkPeering",isDocsHomePage:!1,title:"VirtualNetworkPeering",description:"Provides a VirtualNetworkPeering from the Network group",source:"@site/docs/azure/resources/Network/VirtualNetworkPeering.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/VirtualNetworkPeering",permalink:"/docs/azure/resources/Network/VirtualNetworkPeering",tags:[],version:"current",frontMatter:{id:"VirtualNetworkPeering",title:"VirtualNetworkPeering"},sidebar:"docs",previous:{title:"VirtualNetworkGatewayNatRule",permalink:"/docs/azure/resources/Network/VirtualNetworkGatewayNatRule"},next:{title:"VirtualNetworkTap",permalink:"/docs/azure/resources/Network/VirtualNetworkTap"}},c=[{value:"Examples",id:"examples",children:[{value:"Create peering",id:"create-peering",children:[],level:3},{value:"Sync Peering",id:"sync-peering",children:[],level:3},{value:"Create peering with remote virtual network encryption",id:"create-peering-with-remote-virtual-network-encryption",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"VirtualNetworkPeering")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"create-peering"},"Create peering"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetworkPeering({\n  name: "myVirtualNetworkPeering",\n  properties: () => ({\n    properties: {\n      allowVirtualNetworkAccess: true,\n      allowForwardedTraffic: true,\n      allowGatewayTransit: false,\n      useRemoteGateways: false,\n      remoteVirtualNetwork: {\n        id: "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2",\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    virtualNetwork: resources.Network.VirtualNetwork["myVirtualNetwork"],\n  }),\n});\n\n')),(0,i.kt)("h3",{id:"sync-peering"},"Sync Peering"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetworkPeering({\n  name: "myVirtualNetworkPeering",\n  properties: () => ({\n    properties: {\n      allowVirtualNetworkAccess: true,\n      allowForwardedTraffic: true,\n      allowGatewayTransit: false,\n      useRemoteGateways: false,\n      remoteVirtualNetwork: {\n        id: "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2",\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    virtualNetwork: resources.Network.VirtualNetwork["myVirtualNetwork"],\n  }),\n});\n\n')),(0,i.kt)("h3",{id:"create-peering-with-remote-virtual-network-encryption"},"Create peering with remote virtual network encryption"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeVirtualNetworkPeering({\n  name: "myVirtualNetworkPeering",\n  properties: () => ({\n    properties: {\n      allowVirtualNetworkAccess: true,\n      allowForwardedTraffic: true,\n      allowGatewayTransit: false,\n      useRemoteGateways: false,\n      remoteVirtualNetwork: {\n        id: "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2",\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    virtualNetwork: resources.Network.VirtualNetwork["myVirtualNetwork"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualNetwork"},"VirtualNetwork"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the virtual network peering.',\n      properties: {\n        allowVirtualNetworkAccess: {\n          type: 'boolean',\n          description: 'Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.'\n        },\n        allowForwardedTraffic: {\n          type: 'boolean',\n          description: 'Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.'\n        },\n        allowGatewayTransit: {\n          type: 'boolean',\n          description: 'If gateway links can be used in remote virtual networking to link to this virtual network.'\n        },\n        useRemoteGateways: {\n          type: 'boolean',\n          description: 'If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.'\n        },\n        remoteVirtualNetwork: {\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          description: 'Reference to another subresource.',\n          'x-ms-azure-resource': true\n        },\n        remoteAddressSpace: {\n          description: 'The reference to the address space peered with the remote virtual network.',\n          properties: {\n            addressPrefixes: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'A list of address blocks reserved for this virtual network in CIDR notation.'\n            }\n          }\n        },\n        remoteVirtualNetworkAddressSpace: {\n          description: 'The reference to the current address space of the remote virtual network.',\n          properties: {\n            addressPrefixes: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'A list of address blocks reserved for this virtual network in CIDR notation.'\n            }\n          }\n        },\n        remoteBgpCommunities: {\n          default: null,\n          description: \"The reference to the remote virtual network's Bgp Communities.\",\n          properties: {\n            virtualNetworkCommunity: {\n              type: 'string',\n              description: 'The BGP community associated with the virtual network.'\n            },\n            regionalCommunity: {\n              type: 'string',\n              readOnly: true,\n              description: 'The BGP community associated with the region of the virtual network.'\n            }\n          },\n          required: [ 'virtualNetworkCommunity' ]\n        },\n        remoteVirtualNetworkEncryption: {\n          readOnly: true,\n          default: null,\n          description: \"The reference to the remote virtual network's encryption\",\n          type: 'object',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Indicates if encryption is enabled on the virtual network.'\n            },\n            enforcement: {\n              type: 'string',\n              description: 'If the encrypted VNet allows VM that does not support encryption',\n              enum: [ 'DropUnencrypted', 'AllowUnencrypted' ],\n              'x-ms-enum': {\n                name: 'VirtualNetworkEncryptionEnforcement',\n                modelAsString: true\n              }\n            }\n          },\n          required: [ 'enabled' ]\n        },\n        peeringState: {\n          type: 'string',\n          description: 'The status of the virtual network peering.',\n          enum: [ 'Initiated', 'Connected', 'Disconnected' ],\n          'x-ms-enum': { name: 'VirtualNetworkPeeringState', modelAsString: true }\n        },\n        peeringSyncLevel: {\n          type: 'string',\n          description: 'The peering sync status of the virtual network peering.',\n          enum: [\n            'FullyInSync',\n            'RemoteNotInSync',\n            'LocalNotInSync',\n            'LocalAndRemoteNotInSync'\n          ],\n          'x-ms-enum': { name: 'VirtualNetworkPeeringLevel', modelAsString: true }\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the virtual network peering resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        doNotVerifyRemoteGateways: {\n          type: 'boolean',\n          description: 'If we need to verify the provisioning state of the remote gateway.'\n        },\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resourceGuid property of the Virtual Network peering resource.'\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    type: { type: 'string', description: 'Resource type.' }\n  },\n  allOf: [\n    {\n      properties: { id: { type: 'string', description: 'Resource ID.' } },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Peerings in a virtual network resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualNetwork.json"},"here"),"."))}d.isMDXComponent=!0}}]);