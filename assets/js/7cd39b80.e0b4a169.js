"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4404],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),v=i,m=l["".concat(p,".").concat(v)]||l[v]||d[v]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},13646:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={id:"PrivateEndpointConnection",title:"PrivateEndpointConnection"},p=void 0,s={unversionedId:"azure/resources/ContainerService/PrivateEndpointConnection",id:"azure/resources/ContainerService/PrivateEndpointConnection",isDocsHomePage:!1,title:"PrivateEndpointConnection",description:"Provides a PrivateEndpointConnection from the ContainerService group",source:"@site/docs/azure/resources/ContainerService/PrivateEndpointConnection.md",sourceDirName:"azure/resources/ContainerService",slug:"/azure/resources/ContainerService/PrivateEndpointConnection",permalink:"/docs/azure/resources/ContainerService/PrivateEndpointConnection",tags:[],version:"current",frontMatter:{id:"PrivateEndpointConnection",title:"PrivateEndpointConnection"},sidebar:"docs",previous:{title:"OpenShiftManagedCluster",permalink:"/docs/azure/resources/ContainerService/OpenShiftManagedCluster"},next:{title:"Snapshot",permalink:"/docs/azure/resources/ContainerService/Snapshot"}},u=[{value:"Examples",id:"examples",children:[{value:"Update Private Endpoint Connection",id:"update-private-endpoint-connection",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:u};function l(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"PrivateEndpointConnection")," from the ",(0,o.kt)("strong",{parentName:"p"},"ContainerService")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"update-private-endpoint-connection"},"Update Private Endpoint Connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.ContainerService.makePrivateEndpointConnection({\n  name: "myPrivateEndpointConnection",\n  properties: () => ({\n    properties: { privateLinkServiceConnectionState: { status: "Approved" } },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    privateEndpoint: resources.Network.PrivateEndpoint["myPrivateEndpoint"],\n    resource: resources.ContainerService.ManagedCluster["myManagedCluster"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PrivateEndpoint"},"PrivateEndpoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/ContainerService/ManagedCluster"},"ManagedCluster"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'A private endpoint connection',\n  type: 'object',\n  properties: {\n    id: {\n      readOnly: true,\n      type: 'string',\n      description: 'The ID of the private endpoint connection.'\n    },\n    name: {\n      readOnly: true,\n      type: 'string',\n      description: 'The name of the private endpoint connection.',\n      externalDocs: { url: 'https://aka.ms/search-naming-rules' }\n    },\n    type: {\n      readOnly: true,\n      type: 'string',\n      description: 'The resource type.'\n    },\n    properties: {\n      description: 'The properties of a private endpoint connection.',\n      'x-ms-client-flatten': true,\n      type: 'object',\n      properties: {\n        provisioningState: {\n          type: 'string',\n          readOnly: true,\n          description: 'The current provisioning state.',\n          enum: [ 'Succeeded', 'Creating', 'Deleting', 'Failed' ],\n          'x-ms-enum': {\n            name: 'PrivateEndpointConnectionProvisioningState',\n            modelAsString: true\n          }\n        },\n        privateEndpoint: {\n          description: 'The resource of private endpoint.',\n          type: 'object',\n          properties: {\n            id: {\n              description: 'The resource ID of the private endpoint',\n              type: 'string'\n            }\n          }\n        },\n        privateLinkServiceConnectionState: {\n          description: 'A collection of information about the state of the connection between service consumer and provider.',\n          type: 'object',\n          properties: {\n            status: {\n              enum: [ 'Pending', 'Approved', 'Rejected', 'Disconnected' ],\n              type: 'string',\n              description: 'The private link service connection status.',\n              'x-ms-enum': { name: 'ConnectionStatus', modelAsString: true }\n            },\n            description: {\n              type: 'string',\n              description: 'The private link service connection description.'\n            }\n          }\n        }\n      },\n      required: [ 'privateLinkServiceConnectionState' ]\n    }\n  },\n  'x-ms-azure-resource': true\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-10-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2021-10-01/managedClusters.json"},"here"),"."))}l.isMDXComponent=!0}}]);