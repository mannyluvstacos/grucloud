(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),c=(n(0),n(238)),o={id:"Init",title:"Init"},a={unversionedId:"cli/Init",id:"cli/Init",isDocsHomePage:!1,title:"Init",description:"The init commands initialises the providers.",source:"@site/docs/cli/Init.md",sourceDirName:"cli",slug:"/cli/Init",permalink:"/docs/cli/Init",version:"current",frontMatter:{id:"Init",title:"Init"},sidebar:"docs",previous:{title:"New Project",permalink:"/docs/cli/New"},next:{title:"Plan Query",permalink:"/docs/cli/PlanQuery"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"init")," commands initialises the providers."),Object(c.b)("p",null,"For instance, in the case of the google provider, this command performs the following actions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"create the project"),Object(c.b)("li",{parentName:"ul"},"setup billing for that project"),Object(c.b)("li",{parentName:"ul"},"enable the api services"),Object(c.b)("li",{parentName:"ul"},"create a service account"),Object(c.b)("li",{parentName:"ul"},"create and save the credential file for this service account"),Object(c.b)("li",{parentName:"ul"},"update the iam policy by binding roles to the service account")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"gc init\n")))}u.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return n?i.a.createElement(m,a(a({ref:t},p),{},{components:n})):i.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<c;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);