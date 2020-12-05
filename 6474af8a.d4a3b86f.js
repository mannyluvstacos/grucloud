(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(174)),c={id:"IamInstanceProfile",title:"Iam Instance Profile"},o={id:"aws/resources/IAM/IamInstanceProfile",isDocsHomePage:!1,title:"Iam Instance Profile",description:"Provides an Iam Instance Profile.",source:"@site/docs/aws/resources/IAM/IamInstanceProfile.md",permalink:"/docs/aws/resources/IAM/IamInstanceProfile",sidebar:"someSidebar",previous:{title:"Elastic Ip Address",permalink:"/docs/aws/resources/EC2/ElasticIpAddress"},next:{title:"Iam Group",permalink:"/docs/aws/resources/IAM/IamGroup"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides an Iam Instance Profile."),Object(i.b)("p",null,"The following example create an instance profile, a role attached to this instance profile, and create an ec2 instance under this profile:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const iamRole = await provider.makeIamRole({\n  name: "my-role",\n  properties: () => ({\n    Path: "/",\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n\nconst iamInstanceProfile = await provider.makeIamInstanceProfile({\n  name: "my-instance-profile",\n  dependencies: { iamRoles: [iamRoles] },\n  properties: () => ({\n    Path: "/",\n  }),\n});\n\nconst server = await provider.makeEC2({\n  name: "web-iam",\n  dependencies: { keyPair, iamInstanceProfile },\n  properties: () => ({\n    VolumeSize: 50,\n    InstanceType: "t2.micro",\n    ImageId: "ami-00f6a0c18edb19300", // Ubuntu 18.04\n  }),\n});\n')),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iac.js"}),"simple example"))),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createInstanceProfile-property"}),"properties list"))),Object(i.b)("h3",{id:"dependencies"},"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"./IamRole"}),"IamRole"))),Object(i.b)("h3",{id:"used-by"},"Used By"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../EC2/EC2"}),"EC2"))),Object(i.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(i.b)("p",null,"List all iam instances profile"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"aws iam list-instance-profiles\n\n")),Object(i.b)("p",null,"Delete an instance profile"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"aws iam delete-instance-profile --instance-profile-name ExampleInstanceProfile\n")))}p.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return t?a.a.createElement(d,o(o({ref:n},s),{},{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);