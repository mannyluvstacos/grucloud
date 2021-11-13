(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return c}));var r=a(3),t=(a(0),a(237));const l={id:"AwsListenerRule",title:"Listener Rule"},s={unversionedId:"aws/resources/ELBv2/AwsListenerRule",id:"aws/resources/ELBv2/AwsListenerRule",isDocsHomePage:!1,title:"Listener Rule",description:"Manage an ELB Listener Rule.",source:"@site/docs/aws/resources/ELBv2/ListenerRule.md",sourceDirName:"aws/resources/ELBv2",slug:"/aws/resources/ELBv2/AwsListenerRule",permalink:"/docs/aws/resources/ELBv2/AwsListenerRule",version:"current",frontMatter:{id:"AwsListenerRule",title:"Listener Rule"},sidebar:"docs",previous:{title:"Listener",permalink:"/docs/aws/resources/ELBv2/AwsListener"},next:{title:"Load Balancer",permalink:"/docs/aws/resources/ELBv2/AwsLoadBalancer"}},o=[{value:"Example",id:"example",children:[{value:"HTTP to HTTPS rule",id:"http-to-https-rule",children:[]},{value:"Forward to target group based on a path pattern",id:"forward-to-target-group-based-on-a-path-pattern",children:[]}]},{value:"Properties",id:"properties",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],i={toc:o};function c({components:e,...n}){return Object(t.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Manage an ",Object(t.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html"},"ELB Listener Rule"),"."),Object(t.b)("h2",{id:"example"},"Example"),Object(t.b)("h3",{id:"http-to-https-rule"},"HTTP to HTTPS rule"),Object(t.b)("p",null,"Provide a rule to redirect HTTP traffic to HTTPS."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'provider.ELBv2.makeRule({\n  properties: ({ config }) => ({\n    Priority: "1",\n    Conditions: [\n      {\n        Field: "path-pattern",\n        Values: ["/*"],\n      },\n    ],\n    Actions: [\n      {\n        Type: "redirect",\n        Order: 1,\n        RedirectConfig: {\n          Protocol: "HTTPS",\n          Port: "443",\n          Host: "#{host}",\n          Path: "/#{path}",\n          Query: "#{query}",\n          StatusCode: "HTTP_301",\n        },\n      },\n    ],\n  }),\n  dependencies: ({ resources }) => ({\n    listener: resources.ELBv2.Listener["listener::load-balancer::HTTP::80"],\n  }),\n});\n')),Object(t.b)("h3",{id:"forward-to-target-group-based-on-a-path-pattern"},"Forward to target group based on a path pattern"),Object(t.b)("p",null,"Forward traffic matching ",Object(t.b)("em",{parentName:"p"},"/api/")," to the target group running the REST server."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'provider.ELBv2.makeRule({\n  properties: ({ config }) => ({\n    Priority: "1",\n    Conditions: [\n      {\n        Field: "path-pattern",\n        Values: ["/api/*"],\n      },\n    ],\n  }),\n  dependencies: ({ resources }) => ({\n    listener: resources.ELBv2.Listener["listener::load-balancer::HTTPS::443"],\n    targetGroup: resources.ELBv2.TargetGroup["target-group-rest"],\n  }),\n});\n')),Object(t.b)("h2",{id:"properties"},"Properties"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createRule-property"},"ELBv2 createRule"))),Object(t.b)("h2",{id:"source-code"},"Source Code"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ELBv2/load-balancer/resources.js"},"Load Balancer"))),Object(t.b)("h2",{id:"dependencies"},"Dependencies"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/AwsListener"},"Listener")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/AwsTargetGroup"},"TargetGroup"))),Object(t.b)("h2",{id:"list"},"List"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t ELBv2::Rule\n")),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 9/9\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 5 ELBv2::Rule from aws                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule-default-listener::load-balancer::HTTP::80::default               \u2502\n\u2502 managedByUs: NO                                                             \u2502\n\u2502 live:                                                                       \u2502\n\u2502   RuleArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listener-ru\u2026 \u2502\n\u2502   Priority: default                                                         \u2502\n\u2502   Conditions: []                                                            \u2502\n\u2502   Actions:                                                                  \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   IsDefault: true                                                           \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   Tags: []                                                                  \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule-default-listener::load-balancer::HTTPS::443::default             \u2502\n\u2502 managedByUs: NO                                                             \u2502\n\u2502 live:                                                                       \u2502\n\u2502   RuleArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listener-ru\u2026 \u2502\n\u2502   Priority: default                                                         \u2502\n\u2502   Conditions: []                                                            \u2502\n\u2502   Actions:                                                                  \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   IsDefault: true                                                           \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   Tags: []                                                                  \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule::listener::load-balancer::HTTP::80::1                            \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   RuleArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listener-ru\u2026 \u2502\n\u2502   Priority: 1                                                               \u2502\n\u2502   Conditions:                                                               \u2502\n\u2502     - Field: path-pattern                                                   \u2502\n\u2502       Values:                                                               \u2502\n\u2502         - "/*"                                                              \u2502\n\u2502       PathPatternConfig:                                                    \u2502\n\u2502         Values:                                                             \u2502\n\u2502           - "/*"                                                            \u2502\n\u2502   Actions:                                                                  \u2502\n\u2502     - Type: redirect                                                        \u2502\n\u2502       Order: 1                                                              \u2502\n\u2502       RedirectConfig:                                                       \u2502\n\u2502         Protocol: HTTPS                                                     \u2502\n\u2502         Port: 443                                                           \u2502\n\u2502         Host: #{host}                                                       \u2502\n\u2502         Path: /#{path}                                                      \u2502\n\u2502         Query: #{query}                                                     \u2502\n\u2502         StatusCode: HTTP_301                                                \u2502\n\u2502   IsDefault: false                                                          \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: rule::listener::load-balancer::HTTP::80::1                     \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule::listener::load-balancer::HTTPS::443::1                          \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   RuleArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listener-ru\u2026 \u2502\n\u2502   Priority: 1                                                               \u2502\n\u2502   Conditions:                                                               \u2502\n\u2502     - Field: path-pattern                                                   \u2502\n\u2502       Values:                                                               \u2502\n\u2502         - "/api/*"                                                          \u2502\n\u2502       PathPatternConfig:                                                    \u2502\n\u2502         Values:                                                             \u2502\n\u2502           - "/api/*"                                                        \u2502\n\u2502   Actions:                                                                  \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       Order: 1                                                              \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   IsDefault: false                                                          \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: rule::listener::load-balancer::HTTPS::443::1                   \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule::listener::load-balancer::HTTPS::443::2                          \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   RuleArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listener-ru\u2026 \u2502\n\u2502   Priority: 2                                                               \u2502\n\u2502   Conditions:                                                               \u2502\n\u2502     - Field: path-pattern                                                   \u2502\n\u2502       Values:                                                               \u2502\n\u2502         - "/*"                                                              \u2502\n\u2502       PathPatternConfig:                                                    \u2502\n\u2502         Values:                                                             \u2502\n\u2502           - "/*"                                                            \u2502\n\u2502   Actions:                                                                  \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       Order: 1                                                              \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   IsDefault: false                                                          \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: rule::listener::load-balancer::HTTPS::443::2                   \u2502\n\u2502                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ELBv2::Rule \u2502 rule-default-listener::load-balancer::HTTP::80::default      \u2502\n\u2502             \u2502 rule-default-listener::load-balancer::HTTPS::443::default    \u2502\n\u2502             \u2502 rule::listener::load-balancer::HTTP::80::1                   \u2502\n\u2502             \u2502 rule::listener::load-balancer::HTTPS::443::1                 \u2502\n\u2502             \u2502 rule::listener::load-balancer::HTTPS::443::2                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n5 resources, 1 type, 1 provider\nCommand "gc l -t ELBv2::Rule" executed in 10s\n')))}c.isMDXComponent=!0},237:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return g}));var r=a(0),t=a.n(r);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=t.a.createContext({}),u=function(e){var n=t.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=u(e.components);return t.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=r,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return a?t.a.createElement(g,o(o({ref:n},c),{},{components:a})):t.a.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=b;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);