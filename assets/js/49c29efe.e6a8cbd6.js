(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return i}));var o=r(3),n=(r(0),r(237));const a={id:"Network",title:"Network"},c={unversionedId:"google/resources/Compute/Network",id:"google/resources/Compute/Network",isDocsHomePage:!1,title:"Network",description:"Manages a Virtual Private Clould Network",source:"@site/docs/google/resources/Compute/Network.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/Network",permalink:"/docs/google/resources/Compute/Network",version:"current",frontMatter:{id:"Network",title:"Network"},sidebar:"docs",previous:{title:"Https Target Proxy",permalink:"/docs/google/resources/Compute/HttpsTargetProxy"},next:{title:"Project",permalink:"/docs/google/resources/Compute/Project"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]}],u={toc:l};function i({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Manages a ",Object(n.b)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc"},"Virtual Private Clould Network")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'const network = provider.compute.makeNetwork({ name: "network" });\n')),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js"},"basic example"))),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert"},"all properties"))),Object(n.b)("h3",{id:"used-by"},"Used By"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./VmInstance"},"Vm Instance"))))}i.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=o,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||a;return r?n.a.createElement(d,l(l({ref:t},i),{},{components:r})):n.a.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);