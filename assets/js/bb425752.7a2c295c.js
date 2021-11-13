(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{188:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),o=(t(0),t(237));const c={id:"Project",title:"Project"},a={unversionedId:"google/resources/Compute/Project",id:"google/resources/Compute/Project",isDocsHomePage:!1,title:"Project",description:"Manages a Project",source:"@site/docs/google/resources/Compute/Project.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/Project",permalink:"/docs/google/resources/Compute/Project",version:"current",frontMatter:{id:"Project",title:"Project"},sidebar:"docs",previous:{title:"Network",permalink:"/docs/google/resources/Compute/Network"},next:{title:"SSL Certificate",permalink:"/docs/google/resources/Compute/SslCertificate"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Gcloud CLI",id:"gcloud-cli",children:[]}],i={toc:l};function u({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/reference/rest/v1/projects"},"Project")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const project = provider.makeProject({ name: "myproject" });\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/iac.js"},"basic example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/resource-manager/reference/rest/v1/projects/create"},"all properties"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./VmInstance"},"Vm Instance"))),Object(o.b)("h3",{id:"gcloud-cli"},"Gcloud CLI"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gcloud organizations list\n\ngcloud projects list\n")))}u.isMDXComponent=!0},237:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||c;return t?o.a.createElement(d,l(l({ref:r},u),{},{components:t})):o.a.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);