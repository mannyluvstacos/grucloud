(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{167:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),o=(r(0),r(198)),c={id:"IamPolicyReadOnly",title:"Iam Policy Read Only"},l={unversionedId:"aws/resources/IAM/IamPolicyReadOnly",id:"aws/resources/IAM/IamPolicyReadOnly",isDocsHomePage:!1,title:"Iam Policy Read Only",description:"Provides an Iam Read Only Policy.",source:"@site/docs/aws/resources/IAM/IamPolicyReadOnly.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/IamPolicyReadOnly",permalink:"/docs/aws/resources/IAM/IamPolicyReadOnly",version:"current",frontMatter:{id:"IamPolicyReadOnly",title:"Iam Policy Read Only"},sidebar:"docs",previous:{title:"Iam Policy",permalink:"/docs/aws/resources/IAM/IamPolicy"},next:{title:"Iam Role",permalink:"/docs/aws/resources/IAM/IamRole"}},i=[{value:"Attach an existing policy to a role",id:"attach-an-existing-policy-to-a-role",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Used By",id:"used-by",children:[]}],s={toc:i};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an Iam Read Only Policy."),Object(o.b)("p",null,"The examples below uses a read only policy and add it to a role, a user or a group."),Object(o.b)("h3",{id:"attach-an-existing-policy-to-a-role"},"Attach an existing policy to a role"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicyEKSCluster = provider.iam.usePolicyReadOnly({\n  name: "AmazonEKSClusterPolicy",\n  properties: () => ({\n    Arn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",\n  }),\n});\n\nconst iamRole = provider.iam.makeRole({\n  name: "eks-role",\n  dependencies: { policies: [iamPolicyEKSCluster] },\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Effect: "Allow",\n          Principal: {\n            Service: "eks.amazonaws.com",\n          },\n          Action: "sts:AssumeRole",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/eks/iac.js"},"eks example"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamRole"},"IamRole")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamUser"},"IamUser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamGroup"},"IamGroup"))))}u.isMDXComponent=!0},198:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=t,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||o;return r?a.a.createElement(d,l(l({ref:n},s),{},{components:r})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);