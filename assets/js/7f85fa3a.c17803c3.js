(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{161:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return o})),t.d(r,"default",(function(){return s}));var n=t(3),c=(t(0),t(237));const a={id:"SecurityGroup",title:"Security Group"},u={unversionedId:"aws/resources/EC2/SecurityGroup",id:"aws/resources/EC2/SecurityGroup",isDocsHomePage:!1,title:"Security Group",description:"Create a security group, used to restrict network access to the EC2 instances.",source:"@site/docs/aws/resources/EC2/SecurityGroup.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/SecurityGroup",permalink:"/docs/aws/resources/EC2/SecurityGroup",version:"current",frontMatter:{id:"SecurityGroup",title:"Security Group"},sidebar:"docs",previous:{title:"Route Table Association",permalink:"/docs/aws/resources/EC2/RouteTableAssociation"},next:{title:"SecurityGroupRuleEgress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleEgress"}},o=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],i={toc:o};function s({components:e,...r}){return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Create a security group, used to restrict network access to the EC2 instances."),Object(c.b)("p",null,"Add new ingress and egress rules with ",Object(c.b)("a",{parentName:"p",href:"./SecurityGroupRuleIngress"},"SecurityGroupRuleIngress")," and ",Object(c.b)("a",{parentName:"p",href:"./SecurityGroupRuleEgress"},"SecurityGroupRuleEgress")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const sg = provider.EC2.makeSecurityGroup({\n  name: "securityGroup",\n  dependencies: () => ({ vpc }),\n  properties: () => ({\n    Description: "Security Group SSH",\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js#L26"},"ec2-vpc"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Vpc"},"Vpc"))),Object(c.b)("h3",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./EC2"},"EC2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./SecurityGroupRuleIngress"},"SecurityGroupRuleIngress")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./SecurityGroupRuleEgress"},"SecurityGroupRuleEgress"))))}s.isMDXComponent=!0},237:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return y}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),p=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},d=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,y=l["".concat(u,".").concat(d)]||l[d]||b[d]||a;return t?c.a.createElement(y,o(o({ref:r},s),{},{components:t})):c.a.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,u=new Array(a);u[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var s=2;s<a;s++)u[s]=t[s];return c.a.createElement.apply(null,u)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);