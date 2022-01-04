"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7338],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"Route",title:"Route"},u=void 0,s={unversionedId:"aws/resources/EC2/Route",id:"aws/resources/EC2/Route",isDocsHomePage:!1,title:"Route",description:"Create a route and associate it to an internet gateway or NAT gateway.",source:"@site/docs/aws/resources/EC2/Route.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/Route",permalink:"/docs/aws/resources/EC2/Route",tags:[],version:"current",frontMatter:{id:"Route",title:"Route"},sidebar:"docs",previous:{title:"Network Access Control List",permalink:"/docs/aws/resources/EC2/NetworkAcl"},next:{title:"Route Table",permalink:"/docs/aws/resources/EC2/RouteTable"}},l=[{value:"Example code",id:"example-code",children:[{value:"Attach a route to an internet gateway",id:"attach-a-route-to-an-internet-gateway",children:[],level:3},{value:"Attach a route to a NAT gateway",id:"attach-a-route-to-a-nat-gateway",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a route and associate it to an internet gateway or NAT gateway."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("h3",{id:"attach-a-route-to-an-internet-gateway"},"Attach a route to an internet gateway"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst ig = provider.EC2.makeInternetGateway({\n  name: "ig",\n  dependencies: () => ({ vpc }),\n});\n\nconst subnet = provider.EC2.makeSubnet({\n  name: "subnet",\n  dependencies: () => ({ vpc }),\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n  }),\n});\n\nconst routeTable = provider.EC2.makeRouteTable({\n  name: "route-table",\n  dependencies: () => ({ vpc, subnets: [subnet] }),\n});\n\nconst route = provider.EC2.makeRoute({\n  dependencies: () => ({ routeTable, ig }),\n});\n')),(0,o.kt)("h3",{id:"attach-a-route-to-a-nat-gateway"},"Attach a route to a NAT gateway"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst subnetPublic = provider.EC2.makeSubnet({\n  name: "subnet-public",\n  dependencies: () => ({ vpc }),\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n  }),\n});\n\nconst eip = provider.EC2.makeElasticIpAddress({\n  name: "myip",\n});\n\nconst natGateway = provider.EC2.makeNatGateway({\n  name: "nat-gateway",\n  dependencies: () => ({ subnet: subnetPublic, eip }),\n});\n\nconst subnetPrivate = provider.EC2.makeSubnet({\n  name: "subnet-private",\n  dependencies: () => ({ vpc }),\n  properties: () => ({\n    CidrBlock: "10.1.1.1/24",\n  }),\n});\n\nconst routeTablePrivate = provider.EC2.makeRouteTable({\n  name: "route-table-private",\n  dependencies: () => ({ vpc, subnets: [subnetPrivate] }),\n});\n\nconst routeNat = provider.EC2.makeRoute({\n  dependencies: () => ({ routeTable: routeTablePrivate, natGateway }),\n});\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js"},"simple example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/eks/iac.js"},"EKS"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/RouteTable"},"RouteTable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/InternetGateway"},"InternetGateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/NatGateway"},"NatGateway"))))}d.isMDXComponent=!0}}]);