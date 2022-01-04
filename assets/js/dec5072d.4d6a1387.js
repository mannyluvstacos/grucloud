"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3326],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72066:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"New",title:"New Project"},l=void 0,u={unversionedId:"cli/New",id:"cli/New",isDocsHomePage:!1,title:"New Project",description:"The new commands create an empty project for AWS, Azure and GCP.",source:"@site/docs/cli/New.md",sourceDirName:"cli",slug:"/cli/New",permalink:"/docs/cli/New",tags:[],version:"current",frontMatter:{id:"New",title:"New Project"},sidebar:"docs",previous:{title:"gc",permalink:"/docs/cli/gc"},next:{title:"Init",permalink:"/docs/cli/Init"}},p=[{value:"Command Options",id:"command-options",children:[],level:2},{value:"Providers",id:"providers",children:[{value:"AWS",id:"aws",children:[],level:3},{value:"Azure",id:"azure",children:[],level:3},{value:"Google",id:"google",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"new")," commands create an empty project for AWS, Azure and GCP."),(0,a.kt)("h2",{id:"command-options"},"Command Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc help new\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: gc new [options]\n\nCreate a new project\n\nOptions:\n  -h, --help  display help for command\n")),(0,a.kt)("h2",{id:"providers"},"Providers"),(0,a.kt)("h3",{id:"aws"},"AWS"),(0,a.kt)("p",null,"Flowchart for creating a new AWS project:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-new-aws.svg",alt:"gc-new-aws"})),(0,a.kt)("p",null,"Example of the CLI output:"),(0,a.kt)("div",null,(0,a.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/daLrxnF4qNuuUksSugIBjmi2F/embed?autoplay=true&speed=2&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"600px"}})),(0,a.kt)("h3",{id:"azure"},"Azure"),(0,a.kt)("p",null,"Flowchart for creating a new Azure project:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-new-azure.svg",alt:"gc-new-azure"})),(0,a.kt)("p",null,"Example of the CLI output:"),(0,a.kt)("div",null,(0,a.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/MFw0YToJlA6BpFgUU3LY2LA1D/embed?autoplay=true&speed=2&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"500px"}})),(0,a.kt)("h3",{id:"google"},"Google"),(0,a.kt)("p",null,"Flowchart for creating a new GCP project:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-new-google.svg",alt:"gc-new-google"})),(0,a.kt)("p",null,"Example of the CLI output:"),(0,a.kt)("div",null,(0,a.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/lskiblzLpXqnPsZ5Z1W7Bf2Kd/embed?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"700px"}})))}d.isMDXComponent=!0}}]);