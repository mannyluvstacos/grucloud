(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{133:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),a=(t(0),t(161));const o={id:"VirtualNetwork",title:"Virtual Network"},c={id:"azure/resources/VirtualNetwork",isDocsHomePage:!1,title:"Virtual Network",description:"Provides a virtual network.",source:"@site/docs/azure/resources/VirtualNetwork.md",permalink:"/docs/azure/resources/VirtualNetwork",sidebar:"someSidebar",previous:{title:"Resource Group",permalink:"/docs/azure/resources/ResourceGroup"},next:{title:"Security Group",permalink:"/docs/azure/resources/SecurityGroup"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],u={rightToc:i};function l({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides a virtual network."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const virtualNetwork = await provider.makeVirtualNetwork({\n  name: `virtual-network`,\n  dependencies: { resourceGroup },\n  properties: () => ({\n    properties: {\n      addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n      subnets: [\n        {\n          name: `subnet`,\n          properties: {\n            addressPrefix: "10.0.0.0/24",\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/azure/iac.js#14"}),"basic example"))),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/virtualnetworks/createorupdate#request-body"}),"all properties"))),Object(a.b)("h3",{id:"dependencies"},"Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./ResourceGroup"}),"ResourceGroup"))),Object(a.b)("h3",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./NetworkInterface"}),"NetworkInterface"))))}l.isMDXComponent=!0},161:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:r},l),{},{components:t})):a.a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);