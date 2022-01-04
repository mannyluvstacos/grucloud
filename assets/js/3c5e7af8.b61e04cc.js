"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1818],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),p=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(a,".").concat(d)]||m[d]||l[d]||i;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91403:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],c={id:"HostingEnvironmentWorkerPool",title:"HostingEnvironmentWorkerPool"},a=void 0,p={unversionedId:"azure/resources/Web/HostingEnvironmentWorkerPool",id:"azure/resources/Web/HostingEnvironmentWorkerPool",isDocsHomePage:!1,title:"HostingEnvironmentWorkerPool",description:"Provides a HostingEnvironmentWorkerPool from the Web group",source:"@site/docs/azure/resources/Web/HostingEnvironmentWorkerPool.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/HostingEnvironmentWorkerPool",permalink:"/docs/azure/resources/Web/HostingEnvironmentWorkerPool",tags:[],version:"current",frontMatter:{id:"HostingEnvironmentWorkerPool",title:"HostingEnvironmentWorkerPool"},sidebar:"docs",previous:{title:"HostingEnvironmentMultiRolePool",permalink:"/docs/azure/resources/Web/HostingEnvironmentMultiRolePool"},next:{title:"KubeEnvironment",permalink:"/docs/azure/resources/Web/KubeEnvironment"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"HostingEnvironmentWorkerPool")," from the ",(0,i.kt)("strong",{parentName:"p"},"Web")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/AppServiceEnvironment"},"AppServiceEnvironment"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Worker pool of a hostingEnvironment (App Service Environment)',\n  type: 'object',\n  allOf: [\n    {\n      required: [ 'location' ],\n      properties: {\n        id: { description: 'Resource Id', type: 'string' },\n        name: { description: 'Resource Name', type: 'string' },\n        kind: { description: 'Kind of resource', type: 'string' },\n        location: { description: 'Resource Location', type: 'string' },\n        type: { description: 'Resource type', type: 'string' },\n        tags: {\n          description: 'Resource tags',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      properties: {\n        workerSizeId: {\n          format: 'int32',\n          description: 'Worker size id for referencing this worker pool',\n          type: 'integer'\n        },\n        computeMode: {\n          description: 'Shared or dedicated web app hosting',\n          enum: [ 'Shared', 'Dedicated', 'Dynamic' ],\n          type: 'string',\n          'x-ms-enum': { name: 'ComputeModeOptions', modelAsString: false }\n        },\n        workerSize: {\n          description: 'VM size of the worker pool instances',\n          type: 'string'\n        },\n        workerCount: {\n          format: 'int32',\n          description: 'Number of instances in the worker pool',\n          type: 'integer'\n        },\n        instanceNames: {\n          description: 'Names of all instances in the worker pool (read only)',\n          type: 'array',\n          items: { type: 'string' }\n        }\n      },\n      'x-ms-client-flatten': true\n    },\n    sku: {\n      description: 'Describes a sku for a scalable resource',\n      type: 'object',\n      properties: {\n        name: { description: 'Name of the resource sku', type: 'string' },\n        tier: {\n          description: 'Service Tier of the resource sku',\n          type: 'string'\n        },\n        size: {\n          description: 'Size specifier of the resource sku',\n          type: 'string'\n        },\n        family: {\n          description: 'Family code of the resource sku',\n          type: 'string'\n        },\n        capacity: {\n          format: 'int32',\n          description: 'Current number of instances assigned to the resource',\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2015-08-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2015-08-01/service.json"},"here"),"."))}m.isMDXComponent=!0}}]);