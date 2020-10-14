(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(162));const c={id:"S3Object",title:"S3 Object"},o={id:"aws/resources/S3/S3Object",isDocsHomePage:!1,title:"S3 Object",description:"Manages a S3 Object",source:"@site/docs/aws/resources/S3/S3Object.md",permalink:"/docs/aws/resources/S3/S3Object",sidebar:"someSidebar",previous:{title:"S3 Bucket",permalink:"/docs/aws/resources/S3/S3Bucket"},next:{title:"Miscellaneous",permalink:"/docs/aws/AwsMisc"}},i=[{value:"Bucket Attributes",id:"bucket-attributes",children:[{value:"Basic",id:"basic",children:[]}]},{value:"Example Code",id:"example-code",children:[]},{value:"Properties",id:"properties",children:[]}],s={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/s3/index.html"}),"S3 Object")),Object(a.b)("h2",{id:"bucket-attributes"},"Bucket Attributes"),Object(a.b)("h3",{id:"basic"},"Basic"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const s3Bucket = await provider.makeS3Bucket({\n  name: `myBucket`,\n  properties: () => ({}),\n});\n\nconst s3Object = await provider.makeS3Object({\n  name: `file-test`,\n  dependencies: { bucket: s3Bucket },\n  properties: () => ({\n    ACL: "public-read",\n    ContentType: "text/plain",\n    ServerSideEncryption: "AES256",\n    Tagging: "key1=value1&key2=value2",\n    source: path.join(process.cwd(), "examples/aws/s3/fixtures/testFile.txt"),\n  }),\n});\n')),Object(a.b)("h2",{id:"example-code"},"Example Code"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/aws/s3/iac.js"}),"simple example"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property"}),"properties list"))))}p.isMDXComponent=!0},162:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);