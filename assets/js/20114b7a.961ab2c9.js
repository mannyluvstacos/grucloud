(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{201:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var r=a.a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:r},i),{},{components:n})):a.a.createElement(m,c({ref:r},i))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return i}));var t=n(3),a=(n(0),n(201));const o={id:"Role",title:"Role"},l={unversionedId:"k8s/resources/Role",id:"k8s/resources/Role",isDocsHomePage:!1,title:"Role",description:"Provides a Kubernetes Role",source:"@site/docs/k8s/resources/Role.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/Role",permalink:"/docs/k8s/resources/Role",version:"current",frontMatter:{id:"Role",title:"Role"},sidebar:"docs",previous:{title:"Persistent Volume Claim",permalink:"/docs/k8s/resources/PersistentVolumeClaim"},next:{title:"Role Binding",permalink:"/docs/k8s/resources/RoleBinding"}},c=[{value:"Examples",id:"examples",children:[{value:"Create a Role",id:"create-a-role",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Listing",id:"listing",children:[]}],s={toc:c};function i({components:e,...r}){return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides a ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes Role")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"create-a-role"},"Create a Role"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const role = provider.makeRole({\n  name: "aws-load-balancer-controller-leader-election-role",\n  properties: () => ({\n    metadata: {\n      labels: {\n        "app.kubernetes.io/name": "aws-load-balancer-controller",\n      },\n      namespace: "kube-system",\n    },\n    rules: [\n      {\n        apiGroups: [""],\n        resources: ["configmaps"],\n        verbs: ["create"],\n      },\n      {\n        apiGroups: [""],\n        resourceNames: ["aws-load-balancer-controller-leader"],\n        resources: ["configmaps"],\n        verbs: ["get", "update", "patch"],\n      },\n    ],\n  }),\n});\n')),Object(a.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/k8s/aws-load-balancer/resources.js#L373"},"Role for the aws load balancer"))),Object(a.b)("h2",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./RoleBinding"},"RoleBinding"))),Object(a.b)("h2",{id:"listing"},"Listing"),Object(a.b)("p",null,"The following commands list the ",Object(a.b)("strong",{parentName:"p"},"Role")," type:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types Role\n")),Object(a.b)("p",null,"Short version:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Role\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"")))}i.isMDXComponent=!0}}]);