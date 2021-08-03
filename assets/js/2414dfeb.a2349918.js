(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{201:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),c=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||n;return r?c.a.createElement(d,i(i({ref:t},u),{},{components:r})):c.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),c=(r(0),r(201));const n={id:"AwsExamples",title:"Aws Examples"},s={unversionedId:"aws/AwsExamples",id:"aws/AwsExamples",isDocsHomePage:!1,title:"Aws Examples",description:"Simple Use Case",source:"@site/docs/aws/AwsExamples.md",sourceDirName:"aws",slug:"/aws/AwsExamples",permalink:"/docs/aws/AwsExamples",version:"current",frontMatter:{id:"AwsExamples",title:"Aws Examples"},sidebar:"docs",previous:{title:"Kubernetes Getting Started",permalink:"/docs/k8s/K8sGettingStarted"},next:{title:"Google Examples",permalink:"/docs/google/GoogleExamples"}},i=[{value:"Simple Use Case",id:"simple-use-case",children:[{value:"EC2",id:"ec2",children:[]},{value:"IAM",id:"iam",children:[]},{value:"S3",id:"s3",children:[]},{value:"Route53",id:"route53",children:[]}]},{value:"Hybrid use cases",id:"hybrid-use-cases",children:[{value:"HTTPS Website",id:"https-website",children:[]},{value:"Kops",id:"kops",children:[]}]}],o={toc:i};function u({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"simple-use-case"},"Simple Use Case"),Object(c.b)("h3",{id:"ec2"},"EC2"),Object(c.b)("h4",{id:"ec2elasticipkeypair"},Object(c.b)("a",{parentName:"h4",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ec2"},"EC2/ElasticIp/KeyPair")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/ec2/artifacts/diagram-target.svg",alt:"EC2/ElasticIp/KeyPair"})),Object(c.b)("h4",{id:"ec2-vpc"},Object(c.b)("a",{parentName:"h4",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ec2-vpc"},"EC2-VPC")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/ec2-vpc/artifacts/diagram-target.svg",alt:"EC2-VPC"})),Object(c.b)("h3",{id:"iam"},"IAM"),Object(c.b)("h4",{id:"iam-policy"},Object(c.b)("a",{parentName:"h4",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/iam-policy"},"IAM Policy")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/iam-policy/artifacts/diagram-target.svg",alt:"IAM Policy"})),Object(c.b)("h3",{id:"s3"},"S3"),Object(c.b)("h4",{id:"s3-1"},Object(c.b)("a",{parentName:"h4",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/s3-simple"},"S3")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/s3-simple/artifacts/diagram-target.svg",alt:"S3"})),Object(c.b)("h3",{id:"route53"},"Route53"),Object(c.b)("h4",{id:"route53record"},Object(c.b)("a",{parentName:"h4",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/route53/dns-validation-record-txt"},"Route53Record")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/route53/dns-validation-record-txt/artifacts/diagram-target.svg",alt:"Route53Record"})),Object(c.b)("h2",{id:"hybrid-use-cases"},"Hybrid use cases"),Object(c.b)("h3",{id:"https-website"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/website-https"},"HTTPS Website")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/website-https/artifacts/diagram-target.svg",alt:"HTTPS Website"})),Object(c.b)("h3",{id:"kops"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/kops"},"Kops")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/aws/kops/artifacts/diagram-target.svg",alt:"KopsDiagramTarget"})))}u.isMDXComponent=!0}}]);