"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9434],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=c,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(v,a(a({ref:r},l),{},{components:t})):n.createElement(v,a({ref:r},l))}));function d(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},49257:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=t(87462),c=t(63366),o=(t(67294),t(3905)),a=["components"],i={id:"ServiceAccount",title:"Service Account"},s=void 0,u={unversionedId:"k8s/resources/ServiceAccount",id:"k8s/resources/ServiceAccount",isDocsHomePage:!1,title:"Service Account",description:"Provides a Kubernetes Service Account",source:"@site/docs/k8s/resources/ServiceAccount.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/ServiceAccount",permalink:"/docs/k8s/resources/ServiceAccount",tags:[],version:"current",frontMatter:{id:"ServiceAccount",title:"Service Account"},sidebar:"docs",previous:{title:"Service",permalink:"/docs/k8s/resources/Service"},next:{title:"StatefulSet",permalink:"/docs/k8s/resources/StatefulSet"}},l=[{value:"Examples",id:"examples",children:[{value:"Create a Service Account",id:"create-a-service-account",children:[],level:3}],level:2},{value:"Listing",id:"listing",children:[],level:2}],p={toc:l};function f(e){var r=e.components,t=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"Kubernetes Service Account")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-a-service-account"},"Create a Service Account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const serviceAccount = provider.makeServiceAccount({\n  name: "aws-load-balancer-controller",\n  dependencies: { role: resources.roleLoadBalancer },\n  properties: ({ dependencies: { role } }) => ({\n    metadata: {\n      annotations: {\n        "eks.amazonaws.com/role-arn": role?.live?.Arn,\n      },\n      labels: {\n        "app.kubernetes.io/component": "controller",\n        "app.kubernetes.io/name": "aws-load-balancer-controller",\n      },\n      namespace: "kube-system",\n    },\n  }),\n});\n')),(0,o.kt)("h2",{id:"listing"},"Listing"),(0,o.kt)("p",null,"The following command lists the ",(0,o.kt)("strong",{parentName:"p"},"ServiceAccount")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc list --types ServiceAccount\n")))}f.isMDXComponent=!0}}]);