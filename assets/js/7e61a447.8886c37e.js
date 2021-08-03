(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),n=(r(0),r(201));const o={id:"AwsTargetGroup",title:"Target Group"},c={unversionedId:"aws/resources/ELBv2/AwsTargetGroup",id:"aws/resources/ELBv2/AwsTargetGroup",isDocsHomePage:!1,title:"Target Group",description:"Manages an ELB Target Group.",source:"@site/docs/aws/resources/ELBv2/TargetGroup.md",sourceDirName:"aws/resources/ELBv2",slug:"/aws/resources/ELBv2/AwsTargetGroup",permalink:"/docs/aws/resources/ELBv2/AwsTargetGroup",version:"current",frontMatter:{id:"AwsTargetGroup",title:"Target Group"},sidebar:"docs",previous:{title:"Load Balancer",permalink:"/docs/aws/resources/ELBv2/AwsLoadBalancer"},next:{title:"Iam Group",permalink:"/docs/aws/resources/IAM/IamGroup"}},s=[{value:"Example",id:"example",children:[{value:"TargetGroup attached to a EKS Node Group",id:"targetgroup-attached-to-a-eks-node-group",children:[]},{value:"TargetGroup attached to a AutoScaling Group",id:"targetgroup-attached-to-a-autoscaling-group",children:[]}]},{value:"Properties",id:"properties",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],u={toc:s};function p({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Manages an ",Object(n.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html"},"ELB Target Group"),"."),Object(n.b)("p",null,"A target group can be attached directly to an AutoScaling Group or an AutoScaling Group created by an EKS Node Group."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("h3",{id:"targetgroup-attached-to-a-eks-node-group"},"TargetGroup attached to a EKS Node Group"),Object(n.b)("p",null,"In this example, we'll create a TargetGroup associated to an ",Object(n.b)("a",{parentName:"p",href:"/docs/aws/resources/EKS/EksNodeGroup"},"EKS Node Group"),".\nWhen an EKS Node Group is created, an ",Object(n.b)("a",{parentName:"p",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"Auto Scaling Group")," is also created. During the deployment, the Target Group is attached automatically to this Auto Scaling Group."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.ec2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst nodeGroup = {}; // Insert node group here\n\nconst targetGroupRest = provider.elb.makeTargetGroup({\n  name: "target-group-rest",\n  dependencies: {\n    vpc,\n    nodeGroup,\n  },\n  properties: () => ({\n    Port: 30020,\n    HealthCheckPath: "/api/v1/version",\n  }),\n});\n')),Object(n.b)("h3",{id:"targetgroup-attached-to-a-autoscaling-group"},"TargetGroup attached to a AutoScaling Group"),Object(n.b)("p",null,"In this example, a TargetGroup is associated with an ",Object(n.b)("a",{parentName:"p",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"AutoScaling Group"),". The goal is to attach the target group to the autoscaling group."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.ec2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst autoScalingGroup = {}; // Insert autoscaling\n\nconst targetGroupRest = provider.elb.makeTargetGroup({\n  name: "target-group-rest",\n  dependencies: {\n    vpc,\n    autoScalingGroup,\n  },\n  properties: () => ({\n    Port: 30020,\n    HealthCheckPath: "/api/v1/version",\n  }),\n});\n')),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("p",null,"The list of properties are the parameter of ",Object(n.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createTargetGroup-property"},"createTargetGroup")),Object(n.b)("h2",{id:"source-code"},"Source Code"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/load-balancer/iac.js"},"Load Balancer Module"))),Object(n.b)("h2",{id:"dependencies"},"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Vpc"},"VPC")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/aws/resources/EKS/EksNodeGroup"},"EKS NodeGroup"))),Object(n.b)("h2",{id:"list"},"List"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t TargetGroup\n")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 2/2\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 TargetGroup from aws                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name              \u2502 Data                                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 target-group-rest \u2502 TargetGroupArn: arn:aws:elasticloadbalancing:eu-west\u2026 \u2502 Yes  \u2502\n\u2502                   \u2502 TargetGroupName: target-group-rest                    \u2502      \u2502\n\u2502                   \u2502 Protocol: HTTP                                        \u2502      \u2502\n\u2502                   \u2502 Port: 30020                                           \u2502      \u2502\n\u2502                   \u2502 VpcId: vpc-03b8d521b703d6c46                          \u2502      \u2502\n\u2502                   \u2502 HealthCheckProtocol: HTTP                             \u2502      \u2502\n\u2502                   \u2502 HealthCheckPort: traffic-port                         \u2502      \u2502\n\u2502                   \u2502 HealthCheckEnabled: true                              \u2502      \u2502\n\u2502                   \u2502 HealthCheckIntervalSeconds: 30                        \u2502      \u2502\n\u2502                   \u2502 HealthCheckTimeoutSeconds: 5                          \u2502      \u2502\n\u2502                   \u2502 HealthyThresholdCount: 5                              \u2502      \u2502\n\u2502                   \u2502 UnhealthyThresholdCount: 2                            \u2502      \u2502\n\u2502                   \u2502 HealthCheckPath: /api/v1/version                      \u2502      \u2502\n\u2502                   \u2502 Matcher:                                              \u2502      \u2502\n\u2502                   \u2502   HttpCode: 200                                       \u2502      \u2502\n\u2502                   \u2502 LoadBalancerArns:                                     \u2502      \u2502\n\u2502                   \u2502   - "arn:aws:elasticloadbalancing:eu-west-2:84054146\u2026 \u2502      \u2502\n\u2502                   \u2502 TargetType: instance                                  \u2502      \u2502\n\u2502                   \u2502 ProtocolVersion: HTTP1                                \u2502      \u2502\n\u2502                   \u2502 Tags:                                                 \u2502      \u2502\n\u2502                   \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                   \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                   \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                   \u2502     Value: dev                                        \u2502      \u2502\n\u2502                   \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                   \u2502     Value: starhackit                                 \u2502      \u2502\n\u2502                   \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                   \u2502     Value: aws                                        \u2502      \u2502\n\u2502                   \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                   \u2502     Value: target-group-rest                          \u2502      \u2502\n\u2502                   \u2502                                                       \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 target-group-web  \u2502 TargetGroupArn: arn:aws:elasticloadbalancing:eu-west\u2026 \u2502 Yes  \u2502\n\u2502                   \u2502 TargetGroupName: target-group-web                     \u2502      \u2502\n\u2502                   \u2502 Protocol: HTTP                                        \u2502      \u2502\n\u2502                   \u2502 Port: 30010                                           \u2502      \u2502\n\u2502                   \u2502 VpcId: vpc-03b8d521b703d6c46                          \u2502      \u2502\n\u2502                   \u2502 HealthCheckProtocol: HTTP                             \u2502      \u2502\n\u2502                   \u2502 HealthCheckPort: traffic-port                         \u2502      \u2502\n\u2502                   \u2502 HealthCheckEnabled: true                              \u2502      \u2502\n\u2502                   \u2502 HealthCheckIntervalSeconds: 30                        \u2502      \u2502\n\u2502                   \u2502 HealthCheckTimeoutSeconds: 5                          \u2502      \u2502\n\u2502                   \u2502 HealthyThresholdCount: 5                              \u2502      \u2502\n\u2502                   \u2502 UnhealthyThresholdCount: 2                            \u2502      \u2502\n\u2502                   \u2502 HealthCheckPath: /                                    \u2502      \u2502\n\u2502                   \u2502 Matcher:                                              \u2502      \u2502\n\u2502                   \u2502   HttpCode: 200                                       \u2502      \u2502\n\u2502                   \u2502 LoadBalancerArns:                                     \u2502      \u2502\n\u2502                   \u2502   - "arn:aws:elasticloadbalancing:eu-west-2:84054146\u2026 \u2502      \u2502\n\u2502                   \u2502 TargetType: instance                                  \u2502      \u2502\n\u2502                   \u2502 ProtocolVersion: HTTP1                                \u2502      \u2502\n\u2502                   \u2502 Tags:                                                 \u2502      \u2502\n\u2502                   \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                   \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                   \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                   \u2502     Value: dev                                        \u2502      \u2502\n\u2502                   \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                   \u2502     Value: starhackit                                 \u2502      \u2502\n\u2502                   \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                   \u2502     Value: aws                                        \u2502      \u2502\n\u2502                   \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                   \u2502     Value: target-group-web                           \u2502      \u2502\n\u2502                   \u2502                                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TargetGroup        \u2502 target-group-rest                                          \u2502\n\u2502                    \u2502 target-group-web                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 2 providers\nCommand "gc l -t TargetGroup" executed in 7s\n\n')))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=l(r),g=a,b=i["".concat(c,".").concat(g)]||i[g]||d[g]||o;return r?n.a.createElement(b,s(s({ref:t},p),{},{components:r})):n.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);