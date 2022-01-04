"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6040],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||i[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],u={id:"K8sModules",title:"Kubernetes Modules"},l=void 0,c={unversionedId:"k8s/K8sModules",id:"k8s/K8sModules",isDocsHomePage:!1,title:"Kubernetes Modules",description:"A Module is a collection of resources packaged with npm, the node package manager. These modules can be imported and be used in your project:",source:"@site/docs/k8s/K8sModules.md",sourceDirName:"k8s",slug:"/k8s/K8sModules",permalink:"/docs/k8s/K8sModules",tags:[],version:"current",frontMatter:{id:"K8sModules",title:"Kubernetes Modules"}},p=[],i={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Module is a collection of resources packaged with ",(0,a.kt)("strong",{parentName:"p"},"npm"),", the node package manager. These modules can be imported and be used in your project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-cert-manager"},"@grucloud/module-k8s-cert-manager"),": provides a set of kubernetes resources to manage SSL certificates, a dependency of the ",(0,a.kt)("em",{parentName:"li"},"Amazon Load Balancer Controller"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-aws-load-balancer"},"@grucloud/module-k8s-load-balancer"),": Automates the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"Amazon Load Balancer Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-postgres"},"@grucloud/module-k8s-postgres"),": Defines resources to setup a ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgres")," database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-redis"},"@grucloud/module-k8s-redis"),": Defines resources to setup ",(0,a.kt)("a",{parentName:"li",href:"https://redis.io/"},"Redis"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-web-ui-dashboard"},"@grucloud/module-k8s-web-ui-dashboard"),": Setup the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Web Ui Dashboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-prometheus"},"@grucloud/module-k8s-prometheus"),": Monitoring with ",(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@grucloud/module-k8s-crunchy-postgres"},"@grucloud/module-k8s-crunchy-postgres"),": Manages the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CrunchyData/postgres-operator"},"Crunchy Data Postgres Operator"))),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./K8sExamples"},"k8s examples")," how on to consume these modules in your project."))}m.isMDXComponent=!0}}]);