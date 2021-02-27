(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(187)),i={id:"EksCluster",title:"Cluster"},c={id:"aws/resources/EKS/EksCluster",isDocsHomePage:!1,title:"Cluster",description:"Provides an EKS Cluster.",source:"@site/docs/aws/resources/EKS/EksCluster.md",permalink:"/docs/aws/resources/EKS/EksCluster",sidebar:"someSidebar",previous:{title:"EBS Volume",permalink:"/docs/aws/resources/EC2/Volume"},next:{title:"Node Group",permalink:"/docs/aws/resources/EKS/EksNodeGroup"}},s=[{value:"Examples",id:"examples",children:[{value:"Create a cluster",id:"create-a-cluster",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://aws.amazon.com/eks"}),"EKS Cluster"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"create-a-cluster"},"Create a cluster"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const iamPolicyEKSCluster = await provider.useIamPolicyReadOnly({\n  name: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",\n});\n\nconst role = await provider.makeIamRole({\n  name: "eks",\n  dependencies: { policies: [iamPolicyEKSCluster] },\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Effect: "Allow",\n          Principal: {\n            Service: "eks.amazonaws.com",\n          },\n          Action: "sts:AssumeRole",\n        },\n      ],\n    },\n  }),\n});\n\nconst vpc = await provider.makeVpc({\n  name: "vpc-eks",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\nconst ig = await provider.makeInternetGateway({\n  name: "ig-eks",\n  dependencies: { vpc },\n});\n\nconst subnetPublic = await provider.makeSubnet({\n  name: "subnet-public",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n    AvailabilityZone: "eu-west-2a",\n  }),\n});\n\nconst subnetPrivate = await provider.makeSubnet({\n  name: "subnet-private",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.1.1/24",\n    AvailabilityZone: "eu-west-2b",\n  }),\n});\n\nconst routeTablePublic = await provider.makeRouteTables({\n  name: "route-table-public",\n  dependencies: { vpc, subnet: subnetPublic },\n});\n\nconst routeIg = await provider.makeRoute({\n  name: "route-ig-eks",\n  dependencies: { routeTable: routeTablePublic, ig },\n});\n\nconst eip = await provider.makeElasticIpAddress({\n  name: "ip-eks",\n});\n\nconst natGateway = await provider.makeNatGateway({\n  name: "nat-gateway-eks",\n  dependencies: { subnet: subnetPublic, eip },\n});\n\nconst routeTablePrivate = await provider.makeRouteTables({\n  name: "route-table-private",\n  dependencies: { vpc, subnet: subnetPrivate },\n});\n\nconst routeNat = await provider.makeRoute({\n  name: "route-nat",\n  dependencies: { routeTable: routeTablePrivate, natGateway },\n});\n\nconst sg = await provider.makeSecurityGroup({\n  name: "security-group-public-eks",\n  dependencies: { vpc },\n  properties: () => ({\n    //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createSecurityGroup-property\n    create: {\n      Description: "SG for public subnet",\n    },\n    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property\n    ingress: {\n      IpPermissions: [\n        {\n          FromPort: 22,\n          IpProtocol: "tcp",\n          IpRanges: [\n            {\n              CidrIp: "0.0.0.0/0",\n            },\n          ],\n          Ipv6Ranges: [\n            {\n              CidrIpv6: "::/0",\n            },\n          ],\n          ToPort: 22,\n        },\n        {\n          FromPort: -1,\n          IpProtocol: "icmp",\n          IpRanges: [\n            {\n              CidrIp: "0.0.0.0/0",\n            },\n          ],\n          Ipv6Ranges: [\n            {\n              CidrIpv6: "::/0",\n            },\n          ],\n          ToPort: -1,\n        },\n      ],\n    },\n  }),\n});\n\nconst cluster = await provider.makeEKSCluster({\n  name: "cluster",\n  dependencies: {\n    subnets: [subnetPublic, subnetPrivate],\n    securityGroups: [sg],\n    role,\n  },\n});\n')),Object(o.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/eks/iac.js"}),"eks"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createCluster-property"}),"properties list"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../EC2/Subnet"}),"Subnet")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../EC2/SecurityGroup"}),"SecurityGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../Iam/IamRole"}),"Role"))))}u.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);