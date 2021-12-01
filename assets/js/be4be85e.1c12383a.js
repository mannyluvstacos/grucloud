"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9678],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2333:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"Registry",title:"Registry"},s=void 0,l={unversionedId:"aws/resources/ECR/Registry",id:"aws/resources/ECR/Registry",isDocsHomePage:!1,title:"Registry",description:"Manages a Docker Registry",source:"@site/docs/aws/resources/ECR/Registry.md",sourceDirName:"aws/resources/ECR",slug:"/aws/resources/ECR/Registry",permalink:"/docs/aws/resources/ECR/Registry",tags:[],version:"current",frontMatter:{id:"Registry",title:"Registry"},sidebar:"docs",previous:{title:"Vpc",permalink:"/docs/aws/resources/EC2/Vpc"},next:{title:"Repository",permalink:"/docs/aws/resources/ECR/Repository"}},p=[{value:"Sample Code",id:"sample-code",children:[{value:"Full Examples",id:"full-examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3}],level:2}],u={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Manages a ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecr/home"},"Docker Registry")),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("p",null,"The following code describes a repository with a policy and a replication configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.ECR.makeRepository({\n  name: "my-registry",\n  properties: ({ config }) => ({\n    policyText: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Sid: "st-1",\n          Effect: "Allow",\n          Principal: {\n            AWS: `arn:aws:iam::${config.accountId()}:root`,\n          },\n          Action: ["ecr:CreateRepository", "ecr:ReplicateImage"],\n          Resource: `arn:aws:ecr:${\n            config.region\n          }:${config.accountId()}:repository/*`,\n        },\n      ],\n    },\n    replicationConfiguration: {\n      rules: [\n        {\n          destinations: [\n            {\n              region: "us-east-1",\n              registryId: config.accountId(),\n            },\n          ],\n        },\n      ],\n    },\n  }),\n});\n')),(0,i.kt)("h3",{id:"full-examples"},"Full Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecr/repository"},"Registry and Repository"))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putRegistryPolicy-property"},"putRegistryPolicy properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECR.html#putReplicationConfiguration-property"},"putReplicationConfiguration properties"))))}f.isMDXComponent=!0}}]);