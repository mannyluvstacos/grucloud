"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9634],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=t.createContext({}),l=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(n),d=s,m=g["".concat(a,".").concat(d)]||g[d]||p[d]||o;return n?t.createElement(m,u(u({ref:r},c),{},{components:n})):t.createElement(m,u({ref:r},c))}));function d(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,u=new Array(o);u[0]=g;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11832:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var t=n(87462),s=n(63366),o=(n(67294),n(3905)),u=["components"],i={title:"SecurityGroupRuleIngress"},a=void 0,l={unversionedId:"aws/resources/EC2/SecurityGroupRuleIngress",id:"aws/resources/EC2/SecurityGroupRuleIngress",isDocsHomePage:!1,title:"SecurityGroupRuleIngress",description:"Manages a security group ingress rule.",source:"@site/docs/aws/resources/EC2/SecurityGroupRuleIngress.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/SecurityGroupRuleIngress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleIngress",tags:[],version:"current",frontMatter:{title:"SecurityGroupRuleIngress"},sidebar:"docs",previous:{title:"SecurityGroupRuleEgress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleEgress"},next:{title:"Subnet",permalink:"/docs/aws/resources/EC2/Subnet"}},c=[{value:"Ingress rule for SSH",id:"ingress-rule-for-ssh",children:[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3}],level:2},{value:"Listing",id:"listing",children:[],level:2}],p={toc:c};function g(e){var r=e.components,n=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages a security group ingress rule."),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("h2",{id:"ingress-rule-for-ssh"},"Ingress rule for SSH"),(0,o.kt)("p",null,"The following example creates a security rule to allow ingress SSH traffic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst sg = provider.EC2.makeSecurityGroup({\n  name: "securityGroup",\n  dependencies: () => ({ vpc }),\n  properties: () => ({\n    create: {\n      Description: "Security Group",\n    },\n  }),\n});\n\nconst sgRuleIngressSsh = provider.EC2.makeSecurityGroupRuleIngress({\n  name: "sg-rule-ingress-ssh",\n  dependencies: () => ({\n    securityGroup: sg,\n  }),\n  properties: () => ({\n    IpPermission: {\n      FromPort: 22,\n      IpProtocol: "tcp",\n      IpRanges: [\n        {\n          CidrIp: "0.0.0.0/0",\n        },\n      ],\n      Ipv6Ranges: [\n        {\n          CidrIpv6: "::/0",\n        },\n      ],\n      ToPort: 22,\n    },\n  }),\n});\n')),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js#L26"},"ec2 in vpc"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/SecurityGroup"},"SecurityGroup"))),(0,o.kt)("h2",{id:"listing"},"Listing"),(0,o.kt)("p",null,"List only the ingress rules with the filter ",(0,o.kt)("inlineCode",{parentName:"p"},"SecurityGroupRuleIngress")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t SecurityGroupRuleIngress\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  Initialising\n  \u2713 Listing 2/2\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 SecurityGroupRuleIngress from aws                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                 \u2502 Data                                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sg-rule-ingress-ssh  \u2502 IpPermissions:                                        \u2502 Yes  \u2502\n\u2502                      \u2502   - FromPort: 22                                      \u2502      \u2502\n\u2502                      \u2502     IpProtocol: tcp                                   \u2502      \u2502\n\u2502                      \u2502     IpRanges:                                         \u2502      \u2502\n\u2502                      \u2502       - CidrIp: 0.0.0.0/0                             \u2502      \u2502\n\u2502                      \u2502     Ipv6Ranges:                                       \u2502      \u2502\n\u2502                      \u2502       - CidrIpv6: ::/0                                \u2502      \u2502\n\u2502                      \u2502     ToPort: 22                                        \u2502      \u2502\n\u2502                      \u2502 Tags:                                                 \u2502      \u2502\n\u2502                      \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                      \u2502     Value: sg-rule-ingress-ssh                        \u2502      \u2502\n\u2502                      \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                      \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                      \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                      \u2502     Value: aws                                        \u2502      \u2502\n\u2502                      \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                      \u2502     Value: dev                                        \u2502      \u2502\n\u2502                      \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                      \u2502     Value: @grucloud/example-aws-ec2-vpc              \u2502      \u2502\n\u2502                      \u2502                                                       \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sg-rule-ingress-icmp \u2502 IpPermissions:                                        \u2502 Yes  \u2502\n\u2502                      \u2502   - FromPort: -1                                      \u2502      \u2502\n\u2502                      \u2502     IpProtocol: icmp                                  \u2502      \u2502\n\u2502                      \u2502     IpRanges:                                         \u2502      \u2502\n\u2502                      \u2502       - CidrIp: 0.0.0.0/0                             \u2502      \u2502\n\u2502                      \u2502     Ipv6Ranges:                                       \u2502      \u2502\n\u2502                      \u2502       - CidrIpv6: ::/0                                \u2502      \u2502\n\u2502                      \u2502     ToPort: -1                                        \u2502      \u2502\n\u2502                      \u2502 Tags:                                                 \u2502      \u2502\n\u2502                      \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                      \u2502     Value: sg-rule-ingress-icmp                       \u2502      \u2502\n\u2502                      \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                      \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                      \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                      \u2502     Value: aws                                        \u2502      \u2502\n\u2502                      \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                      \u2502     Value: dev                                        \u2502      \u2502\n\u2502                      \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                      \u2502     Value: @grucloud/example-aws-ec2-vpc              \u2502      \u2502\n\u2502                      \u2502                                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 SecurityGroupRule\u2026 \u2502 sg-rule-ingress-ssh                                           \u2502\n\u2502                    \u2502 sg-rule-ingress-icmp                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 1 provider\nCommand "gc l -t SecurityGroupRuleIngress" executed in 3s\n')))}g.isMDXComponent=!0}}]);