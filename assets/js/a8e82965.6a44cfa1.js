"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9055],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30532:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"DdosProtectionPlan",title:"DdosProtectionPlan"},c=void 0,u={unversionedId:"azure/resources/Network/DdosProtectionPlan",id:"azure/resources/Network/DdosProtectionPlan",isDocsHomePage:!1,title:"DdosProtectionPlan",description:"Provides a DdosProtectionPlan from the Network group",source:"@site/docs/azure/resources/Network/DdosProtectionPlan.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/DdosProtectionPlan",permalink:"/docs/azure/resources/Network/DdosProtectionPlan",tags:[],version:"current",frontMatter:{id:"DdosProtectionPlan",title:"DdosProtectionPlan"},sidebar:"docs",previous:{title:"CustomIPPrefix",permalink:"/docs/azure/resources/Network/CustomIPPrefix"},next:{title:"DscpConfiguration",permalink:"/docs/azure/resources/Network/DscpConfiguration"}},p=[{value:"Examples",id:"examples",children:[{value:"Create DDoS protection plan",id:"create-ddos-protection-plan",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"DdosProtectionPlan")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"create-ddos-protection-plan"},"Create DDoS protection plan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeDdosProtectionPlan({\n  name: "myDdosProtectionPlan",\n  properties: () => ({ location: "westus", properties: {} }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'A DDoS protection plan in a resource group.',\n  'x-ms-azure-resource': true,\n  properties: {\n    id: { readOnly: true, type: 'string', description: 'Resource ID.' },\n    name: { readOnly: true, type: 'string', description: 'Resource name.' },\n    type: { readOnly: true, type: 'string', description: 'Resource type.' },\n    location: { type: 'string', description: 'Resource location.' },\n    tags: {\n      type: 'object',\n      additionalProperties: { type: 'string' },\n      description: 'Resource tags.'\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the DDoS protection plan.',\n      properties: {\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the DDoS protection plan resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        virtualNetworks: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          },\n          description: 'The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.'\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/ddosProtectionPlan.json"},"here"),"."))}d.isMDXComponent=!0}}]);