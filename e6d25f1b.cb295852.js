(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{162:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return l}));var t=r(2),o=(r(0),r(170));const a={id:"DnsManagedZone",title:"Dns Managed Zone"},c={id:"google/resources/DNS/DnsManagedZone",isDocsHomePage:!1,title:"Dns Managed Zone",description:"Provides a DNS managed zone and resource record set.",source:"@site/docs/google/resources/DNS/DnsManagedZone.md",permalink:"/docs/google/resources/DNS/DnsManagedZone",sidebar:"someSidebar",previous:{title:"Object",permalink:"/docs/google/resources/storage/GcpObject"},next:{title:"Miscellaneous",permalink:"/docs/google/GoogleMisc"}},i=[{value:"Examples",id:"examples",children:[{value:"Dns managed zone with one record set",id:"dns-managed-zone-with-one-record-set",children:[]},{value:"Example Code",id:"example-code",children:[]}]},{value:"Properties",id:"properties",children:[]}],s={rightToc:i};function l({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a DNS managed zone and resource record set."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"dns-managed-zone-with-one-record-set"},"Dns managed zone with one record set"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const domain = "gcp.grucloud.com";\n\nconst dnsManagedZone = await provider.makeDnsManagedZone({\n  name: "dns-managed-zone",\n  properties: () => ({\n    dnsName: `${domain}.`,\n    recordSet: [\n      {\n        name: `${domain}.`,\n        rrdatas: ["1.2.3.1"],\n        ttl: 86400,\n        type: "A",\n      },\n    ],\n  }),\n});\n')),Object(o.b)("h3",{id:"example-code"},"Example Code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/google/storage/website-https/iac.js#L7"}),"basic example"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://cloud.google.com/dns/docs/reference/v1beta2/managedZones/create"}),"create properties"),"\nand ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://cloud.google.com/dns/docs/reference/v1beta2/resourceRecordSets#resource"}),"recordSet properties")))}l.isMDXComponent=!0},170:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=t,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?o.a.createElement(b,i(i({ref:n},l),{},{components:r})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);