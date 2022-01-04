"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1357],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],l={id:"Apply",title:"Apply"},c=void 0,i={unversionedId:"cli/Apply",id:"cli/Apply",isDocsHomePage:!1,title:"Apply",description:"The apply commands effectively deploys the resources. It first finds out which resources has to be deployed by running the plan command. The user is prompted to confirm the plan.",source:"@site/docs/cli/Apply.md",sourceDirName:"cli",slug:"/cli/Apply",permalink:"/docs/cli/Apply",tags:[],version:"current",frontMatter:{id:"Apply",title:"Apply"},sidebar:"docs",previous:{title:"Plan",permalink:"/docs/cli/Plan"},next:{title:"List Resources",permalink:"/docs/cli/List"}},s=[{value:"Command",id:"command",children:[],level:2},{value:"Screencast",id:"screencast",children:[],level:2},{value:"Command options",id:"command-options",children:[{value:"alias",id:"alias",children:[],level:3},{value:"force",id:"force",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"apply")," commands effectively deploys the resources. It first finds out which resources has to be deployed by running the ",(0,a.kt)("strong",{parentName:"p"},"plan")," command. The user is prompted to confirm the plan."),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc apply\n")),(0,a.kt)("h2",{id:"screencast"},"Screencast"),(0,a.kt)("div",null,(0,a.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/fSjitJBdZt7qoIGPbIemGk3rq/embed?autoplay=true&speed=2&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"900px"}})),(0,a.kt)("h2",{id:"command-options"},"Command options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc help apply\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: gc apply|a [options]\n\nApply the plan, a.k.a deploy the resources\n\nOptions:\n  -f, --force  force deploy, will not prompt user\n  -h, --help   display help for command\n")),(0,a.kt)("h3",{id:"alias"},"alias"),(0,a.kt)("p",null,"The command alias is ",(0,a.kt)("em",{parentName:"p"},"a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc a\n")),(0,a.kt)("h3",{id:"force"},"force"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"force")," option to not prompt the user to apply the plan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gc apply --force\n")))}d.isMDXComponent=!0}}]);