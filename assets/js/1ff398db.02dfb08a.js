(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return t})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return i}));var r=a(3),c=(a(0),a(237));const t={id:"AwsLoadBalancer",title:"Load Balancer"},o={unversionedId:"aws/resources/ELBv2/AwsLoadBalancer",id:"aws/resources/ELBv2/AwsLoadBalancer",isDocsHomePage:!1,title:"Load Balancer",description:"Manage an AWS Load Balancer.",source:"@site/docs/aws/resources/ELBv2/LoadBalancer.md",sourceDirName:"aws/resources/ELBv2",slug:"/aws/resources/ELBv2/AwsLoadBalancer",permalink:"/docs/aws/resources/ELBv2/AwsLoadBalancer",version:"current",frontMatter:{id:"AwsLoadBalancer",title:"Load Balancer"},sidebar:"docs",previous:{title:"Listener Rule",permalink:"/docs/aws/resources/ELBv2/AwsListenerRule"},next:{title:"Target Group",permalink:"/docs/aws/resources/ELBv2/AwsTargetGroup"}},s=[{value:"Example:",id:"example",children:[{value:"Load Balancer in a VPC",id:"load-balancer-in-a-vpc",children:[]},{value:"Reference an existing Load Balancer",id:"reference-an-existing-load-balancer",children:[]}]},{value:"Source Code",id:"source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],l={toc:s};function i({components:e,...n}){return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manage an AWS Load Balancer."),Object(c.b)("h2",{id:"example"},"Example:"),Object(c.b)("h3",{id:"load-balancer-in-a-vpc"},"Load Balancer in a VPC"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'provider.EC2.makeVpc({\n  name: "vpc",\n  properties: ({ config }) => ({\n    CidrBlock: "192.168.0.0/16",\n  }),\n});\n\nprovider.EC2.makeSubnet({\n  name: "subnet-a",\n  properties: ({ config }) => ({\n    CidrBlock: "192.168.0.0/19",\n    AvailabilityZone: `${config.region}a`,\n  }),\n  dependencies: ({ resources }) => ({\n    vpc: resources.EC2.Vpc["vpc"],\n  }),\n});\n\nprovider.EC2.makeSubnet({\n  name: "subnet-b",\n  properties: ({ config }) => ({\n    CidrBlock: "192.168.32.0/19",\n    AvailabilityZone: `${config.region}b`,\n  }),\n  dependencies: ({ resources }) => ({\n    vpc: resources.EC2.Vpc["vpc"],\n  }),\n});\n\nprovider.EC2.useDefaultSecurityGroup({\n  name: "sg-default-vpc",\n  dependencies: ({ resources }) => ({\n    vpc: resources.EC2.Vpc["vpc"],\n  }),\n});\n\nprovider.ELBv2.makeLoadBalancer({\n  name: "load-balancer",\n  properties: ({ config }) => ({\n    Scheme: "internet-facing",\n    Type: "application",\n    IpAddressType: "ipv4",\n  }),\n  dependencies: ({ resources }) => ({\n    subnets: [\n      resources.EC2.Subnet["subnet-a"],\n      resources.EC2.Subnet["subnet-b"],\n    ],\n    securityGroups: [resources.EC2.SecurityGroup["sg-default-vpc"]],\n  }),\n});\n')),Object(c.b)("h3",{id:"reference-an-existing-load-balancer"},"Reference an existing Load Balancer"),Object(c.b)("p",null,"When using the ",Object(c.b)("em",{parentName:"p"},"AWS Load Balancer Controller")," to create the load balancer & associated resources, there is the need to get a reference to this load balancer."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const clusterName = "cluster";\n\nprovider.ELBv2.useLoadBalancer({\n  name: "load-balancer",\n  filterLives: ({ resources }) =>\n    pipe([\n      () => resources,\n      find(\n        pipe([\n          get("live.Tags"),\n          find(\n            and([\n              eq(get("Key"), "elbv2.k8s.aws/cluster"),\n              eq(get("Value"), clusterName),\n            ])\n          ),\n        ])\n      ),\n    ])(),\n});\n\nprovider.Route53.makeHostedZone({\n  name: "grucloud.org.",\n  dependencies: ({ resources }) => ({\n    domain: resources.Route53Domains.Domain["grucloud.org"],\n  }),\n});\n\nprovider.Route53.makeRecord({\n  dependencies: ({ resources }) => ({\n    hostedZone: resources.Route53.HostedZone["grucloud.org."],\n    loadBalancer: resources.ELBv2.LoadBalancer["load-balancer"],\n  }),\n});\n\nprovider.Route53Domains.useDomain({\n  name: "grucloud.org",\n});\n')),Object(c.b)("h2",{id:"source-code"},"Source Code"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ELBv2/load-balancer/resources.js"},"Load Balancer"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Subnet"},"Subnet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup"))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t LoadBalancer\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 5/5\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ELBv2::LoadBalancer from aws                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: load-balancer                                                         \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   LoadBalancerArn: arn:aws:elasticloadbalancing:us-east-1:123456789123:loa\u2026 \u2502\n\u2502   DNSName: load-balancer-742239368.us-east-1.elb.amazonaws.com              \u2502\n\u2502   CanonicalHostedZoneId: Z35SXDOTRQ7X7K                                     \u2502\n\u2502   CreatedTime: 2021-10-29T17:13:03.430Z                                     \u2502\n\u2502   LoadBalancerName: load-balancer                                           \u2502\n\u2502   Scheme: internet-facing                                                   \u2502\n\u2502   VpcId: vpc-055bc1b8bdcbd18ac                                              \u2502\n\u2502   State:                                                                    \u2502\n\u2502     Code: active                                                            \u2502\n\u2502   Type: application                                                         \u2502\n\u2502   AvailabilityZones:                                                        \u2502\n\u2502     - ZoneName: us-east-1a                                                  \u2502\n\u2502       SubnetId: subnet-05ee2729854925587                                    \u2502\n\u2502       LoadBalancerAddresses: []                                             \u2502\n\u2502     - ZoneName: us-east-1b                                                  \u2502\n\u2502       SubnetId: subnet-0ec0f9a0cec61d35b                                    \u2502\n\u2502       LoadBalancerAddresses: []                                             \u2502\n\u2502   SecurityGroups:                                                           \u2502\n\u2502     - "sg-0111f30f176535b9d"                                                \u2502\n\u2502   IpAddressType: ipv4                                                       \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: load-balancer                                                  \u2502\n\u2502                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ELBv2::LoadBalancer \u2502 load-balancer                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t LoadBalancer" executed in 6s\n')))}i.isMDXComponent=!0},237:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return m}));var r=a(0),c=a.n(r);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,c=function(e,n){if(null==e)return{};var a,r,c={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),u=function(e){var n=c.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=u(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(a),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||t;return a?c.a.createElement(m,s(s({ref:n},i),{},{components:a})):c.a.createElement(m,s({ref:n},i))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,o=new Array(t);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<t;i++)o[i]=a[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);