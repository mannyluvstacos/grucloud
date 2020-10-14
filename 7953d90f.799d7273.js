(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),c=(r(0),r(162));const o={id:"ServiceAccount",title:"Service Account"},a={id:"google/resources/IAM/ServiceAccount",isDocsHomePage:!1,title:"Service Account",description:"Provides a Service Account:",source:"@site/docs/google/resources/IAM/ServiceAccount.md",permalink:"/docs/google/resources/IAM/ServiceAccount",sidebar:"someSidebar",previous:{title:"IAM Member",permalink:"/docs/google/resources/IAM/IamMember"},next:{title:"Miscellaneous",permalink:"/docs/google/GoogleMisc"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]}],l={rightToc:i};function u({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/compute/docs/access/service-accounts"}),"Service Account"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const sa = await provider.makeServiceAccount({\n  name: "sa",\n  properties: () => ({\n    accountId: "sa-dev",\n    displayName: "SA dev",\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/google/vm/iac.js"}),"basic example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/create"}),"all properties"))),Object(c.b)("h3",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"../Compute/VmInstance"}),"Vm Instance")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./IamMember"}),"IamMember"))))}u.isMDXComponent=!0},162:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return r?c.a.createElement(d,i(i({ref:t},u),{},{components:r})):c.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);