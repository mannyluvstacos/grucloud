(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(8),a=(t(0),t(241)),l={id:"GlobalForwardingRule",title:"Global Forwarding Rule"},c={unversionedId:"google/resources/compute/GlobalForwardingRule",id:"google/resources/compute/GlobalForwardingRule",isDocsHomePage:!1,title:"Global Forwarding Rule",description:"Provides global forwarding rule needed by the HTTPS load balancer",source:"@site/docs/google/resources/compute/GlobalForwardingRule.md",sourceDirName:"google/resources/compute",slug:"/google/resources/compute/GlobalForwardingRule",permalink:"/docs/google/resources/compute/GlobalForwardingRule",version:"current",frontMatter:{id:"GlobalForwardingRule",title:"Global Forwarding Rule"},sidebar:"docs",previous:{title:"Firewall",permalink:"/docs/google/resources/compute/Firewall"},next:{title:"Https Target Proxy",permalink:"/docs/google/resources/compute/HttpsTargetProxy"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],s={toc:i};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides ",Object(a.b)("a",{parentName:"p",href:"https://console.cloud.google.com/net-services/loadbalancing/frontends/list"},"global forwarding rule")," needed by the HTTPS load balancer"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const bucketName = "mybucketname";\n\nconst sslCertificate = provider.compute.makeSslCertificate({\n  name: "ssl-certificate",\n  properties: () => ({\n    managed: {\n      domains: [domain],\n    },\n  }),\n});\n\nconst myBucket = provider.storage.makeBucket({\n  name: bucketName,\n  properties: () => ({}),\n});\n\nconst backendBucket = provider.compute.makeBackendBucket({\n  name: "backend-bucket",\n  properties: () => ({\n    bucketName,\n  }),\n});\n\nconst urlMap = provider.compute.makeUrlMap({\n  name: "url-map",\n  dependencies: { service: backendBucket },\n  properties: () => ({}),\n});\n\nconst httpsTargetProxy = provider.compute.makeHttpsTargetProxy({\n  name: "https-target-proxy",\n  dependencies: { sslCertificate, urlMap },\n  properties: () => ({}),\n});\n\nconst globalForwardingRule = provider.compute.makeGlobalForwardingRule({\n  name: "global-forwarding-rule",\n  dependencies: { httpsTargetProxy },\n  properties: () => ({}),\n});\n')),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/website-https"},"Https Website"))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/google/storage/website-https/artifacts/diagram-target.svg",alt:"website-https/artifacts/diagram-target.svg"})),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/globalForwardingRules/insert"},"all properties"))),Object(a.b)("h2",{id:"dependencies"},"Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/google/resources/compute/HttpsTargetProxy"},"HttpsTargetProxy"))),Object(a.b)("h2",{id:"list"},"List"),Object(a.b)("p",null,"List all Global Forwarding Rules with the ",Object(a.b)("strong",{parentName:"p"},"GlobalForwardingRule")," type"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t GlobalForwardingRule\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-txt"},'\u2713 google\n  \u2713 Initialising\n  \u2713 Listing 5/5\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 GlobalForwardingRule from google                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                   \u2502 Data                                           \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 global-forwarding-rule \u2502 id: 953550543260874208                         \u2502 Yes  \u2502\n\u2502                        \u2502 creationTimestamp: 2021-06-30T03:44:31.211-07\u2026 \u2502      \u2502\n\u2502                        \u2502 name: global-forwarding-rule                   \u2502      \u2502\n\u2502                        \u2502 description: Managed By GruCloud               \u2502      \u2502\n\u2502                        \u2502 IPAddress: 34.149.122.91                       \u2502      \u2502\n\u2502                        \u2502 IPProtocol: TCP                                \u2502      \u2502\n\u2502                        \u2502 portRange: 443-443                             \u2502      \u2502\n\u2502                        \u2502 target: https://www.googleapis.com/compute/v1\u2026 \u2502      \u2502\n\u2502                        \u2502 selfLink: https://www.googleapis.com/compute/\u2026 \u2502      \u2502\n\u2502                        \u2502 loadBalancingScheme: EXTERNAL                  \u2502      \u2502\n\u2502                        \u2502 networkTier: PREMIUM                           \u2502      \u2502\n\u2502                        \u2502 labelFingerprint: 42WmSpB8rSM=                 \u2502      \u2502\n\u2502                        \u2502 fingerprint: 3GGsVKhNuO4=                      \u2502      \u2502\n\u2502                        \u2502 kind: compute#forwardingRule                   \u2502      \u2502\n\u2502                        \u2502                                                \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: google\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 google                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 GlobalForwardingR\u2026 \u2502 global-forwarding-rule                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 5 types, 1 provider\nCommand "gc l -t GlobalForwardingRule" executed in 4s\n')))}p.isMDXComponent=!0},241:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},g=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,b=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);