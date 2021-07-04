(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{171:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(8),a=(t(0),t(198)),c={id:"ResourceGroup",title:"Resource Group"},u={unversionedId:"azure/resources/ResourceGroup",id:"azure/resources/ResourceGroup",isDocsHomePage:!1,title:"Resource Group",description:"A container for other resources:",source:"@site/docs/azure/resources/ResourceGroup.md",sourceDirName:"azure/resources",slug:"/azure/resources/ResourceGroup",permalink:"/docs/azure/resources/ResourceGroup",version:"current",frontMatter:{id:"ResourceGroup",title:"Resource Group"},sidebar:"docs",previous:{title:"Public Ip Address",permalink:"/docs/azure/resources/PublicIpAddress"},next:{title:"Security Group",permalink:"/docs/azure/resources/SecurityGroup"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]}],p={toc:i};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A container for other resources:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const resourceGroup = provider.makeResourceGroup({\n  name: `resource-group`,\n});\n")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#9"},"basic example"))),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/apimanagement/2019-12-01/apimanagementservice/createorupdate#request-body"},"all properties"))),Object(a.b)("h3",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./VirtualNetwork"},"VirtualNetwork")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./NetworkInterface"},"NetworkInterface")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./PublicIpAddress"},"PublicIpAddress")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./VirtualMachine"},"VirtualMachine"))))}s.isMDXComponent=!0},198:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(t),m=n,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return t?o.a.createElement(d,u(u({ref:r},p),{},{components:t})):o.a.createElement(d,u({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);