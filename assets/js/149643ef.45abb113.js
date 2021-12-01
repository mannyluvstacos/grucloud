"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6166],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),g=s,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function g(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5686:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var t=r(7462),s=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"Ingress",title:"Ingress"},c=void 0,l={unversionedId:"k8s/resources/Ingress",id:"k8s/resources/Ingress",isDocsHomePage:!1,title:"Ingress",description:"Provides a Kubernetes Ingress",source:"@site/docs/k8s/resources/Ingress.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/Ingress",permalink:"/docs/k8s/resources/Ingress",tags:[],version:"current",frontMatter:{id:"Ingress",title:"Ingress"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/k8s/resources/Deployment"},next:{title:"Namespace",permalink:"/docs/k8s/resources/Namespace"}},u=[{value:"Examples",id:"examples",children:[{value:"Create a Ingress for minikube",id:"create-a-ingress-for-minikube",children:[],level:3}],level:2},{value:"Source Code Examples",id:"source-code-examples",children:[],level:2},{value:"Listing",id:"listing",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2}],p={toc:u};function m(e){var n=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"create-a-ingress-for-minikube"},"Create a Ingress for minikube"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createIngress = async ({\n  provider,\n  config: { restServer, ui },\n  resources: { namespace, serviceWebServer, serviceRestServer },\n}) => {\n  return provider.makeIngress({\n    name: "ingress",\n    dependencies: {\n      namespace,\n      serviceWebServer,\n      serviceRestServer,\n    },\n    properties: () => ({\n      metadata: {\n        annotations: {\n          "nginx.ingress.kubernetes.io/use-regex": "true",\n        },\n      },\n      spec: {\n        rules: [\n          {\n            http: {\n              paths: [\n                {\n                  path: "/api/.*",\n                  pathType: "Prefix",\n                  backend: {\n                    service: {\n                      name: restServer.serviceName,\n                      port: {\n                        number: restServer.port,\n                      },\n                    },\n                  },\n                },\n              ],\n            },\n          },\n          {\n            http: {\n              paths: [\n                {\n                  path: "/.*",\n                  pathType: "Prefix",\n                  backend: {\n                    service: {\n                      name: ui.serviceName,\n                      port: {\n                        number: ui.port,\n                      },\n                    },\n                  },\n                },\n              ],\n            },\n          },\n        ],\n      },\n    }),\n  });\n')),(0,a.kt)("h2",{id:"source-code-examples"},"Source Code Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/minikube/ingress.js#L14"},"ingress on minikube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/eks-lbc/eksIngress.js#L15"},"ingress on EKS"))),(0,a.kt)("h2",{id:"listing"},"Listing"),(0,a.kt)("p",null,"The following command list only the ",(0,a.kt)("strong",{parentName:"p"},"Ingress")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Ingress\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 Ingress from k8s                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name     \u2502 Data                                                                                    \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ingress  \u2502 metadata:                                                                               \u2502 Yes  \u2502\n\u2502          \u2502   name: ingress                                                                         \u2502      \u2502\n\u2502          \u2502   namespace: default                                                                    \u2502      \u2502\n\u2502          \u2502   selfLink: /apis/networking.k8s.io/v1beta1/namespaces/default/ingresses/ingress        \u2502      \u2502\n\u2502          \u2502   uid: 03fe436f-8ae8-4fbe-b592-917f18d296ad                                             \u2502      \u2502\n\u2502          \u2502   resourceVersion: 132466                                                               \u2502      \u2502\n\u2502          \u2502   generation: 1                                                                         \u2502      \u2502\n\u2502          \u2502   creationTimestamp: 2021-03-23T15:36:28Z                                               \u2502      \u2502\n\u2502          \u2502   annotations:                                                                          \u2502      \u2502\n\u2502          \u2502     CreatedByProvider: k8s                                                              \u2502      \u2502\n\u2502          \u2502     ManagedBy: GruCloud                                                                 \u2502      \u2502\n\u2502          \u2502     Name: ingress                                                                       \u2502      \u2502\n\u2502          \u2502     alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:eu-west-2:840541460064:cert\u2026 \u2502      \u2502\n\u2502          \u2502     alb.ingress.kubernetes.io/listen-ports: [{"HTTPS":443}, {"HTTP":80}]                \u2502      \u2502\n\u2502          \u2502     alb.ingress.kubernetes.io/scheme: internet-facing                                   \u2502      \u2502\n\u2502          \u2502     kubernetes.io/ingress.class: alb                                                    \u2502      \u2502\n\u2502          \u2502     stage: dev                                                                          \u2502      \u2502\n\u2502          \u2502   finalizers:                                                                           \u2502      \u2502\n\u2502          \u2502     - "ingress.k8s.aws/resources"                                                       \u2502      \u2502\n\u2502          \u2502 spec:                                                                                   \u2502      \u2502\n\u2502          \u2502   rules:                                                                                \u2502      \u2502\n\u2502          \u2502     - http:                                                                             \u2502      \u2502\n\u2502          \u2502         paths:                                                                          \u2502      \u2502\n\u2502          \u2502           - path: /api/*                                                                \u2502      \u2502\n\u2502          \u2502             pathType: Prefix                                                            \u2502      \u2502\n\u2502          \u2502             backend:                                                                    \u2502      \u2502\n\u2502          \u2502               serviceName: rest                                                         \u2502      \u2502\n\u2502          \u2502               servicePort: 9000                                                         \u2502      \u2502\n\u2502          \u2502     - http:                                                                             \u2502      \u2502\n\u2502          \u2502         paths:                                                                          \u2502      \u2502\n\u2502          \u2502           - path: /*                                                                    \u2502      \u2502\n\u2502          \u2502             pathType: Prefix                                                            \u2502      \u2502\n\u2502          \u2502             backend:                                                                    \u2502      \u2502\n\u2502          \u2502               serviceName: web                                                          \u2502      \u2502\n\u2502          \u2502               servicePort: 80                                                           \u2502      \u2502\n\u2502          \u2502 status:                                                                                 \u2502      \u2502\n\u2502          \u2502   loadBalancer:                                                                         \u2502      \u2502\n\u2502          \u2502     ingress:                                                                            \u2502      \u2502\n\u2502          \u2502       - hostname: k8s-default-ingress-e514cce9f1-51015254.eu-west-2.elb.amazonaws.com   \u2502      \u2502\n\u2502          \u2502                                                                                         \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Ingress            \u2502 ingress                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t Ingress" executed in 4s\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./Namespace"},"Namespace"))))}m.isMDXComponent=!0}}]);