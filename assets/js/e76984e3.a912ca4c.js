(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(8),c=(t(0),t(193)),i={id:"SecurityGroup",title:"Security Group"},u={unversionedId:"azure/resources/SecurityGroup",id:"azure/resources/SecurityGroup",isDocsHomePage:!1,title:"Security Group",description:"Provides a Security Group:",source:"@site/docs/azure/resources/SecurityGroup.md",sourceDirName:"azure/resources",slug:"/azure/resources/SecurityGroup",permalink:"/docs/azure/resources/SecurityGroup",version:"current",frontMatter:{id:"SecurityGroup",title:"Security Group"},sidebar:"docs",previous:{title:"Resource Group",permalink:"/docs/azure/resources/ResourceGroup"},next:{title:"Virtual Machine",permalink:"/docs/azure/resources/VirtualMachine"}},a=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],s={toc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a Security Group:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const sg = provider.makeSecurityGroup({\n  name: `security-group`,\n  dependencies: { resourceGroup },\n  properties: () => ({\n    properties: {\n      securityRules: [\n        {\n          name: "SSH",\n          properties: {\n            access: "Allow",\n            direction: "Inbound",\n            protocol: "Tcp",\n            destinationPortRange: "22",\n            destinationAddressPrefix: "*",\n            sourcePortRange: "*",\n            sourceAddressPrefix: "*",\n            priority: 1000,\n          },\n        },\n        {\n          name: "ICMP",\n          properties: {\n            access: "Allow",\n            direction: "Inbound",\n            protocol: "Icmp",\n            destinationAddressPrefix: "*",\n            destinationPortRange: "*",\n            sourceAddressPrefix: "*",\n            sourcePortRange: "*",\n            priority: 1001,\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/iac.js#L33"},"basic example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networksecuritygroups/createorupdate#request-body"},"all properties"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./ResourceGroup"},"ResourceGroup"))),Object(c.b)("h3",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./NetworkInterface"},"NetworkInterface"))))}p.isMDXComponent=!0},193:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=p(t),b=n,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||c;return t?o.a.createElement(f,u(u({ref:r},s),{},{components:t})):o.a.createElement(f,u({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=b;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<c;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);