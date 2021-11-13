(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?o.a.createElement(b,c(c({ref:n},u),{},{components:r})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),o=(r(0),r(237));const a={id:"IamBinding",title:"IAM Binding"},i={unversionedId:"google/resources/IAM/IamBinding",id:"google/resources/IAM/IamBinding",isDocsHomePage:!1,title:"IAM Binding",description:"Provides a IAM Binding for a project.",source:"@site/docs/google/resources/IAM/IamBinding.md",sourceDirName:"google/resources/IAM",slug:"/google/resources/IAM/IamBinding",permalink:"/docs/google/resources/IAM/IamBinding",version:"current",frontMatter:{id:"IamBinding",title:"IAM Binding"},sidebar:"docs",previous:{title:"Dns Managed Zone",permalink:"/docs/google/resources/DNS/DnsManagedZone"},next:{title:"IAM Member",permalink:"/docs/google/resources/IAM/IamMember"}},c=[{value:"Examples",id:"examples",children:[{value:"Bind a user to a role",id:"bind-a-user-to-a-role",children:[]},{value:"Bind a service account to a role",id:"bind-a-service-account-to-a-role",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"Used By",id:"used-by",children:[]}]}],l={toc:c};function u({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a IAM Binding for a project."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"bind-a-user-to-a-role"},"Bind a user to a role"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamBinding = provider.iam.makeBinding({\n  name: "roles/editor",\n  properties: () => ({\n    members: ["user:jane@example.com"],\n  }),\n});\n')),Object(o.b)("h3",{id:"bind-a-service-account-to-a-role"},"Bind a service account to a role"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const serviceAccount = provider.iam.makeServiceAccount({\n  name: "sa",\n  properties: () => ({\n    accountId: "sa",\n  }),\n});\n\nconst iamBinding = provider.iam.makeBinding({\n  name: "roles/editor",\n  dependencies: { serviceAccounts: [serviceAccount] },\n  properties: ({}) => ({}),\n});\n')),Object(o.b)("h3",{id:"example-code"},"Example Code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/iam/iam-binding/iac.js#L7"},"basic example"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ServiceAccount"},"ServiceAccount"))))}u.isMDXComponent=!0}}]);