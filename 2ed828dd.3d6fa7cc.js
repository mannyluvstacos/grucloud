(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{133:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return l}));var t=r(2),a=r(6),c=(r(0),r(207)),o={id:"Service",title:"Service"},s={id:"k8s/resources/Service",isDocsHomePage:!1,title:"Service",description:"Provides a Kubernetes Service",source:"@site/docs/k8s/resources/Service.md",permalink:"/docs/k8s/resources/Service",sidebar:"someSidebar",previous:{title:"Secret",permalink:"/docs/k8s/resources/Secret"},next:{title:"Service Account",permalink:"/docs/k8s/resources/ServiceAccount"}},i=[{value:"Examples",id:"examples",children:[{value:"Create a NodePort service for a Deployment",id:"create-a-nodeport-service-for-a-deployment",children:[]},{value:"Create a Headless Service for a StatefulSet",id:"create-a-headless-service-for-a-statefulset",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Listing",id:"listing",children:[]}],p={rightToc:i};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}),"Kubernetes Service")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"create-a-nodeport-service-for-a-deployment"},"Create a NodePort service for a Deployment"),Object(c.b)("p",null,"This example creates a NodePort service for use with a Deployment:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const appLabel = "myLabel";\n\nconst namespace = await provider.makeNamespace({\n  name: "myNamespace",\n});\n\nconst service = await provider.makeService({\n  name: "myService",\n  dependencies: { namespace },\n  properties: () => ({\n    spec: {\n      selector: {\n        app: appLabel,\n      },\n      type: "NodePort",\n      ports: [\n        {\n          protocol: "TCP",\n          port: 80,\n          targetPort: 8080,\n        },\n      ],\n    },\n  }),\n});\n')),Object(c.b)("h3",{id:"create-a-headless-service-for-a-statefulset"},"Create a Headless Service for a StatefulSet"),Object(c.b)("p",null,"This example creates a Headless service for use with a StatefulSet:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const appLabel = "db";\n\nconst namespace = await provider.makeNamespace({\n  name: "myNamespace",\n});\n\nconst service = await provider.makeService({\n  name: "postgres-service",\n  dependencies: { namespace },\n  properties: () => ({\n    spec: {\n      selector: {\n        app: appLabel,\n      },\n      clusterIP: "None", // Headless service\n      ports: [\n        {\n          protocol: "TCP",\n          port: "5432",\n          targetPort: "5432",\n        },\n      ],\n    },\n  }),\n});\n')),Object(c.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/rest-server.js#L129"}),"NodePort service for rest server"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/postgres.js#L144"}),"Headless service for postgres")))),Object(c.b)("h2",{id:"listing"},"Listing"),Object(c.b)("p",null,"The following command lists only the ",Object(c.b)("strong",{parentName:"p"},"Service")," type and services created by GruCloud:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"gc l -t Service --our\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 7 Service from k8s                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                              \u2502 Data                                   \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 cert-manager                      \u2502 metadata:                              \u2502 Yes  \u2502\n\u2502                                   \u2502   name: cert-manager                   \u2502      \u2502\n\u2502                                   \u2502   namespace: cert-manager              \u2502      \u2502\n\u2502                                   \u2502   selfLink: /api/v1/namespaces/cert-m\u2026 \u2502      \u2502\n\u2502                                   \u2502   uid: a6d32acc-800d-4f3a-8b67-d4e222\u2026 \u2502      \u2502\n\u2502                                   \u2502   resourceVersion: 117972              \u2502      \u2502\n\u2502                                   \u2502   creationTimestamp: 2021-03-23T15:36\u2026 \u2502      \u2502\n\u2502                                   \u2502   labels:                              \u2502      \u2502\n\u2502                                   \u2502     app: cert-manager                  \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/component: cont\u2026 \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/instance: cert-\u2026 \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/name: cert-mana\u2026 \u2502      \u2502\n\u2502                                   \u2502   annotations:                         \u2502      \u2502\n\u2502                                   \u2502     CreatedByProvider: k8s             \u2502      \u2502\n\u2502                                   \u2502     ManagedBy: GruCloud                \u2502      \u2502\n\u2502                                   \u2502     Name: cert-manager                 \u2502      \u2502\n\u2502                                   \u2502     stage: dev                         \u2502      \u2502\n\u2502                                   \u2502 spec:                                  \u2502      \u2502\n\u2502                                   \u2502   ports:                               \u2502      \u2502\n\u2502                                   \u2502     - protocol: TCP                    \u2502      \u2502\n\u2502                                   \u2502       port: 9402                       \u2502      \u2502\n\u2502                                   \u2502       targetPort: 9402                 \u2502      \u2502\n\u2502                                   \u2502   selector:                            \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/component: cont\u2026 \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/instance: cert-\u2026 \u2502      \u2502\n\u2502                                   \u2502     app.kubernetes.io/name: cert-mana\u2026 \u2502      \u2502\n\u2502                                   \u2502   clusterIP: 10.100.5.226              \u2502      \u2502\n\u2502                                   \u2502   type: ClusterIP                      \u2502      \u2502\n\u2502                                   \u2502   sessionAffinity: None                \u2502      \u2502\n\u2502                                   \u2502 status:                                \u2502      \u2502\n\u2502                                   \u2502   loadBalancer:                        \u2502      \u2502\n\u2502                                   \u2502                                        \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n")))}l.isMDXComponent=!0},207:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=t,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return r?a.a.createElement(d,s(s({ref:n},p),{},{components:r})):a.a.createElement(d,s({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,o=new Array(c);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);