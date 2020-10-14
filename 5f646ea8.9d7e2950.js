(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=(r(0),r(162));const o={id:"AzureMisc",title:"Miscellaneous"},c={id:"azure/AzureMisc",isDocsHomePage:!1,title:"Miscellaneous",description:"Useful commands",source:"@site/docs/azure/AzureMisc.md",permalink:"/docs/azure/AzureMisc",sidebar:"someSidebar",previous:{title:"Virtual Machine",permalink:"/docs/azure/resources/VirtualMachine"},next:{title:"Google Requirements",permalink:"/docs/google/GoogleRequirements"}},i=[{value:"Useful commands",id:"useful-commands",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],u={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"useful-commands"},"Useful commands"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"az account list-locations -o table"),Object(a.b)("li",{parentName:"ul"},"az vm image list")),Object(a.b)("h2",{id:"useful-links"},"Useful Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://portal.azure.com"}),"https://portal.azure.com")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/rest/api/azure/"}),"https://docs.microsoft.com/en-us/rest/api/azure/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Azure/azure-sdk-for-js"}),"https://github.com/Azure/azure-sdk-for-js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Azure-Samples/compute-node-manage-vm"}),"https://github.com/Azure-Samples/compute-node-manage-vm")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.jongallant.com/2019/04/azure-rest-apis-postman-in-no-time-flat/"}),"https://blog.jongallant.com/2019/04/azure-rest-apis-postman-in-no-time-flat/"))))}l.isMDXComponent=!0},162:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);