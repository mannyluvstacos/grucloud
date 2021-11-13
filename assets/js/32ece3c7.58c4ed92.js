(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return u}));var n=r(3),i=(r(0),r(237));const o={id:"Init",title:"Init"},c={unversionedId:"cli/Init",id:"cli/Init",isDocsHomePage:!1,title:"Init",description:"The init commands initialises the providers.",source:"@site/docs/cli/Init.md",sourceDirName:"cli",slug:"/cli/Init",permalink:"/docs/cli/Init",version:"current",frontMatter:{id:"Init",title:"Init"},sidebar:"docs",previous:{title:"New Project",permalink:"/docs/cli/New"},next:{title:"Plan Query",permalink:"/docs/cli/PlanQuery"}},a=[{value:"Providers",id:"providers",children:[{value:"AWS",id:"aws",children:[]},{value:"Azure",id:"azure",children:[]},{value:"Google",id:"google",children:[]}]}],l={toc:a};function u({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"init")," commands initialises the providers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"gc init\n")),Object(i.b)("p",null,"The exact procedure depends on the provider, however, most of them perform the following tasks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check if the provider's CLI is installed."),Object(i.b)("li",{parentName:"ul"},"Authenticate to the cloud provider."),Object(i.b)("li",{parentName:"ul"},"Set region and zone.")),Object(i.b)("h2",{id:"providers"},"Providers"),Object(i.b)("h3",{id:"aws"},"AWS"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-init-aws.svg",alt:"gc-init-aws"})),Object(i.b)("h3",{id:"azure"},"Azure"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-init-azure.svg",alt:"gc-init-azure"})),Object(i.b)("h3",{id:"google"},"Google"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-init-google.svg",alt:"gc-init-google"})))}u.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return r?i.a.createElement(m,a(a({ref:t},u),{},{components:r})):i.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);