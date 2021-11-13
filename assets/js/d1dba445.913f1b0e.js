(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(237));const a={id:"Route53Domain",title:"Route53 Domains"},c={unversionedId:"aws/resources/Route53Domain/Route53Domain",id:"aws/resources/Route53Domain/Route53Domain",isDocsHomePage:!1,title:"Route53 Domains",description:"Provides a Route53 Domain.",source:"@site/docs/aws/resources/Route53Domain/Route53Domain.md",sourceDirName:"aws/resources/Route53Domain",slug:"/aws/resources/Route53Domain/Route53Domain",permalink:"/docs/aws/resources/Route53Domain/Route53Domain",version:"current",frontMatter:{id:"Route53Domain",title:"Route53 Domains"},sidebar:"docs",previous:{title:"Route53 Record",permalink:"/docs/aws/resources/Route53/Route53Record"},next:{title:"S3 Bucket",permalink:"/docs/aws/resources/S3/S3Bucket"}},i=[{value:"Example",id:"example",children:[]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Used By",id:"used-by",children:[]}],u={toc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a Route53 Domain."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"By using a ",Object(o.b)("em",{parentName:"p"},"route53 domain")," as a dependency to an ",Object(o.b)("em",{parentName:"p"},"hostedZone"),", the nameservers returns by the hosted zone will be used to update the route53 domain's nameserver."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const domainName = "mydomain.com";\nconst domain = provider.Route53Domains.useDomain({\n  name: domainName,\n});\n\nconst hostedZone = provider.Route53.makeHostedZone({\n  name: `${domainName}.`,\n  dependencies: () => ({ domain }),\n});\n')),Object(o.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js"},"https static website "))),Object(o.b)("h2",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../Route53/Route53HostedZone"},"HostedZone"))))}s.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);