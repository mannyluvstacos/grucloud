"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8296],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5044:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],c={id:"ElasticIpAddress",title:"Elastic Ip Address"},i=void 0,l={unversionedId:"aws/resources/EC2/ElasticIpAddress",id:"aws/resources/EC2/ElasticIpAddress",isDocsHomePage:!1,title:"Elastic Ip Address",description:"Provides an Elastic Ip Address to be associated to an EC2 instance",source:"@site/docs/aws/resources/EC2/ElasticIpAddress.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/ElasticIpAddress",permalink:"/docs/aws/resources/EC2/ElasticIpAddress",tags:[],version:"current",frontMatter:{id:"ElasticIpAddress",title:"Elastic Ip Address"},sidebar:"docs",previous:{title:"Table",permalink:"/docs/aws/resources/DynamoDB/Table"},next:{title:"AMI",permalink:"/docs/aws/resources/EC2/Image"}},u=[{value:"Examples",id:"examples",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides an ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html"},"Elastic Ip Address")," to be associated to an EC2 instance"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const ip = provider.EC2.makeElasticIpAddress({\n  name: "myip",\n});\n')),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2/iac.js"},"simple example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js"},"example with internet gateway and routing table"))),(0,s.kt)("h3",{id:"used-by"},"Used By"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/EC2"},"EC2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/NatGateway"},"NatGateway"))))}d.isMDXComponent=!0}}]);