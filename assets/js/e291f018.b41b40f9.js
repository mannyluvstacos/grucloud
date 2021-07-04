(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(8),a=(r(0),r(198)),o={id:"Vpc",title:"Vpc"},p={unversionedId:"aws/resources/EC2/Vpc",id:"aws/resources/EC2/Vpc",isDocsHomePage:!1,title:"Vpc",description:"Provide a Virtual Private Cloud:",source:"@site/docs/aws/resources/EC2/Vpc.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/Vpc",permalink:"/docs/aws/resources/EC2/Vpc",version:"current",frontMatter:{id:"Vpc",title:"Vpc"},sidebar:"docs",previous:{title:"EBS Volume",permalink:"/docs/aws/resources/EC2/Volume"},next:{title:"Cluster",permalink:"/docs/aws/resources/EKS/EksCluster"}},s=[{value:"Examples",id:"examples",children:[{value:"Simple Vpc",id:"simple-vpc",children:[]},{value:"Vpc with Tags",id:"vpc-with-tags",children:[]},{value:"Vpc with DnsHostnames and DnsSupport",id:"vpc-with-dnshostnames-and-dnssupport",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"Used By",id:"used-by",children:[]}],i={toc:s};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provide a Virtual Private Cloud:"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"simple-vpc"},"Simple Vpc"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.ec2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n')),Object(a.b)("h3",{id:"vpc-with-tags"},"Vpc with Tags"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const clusterName = "cluster";\n\nconst vpc = provider.ec2.makeVpc({\n  name: "vpc-eks",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n    Tags: [{ Key: `kubernetes.io/cluster/${clusterName}`, Value: "shared" }],\n  }),\n});\n')),Object(a.b)("h3",{id:"vpc-with-dnshostnames-and-dnssupport"},"Vpc with DnsHostnames and DnsSupport"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const clusterName = "cluster";\n\nconst vpc = provider.ec2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    DnsHostnames: true,\n    DnsSupport: true,\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n')),Object(a.b)("h2",{id:"code-examples"},"Code Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2-vpc/iac.js#L13"},"simple example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/vpc/iac.js"},"module vpc"))),Object(a.b)("h2",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./Subnet"},"Subnet")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./SecurityGroup"},"Security Group")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./InternetGateway"},"Internet Gateway "))))}l.isMDXComponent=!0},198:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return r?c.a.createElement(m,p(p({ref:t},i),{},{components:r})):c.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);