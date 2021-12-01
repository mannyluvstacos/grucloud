"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5848],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9217:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"Stage",title:"Stage"},s=void 0,c={unversionedId:"aws/resources/APIGateway/Stage",id:"aws/resources/APIGateway/Stage",isDocsHomePage:!1,title:"Stage",description:"Manages an API Gateway Stage.",source:"@site/docs/aws/resources/APIGateway/Stage.md",sourceDirName:"aws/resources/APIGateway",slug:"/aws/resources/APIGateway/Stage",permalink:"/docs/aws/resources/APIGateway/Stage",tags:[],version:"current",frontMatter:{id:"Stage",title:"Stage"},sidebar:"docs",previous:{title:"RestApi",permalink:"/docs/aws/resources/APIGateway/RestApi"},next:{title:"DataSource",permalink:"/docs/aws/resources/AppSync/DataSource"}},p=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages an ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"API Gateway Stage"),"."),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.APIGateway.makeRestApi({\n  name: "PetStore",\n  properties: ({ config }) => ({\n    apiKeySource: "HEADER",\n    endpointConfiguration: {\n      types: ["REGIONAL"],\n    },\n    schemaFile: "PetStore.swagger.json",\n    deployment: {\n      stageName: "dev",\n    },\n  }),\n});\n\nprovider.APIGateway.makeStage({\n  name: "dev",\n  properties: ({ config }) => ({\n    description: "dev",\n    methodSettings: {\n      "*/*": {\n        metricsEnabled: false,\n        dataTraceEnabled: false,\n        throttlingBurstLimit: 5000,\n        throttlingRateLimit: 10000,\n        cachingEnabled: false,\n        cacheTtlInSeconds: 300,\n        cacheDataEncrypted: false,\n        requireAuthorizationForCacheControl: true,\n        unauthorizedCacheControlHeaderStrategy: "SUCCEED_WITH_RESPONSE_HEADER",\n      },\n    },\n    cacheClusterEnabled: false,\n    cacheClusterSize: "0.5",\n    tracingEnabled: false,\n  }),\n  dependencies: ({ resources }) => ({\n    restApi: resources.APIGateway.RestApi.petStore,\n  }),\n});\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-api-gateway/modules/createstagerequest.html"},"create properties"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/RestApi"},"RestAPI"))),(0,o.kt)("h2",{id:"full-examples"},"Full Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway/restapi-lambda"},"RestAPI with Lambda"))),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"The Stages can be filtered with the ",(0,o.kt)("em",{parentName:"p"},"Stage")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Stage\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"")))}d.isMDXComponent=!0}}]);