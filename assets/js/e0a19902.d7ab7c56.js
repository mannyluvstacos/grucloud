(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(201));const a={id:"Introduction",title:"Introduction"},c={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"What is GruCloud ?",description:"GruCloud is a tool for DevOps people which allow them to describe and manage cloud infrastructures as Javascript code.",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/docs/Introduction",version:"current",frontMatter:{id:"Introduction",title:"Introduction"},sidebar:"docs",next:{title:"AwsGettingStarted",permalink:"/docs/aws/AwsGettingStarted"}},i=[],u={toc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GruCloud is a tool for DevOps people which allow them to describe and manage cloud infrastructures as Javascript code."),Object(o.b)("p",null,"Do you need to create virtual machines, object storage for websites, maintaining DNS records, handling SSL Certificate, or manages kubernetes clusters ? GruCloud let you describe and configure theses resources with simple Javascript code. The GruCloud CLI interprets this description, connects to the various cloud provider API, and decide what to create, update and destroy."),Object(o.b)("h1",{id:"getting-started"},"Getting Started"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/AwsGettingStarted"},"AWS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/google/GoogleGettingStarted"},"Google Cloud")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/azure/AzureGettingStarted"},"Microsoft Azure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/k8s/K8sGettingStarted"},"Kubernetes"))))}s.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?o.a.createElement(b,i(i({ref:t},s),{},{components:r})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);