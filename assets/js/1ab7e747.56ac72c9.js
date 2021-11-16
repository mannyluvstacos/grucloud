(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{241:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=i(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(r),b=t,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:n},l),{},{components:r})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return i}));var t=r(3),a=r(8),o=(r(0),r(241)),s={id:"NodeGroup",title:"Node Group"},c={unversionedId:"aws/resources/EKS/NodeGroup",id:"aws/resources/EKS/NodeGroup",isDocsHomePage:!1,title:"Node Group",description:"Provides an EKS Node Group.",source:"@site/docs/aws/resources/EKS/NodeGroup.md",sourceDirName:"aws/resources/EKS",slug:"/aws/resources/EKS/NodeGroup",permalink:"/docs/aws/resources/EKS/NodeGroup",version:"current",frontMatter:{id:"NodeGroup",title:"Node Group"},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/aws/resources/EKS/Cluster"},next:{title:"Listener",permalink:"/docs/aws/resources/ELBv2/Listener"}},u=[{value:"Examples",id:"examples",children:[{value:"Create a Node Group",id:"create-a-node-group",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Listing",id:"listing",children:[]}],l={toc:u};function i(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html"},"EKS Node Group"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"create-a-node-group"},"Create a Node Group"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'provider.EKS.makeNodeGroup({\n  name: "ng-1",\n  properties: ({ config }) => ({\n    capacityType: "ON_DEMAND",\n    scalingConfig: {\n      minSize: 1,\n      maxSize: 1,\n      desiredSize: 1,\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    cluster: resources.EKS.Cluster.myCluster,\n    subnets: [\n      resources.EC2.Subnet.subnetPublicUseast1A,\n      resources.EC2.Subnet.subnetPublicUseast1D,\n    ],\n    role: resources.IAM.Role.eksctlMyClusterNodegroupNg_1NodeInstanceRole,\n    launchTemplate: resources.EC2.LaunchTemplate.eksctlMyClusterNodegroupNg_1,\n  }),\n});\n')),Object(o.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/EKS/eks-simple"},"eks simple")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/EKS/eks-load-balancer"},"eks with load balancer"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createCluster-property"},"properties list"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/EKS/Cluster"},"Cluster")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Subnet"},"Subnet")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/LaunchTemplate"},"LaunchTemplate")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Role"},"Role"))),Object(o.b)("h2",{id:"listing"},"Listing"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t EKS::NodeGroup\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 19/19\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 EKS::NodeGroup from aws                                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: ng-1                                                                                \u2502\n\u2502 managedByUs: Yes                                                                          \u2502\n\u2502 live:                                                                                     \u2502\n\u2502   nodegroupName: ng-1                                                                     \u2502\n\u2502   nodegroupArn: arn:aws:eks:us-east-1:1234567890:nodegroup/my-cluster/ng-1/eabe56e1-9a\u2026 \u2502\n\u2502   clusterName: my-cluster                                                                 \u2502\n\u2502   version: 1.20                                                                           \u2502\n\u2502   releaseVersion: 1.20.10-20211013                                                        \u2502\n\u2502   createdAt: 2021-10-23T15:27:06.791Z                                                     \u2502\n\u2502   modifiedAt: 2021-10-23T15:38:20.659Z                                                    \u2502\n\u2502   status: ACTIVE                                                                          \u2502\n\u2502   capacityType: ON_DEMAND                                                                 \u2502\n\u2502   scalingConfig:                                                                          \u2502\n\u2502     minSize: 1                                                                            \u2502\n\u2502     maxSize: 1                                                                            \u2502\n\u2502     desiredSize: 1                                                                        \u2502\n\u2502   instanceTypes:                                                                          \u2502\n\u2502     - "t3.medium"                                                                         \u2502\n\u2502   subnets:                                                                                \u2502\n\u2502     - "subnet-054f90a7bcd3875b8"                                                          \u2502\n\u2502     - "subnet-0666abe5c8cb6dc15"                                                          \u2502\n\u2502   amiType: AL2_x86_64                                                                     \u2502\n\u2502   nodeRole: arn:aws:iam::1234567890:role/eksctl-my-cluster-nodegroup-ng-1-NodeInstance\u2026 \u2502\n\u2502   labels:                                                                                 \u2502\n\u2502     alpha.eksctl.io/cluster-name: my-cluster                                              \u2502\n\u2502     alpha.eksctl.io/nodegroup-name: ng-1                                                  \u2502\n\u2502   resources:                                                                              \u2502\n\u2502     autoScalingGroups:                                                                    \u2502\n\u2502       - name: eks-eabe56e1-9ac4-c7f0-26bf-90bf1bcc66bc                                    \u2502\n\u2502     remoteAccessSecurityGroup: null                                                       \u2502\n\u2502   diskSize: null                                                                          \u2502\n\u2502   health:                                                                                 \u2502\n\u2502     issues: []                                                                            \u2502\n\u2502   updateConfig:                                                                           \u2502\n\u2502     maxUnavailable: 1                                                                     \u2502\n\u2502     maxUnavailablePercentage: null                                                        \u2502\n\u2502   launchTemplate:                                                                         \u2502\n\u2502     name: eksctl-my-cluster-nodegroup-ng-1                                                \u2502\n\u2502     version: 1                                                                            \u2502\n\u2502     id: lt-0045f65b3d11014b2                                                              \u2502\n\u2502   tags:                                                                                   \u2502\n\u2502     gc-managed-by: grucloud                                                               \u2502\n\u2502     gc-project-name: ex-eks-mod                                                           \u2502\n\u2502     gc-stage: dev                                                                         \u2502\n\u2502     gc-created-by-provider: aws                                                           \u2502\n\u2502     Name: ng-1                                                                            \u2502\n\u2502                                                                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 EKS::NodeGroup \u2502 ng-1                                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t NodeGroup" executed in 11s\n')))}i.isMDXComponent=!0}}]);