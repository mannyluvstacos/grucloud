(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{225:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),l=(r(0),r(241)),o={id:"ClusterRoleBinding",title:"Cluster Role Binding"},i={unversionedId:"k8s/resources/ClusterRoleBinding",id:"k8s/resources/ClusterRoleBinding",isDocsHomePage:!1,title:"Cluster Role Binding",description:"Provides a Kubernetes Cluster Role Binding",source:"@site/docs/k8s/resources/ClusterRoleBinding.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/ClusterRoleBinding",permalink:"/docs/k8s/resources/ClusterRoleBinding",version:"current",frontMatter:{id:"ClusterRoleBinding",title:"Cluster Role Binding"},sidebar:"docs",previous:{title:"Cluster Role",permalink:"/docs/k8s/resources/ClusterRole"},next:{title:"ConfigMap",permalink:"/docs/k8s/resources/ConfigMap"}},c=[{value:"Examples",id:"examples",children:[{value:"Create a Cluster Role Binding",id:"create-a-cluster-role-binding",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Listing",id:"listing",children:[]}],s={toc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Provides a ",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes Cluster Role Binding")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"create-a-cluster-role-binding"},"Create a Cluster Role Binding"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'const clusterRoleBinding = provider.makeClusterRoleBinding({\n  name: "aws-load-balancer-controller-rolebinding",\n  properties: () => ({\n    metadata: {\n      labels: {\n        "app.kubernetes.io/name": "aws-load-balancer-controller",\n      },\n    },\n    roleRef: {\n      apiGroup: "rbac.authorization.k8s.io",\n      kind: "ClusterRole",\n      name: "aws-load-balancer-controller-role",\n    },\n    subjects: [\n      {\n        kind: "ServiceAccount",\n        name: "aws-load-balancer-controller",\n        namespace: "kube-system",\n      },\n    ],\n  }),\n});\n')),Object(l.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/k8s/aws-load-balancer/resources.js#L505"},"Cluster Role Binding for the aws load balancer"))),Object(l.b)("h2",{id:"used-by"},"Used By"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"./ClusterRole"},"ClusterRole"))),Object(l.b)("h2",{id:"listing"},"Listing"),Object(l.b)("p",null,"The following commands list the ",Object(l.b)("strong",{parentName:"p"},"ClusterRoleBinding")," type:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types ClusterRoleBinding\n")),Object(l.b)("p",null,"Short version:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t ClusterRoleBinding\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"")))}u.isMDXComponent=!0},241:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return r?a.a.createElement(m,i(i({ref:n},s),{},{components:r})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);