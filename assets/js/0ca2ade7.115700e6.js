"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4901],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=i,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=l;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},81894:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],s={id:"UserProvidedFunctionAppForStaticSite",title:"UserProvidedFunctionAppForStaticSite"},a=void 0,p={unversionedId:"azure/resources/Web/UserProvidedFunctionAppForStaticSite",id:"azure/resources/Web/UserProvidedFunctionAppForStaticSite",isDocsHomePage:!1,title:"UserProvidedFunctionAppForStaticSite",description:"Provides a UserProvidedFunctionAppForStaticSite from the Web group",source:"@site/docs/azure/resources/Web/UserProvidedFunctionAppForStaticSite.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/UserProvidedFunctionAppForStaticSite",permalink:"/docs/azure/resources/Web/UserProvidedFunctionAppForStaticSite",tags:[],version:"current",frontMatter:{id:"UserProvidedFunctionAppForStaticSite",title:"UserProvidedFunctionAppForStaticSite"},sidebar:"docs",previous:{title:"StaticSitePrivateEndpointConnection",permalink:"/docs/azure/resources/Web/StaticSitePrivateEndpointConnection"},next:{title:"UserProvidedFunctionAppForStaticSiteBuild",permalink:"/docs/azure/resources/Web/UserProvidedFunctionAppForStaticSiteBuild"}},u=[{value:"Examples",id:"examples",children:[{value:"Register a user provided function app with a static site",id:"register-a-user-provided-function-app-with-a-static-site",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:u};function l(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"UserProvidedFunctionAppForStaticSite")," from the ",(0,o.kt)("strong",{parentName:"p"},"Web")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"register-a-user-provided-function-app-with-a-static-site"},"Register a user provided function app with a static site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Web.makeUserProvidedFunctionAppForStaticSite({\n  name: "myUserProvidedFunctionAppForStaticSite",\n  properties: () => ({\n    properties: {\n      functionAppResourceId:\n        "/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp",\n      functionAppRegion: "West US 2",\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    userProvidedFunctionAppForStaticSiteBuild:\n      resources.Web.UserProvidedFunctionAppForStaticSiteBuild[\n        "myUserProvidedFunctionAppForStaticSiteBuild"\n      ],\n    name: resources.Web.StaticSite["myStaticSite"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/UserProvidedFunctionAppForStaticSiteBuild"},"UserProvidedFunctionAppForStaticSiteBuild")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/StaticSite"},"StaticSite"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Static Site User Provided Function App ARM resource.',\n  type: 'object',\n  allOf: [\n    {\n      description: 'Azure proxy only resource. This resource is not tracked by Azure Resource Manager.',\n      type: 'object',\n      properties: {\n        id: { description: 'Resource Id.', type: 'string', readOnly: true },\n        name: {\n          description: 'Resource Name.',\n          type: 'string',\n          readOnly: true\n        },\n        kind: { description: 'Kind of resource.', type: 'string' },\n        type: {\n          description: 'Resource type.',\n          type: 'string',\n          readOnly: true\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      description: 'StaticSiteUserProvidedFunctionAppARMResource resource specific properties',\n      type: 'object',\n      properties: {\n        functionAppResourceId: {\n          description: 'The resource id of the function app registered with the static site',\n          type: 'string'\n        },\n        functionAppRegion: {\n          description: 'The region of the function app registered with the static site',\n          type: 'string'\n        },\n        createdOn: {\n          format: 'date-time',\n          description: 'The date and time on which the function app was registered with the static site.',\n          type: 'string',\n          readOnly: true\n        }\n      },\n      'x-ms-client-flatten': true\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-02-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/StaticSites.json"},"here"),"."))}l.isMDXComponent=!0}}]);