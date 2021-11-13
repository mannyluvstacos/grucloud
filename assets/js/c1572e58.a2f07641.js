(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(237));const c={id:"SubNetwork",title:"SubNetwork"},a={unversionedId:"google/resources/Compute/SubNetwork",id:"google/resources/Compute/SubNetwork",isDocsHomePage:!1,title:"SubNetwork",description:"Manages a SubNetwork",source:"@site/docs/google/resources/Compute/SubNetwork.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/SubNetwork",permalink:"/docs/google/resources/Compute/SubNetwork",version:"current",frontMatter:{id:"SubNetwork",title:"SubNetwork"},sidebar:"docs",previous:{title:"SSL Certificate",permalink:"/docs/google/resources/Compute/SslCertificate"},next:{title:"Url Map",permalink:"/docs/google/resources/Compute/UrlMap"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],i={toc:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks"},"SubNetwork")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const subNetwork = provider.ec2.makeSubnetwork({\n  name: "subnetwork-dev",\n  dependencies: { network },\n  properties: () => ({\n    ipCidrRange: "10.164.0.0/20",\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js"},"basic example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks/insert"},"all properties"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./Network"},"Network"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./VmInstance"},"VmInstance"))))}l.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||c;return r?o.a.createElement(m,u(u({ref:t},l),{},{components:r})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);