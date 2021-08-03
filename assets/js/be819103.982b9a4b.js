(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return s}));var t=r(3),a=(r(0),r(201));const o={id:"IamPolicyReadOnly",title:"Iam Policy Read Only"},l={unversionedId:"aws/resources/IAM/IamPolicyReadOnly",id:"aws/resources/IAM/IamPolicyReadOnly",isDocsHomePage:!1,title:"Iam Policy Read Only",description:"Provides an Iam Read Only Policy.",source:"@site/docs/aws/resources/IAM/IamPolicyReadOnly.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/IamPolicyReadOnly",permalink:"/docs/aws/resources/IAM/IamPolicyReadOnly",version:"current",frontMatter:{id:"IamPolicyReadOnly",title:"Iam Policy Read Only"},sidebar:"docs",previous:{title:"Iam Policy",permalink:"/docs/aws/resources/IAM/IamPolicy"},next:{title:"Iam Role",permalink:"/docs/aws/resources/IAM/IamRole"}},c=[{value:"Attach an existing policy to a role",id:"attach-an-existing-policy-to-a-role",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Used By",id:"used-by",children:[]}],i={toc:c};function s({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides an Iam Read Only Policy."),Object(a.b)("p",null,"The examples below uses a read only policy and add it to a role, a user or a group."),Object(a.b)("h3",{id:"attach-an-existing-policy-to-a-role"},"Attach an existing policy to a role"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicyEKSCluster = provider.iam.usePolicyReadOnly({\n  name: "AmazonEKSClusterPolicy",\n  properties: () => ({\n    Arn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",\n  }),\n});\n\nconst iamRole = provider.iam.makeRole({\n  name: "eks-role",\n  dependencies: { policies: [iamPolicyEKSCluster] },\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Effect: "Allow",\n          Principal: {\n            Service: "eks.amazonaws.com",\n          },\n          Action: "sts:AssumeRole",\n        },\n      ],\n    },\n  }),\n});\n')),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/eks/iac.js"},"eks example"))),Object(a.b)("h3",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./IamRole"},"IamRole")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./IamUser"},"IamUser")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./IamGroup"},"IamGroup"))))}s.isMDXComponent=!0},201:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=t,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return r?a.a.createElement(d,c(c({ref:n},s),{},{components:r})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=y;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);