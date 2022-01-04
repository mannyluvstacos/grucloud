"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6694],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),i=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||c;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var o=r(87462),n=r(63366),c=(r(67294),r(3905)),a=["components"],l={id:"Network",title:"Network"},u=void 0,i={unversionedId:"google/resources/compute/Network",id:"google/resources/compute/Network",isDocsHomePage:!1,title:"Network",description:"Manages a Virtual Private Clould Network",source:"@site/docs/google/resources/compute/Network.md",sourceDirName:"google/resources/compute",slug:"/google/resources/compute/Network",permalink:"/docs/google/resources/compute/Network",tags:[],version:"current",frontMatter:{id:"Network",title:"Network"},sidebar:"docs",previous:{title:"Https Target Proxy",permalink:"/docs/google/resources/compute/HttpsTargetProxy"},next:{title:"Project",permalink:"/docs/google/resources/compute/Project"}},p=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3}],s={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Manages a ",(0,c.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc"},"Virtual Private Clould Network")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'const network = provider.compute.makeNetwork({ name: "network" });\n')),(0,c.kt)("h3",{id:"examples"},"Examples"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js"},"basic example"))),(0,c.kt)("h3",{id:"properties"},"Properties"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert"},"all properties"))),(0,c.kt)("h3",{id:"used-by"},"Used By"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/VmInstance"},"Vm Instance"))))}m.isMDXComponent=!0}}]);