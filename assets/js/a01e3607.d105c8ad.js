"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2711],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3910:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"Bucket",title:"Bucket"},l=void 0,s={unversionedId:"google/resources/storage/Bucket",id:"google/resources/storage/Bucket",isDocsHomePage:!1,title:"Bucket",description:"Provides a bucket storage for a project.",source:"@site/docs/google/resources/storage/Bucket.md",sourceDirName:"google/resources/storage",slug:"/google/resources/storage/Bucket",permalink:"/docs/google/resources/storage/Bucket",tags:[],version:"current",frontMatter:{id:"Bucket",title:"Bucket"},sidebar:"docs",previous:{title:"Service Iam Member",permalink:"/docs/google/resources/run/ServiceIamMember"},next:{title:"Object",permalink:"/docs/google/resources/storage/Object"}},u=[{value:"Examples",id:"examples",children:[{value:"Simple Bucket",id:"simple-bucket",children:[],level:3},{value:"Static Website Bucket",id:"static-website-bucket",children:[],level:3}],level:2},{value:"Example Code",id:"example-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Used By",id:"used-by",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/"},"bucket storage")," for a project."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"simple-bucket"},"Simple Bucket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const bucket = provider.storage.makeBucket({\n  name: "myuniquebucketname",\n  properties: () => ({ storageClass: "STANDARD" }),\n});\n')),(0,a.kt)("h3",{id:"static-website-bucket"},"Static Website Bucket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const bucketPublic = provider.storage.makeBucket({\n  name: "demo.yourwebsite.com",\n  properties: () => ({\n    iamConfiguration: {\n      uniformBucketLevelAccess: {\n        enabled: true,\n      },\n    },\n    iam: {\n      bindings: [\n        {\n          role: "roles/storage.objectViewer",\n          members: ["allUsers"],\n        },\n      ],\n    },\n    website: { mainPageSuffix: "index.html", notFoundPage: "404.html" },\n  }),\n});\n')),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/simple/iac.js#L7"},"basic example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/website-https/iac.js#L7"},"https static website"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/json_api/v1/buckets/insert#request-body"},"Bucket create properties")),(0,a.kt)("h2",{id:"used-by"},"Used By"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/google/resources/storage/Object"},"GcpObject"))))}m.isMDXComponent=!0}}]);