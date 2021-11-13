(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return n?r.a.createElement(v,l(l({ref:t},o),{},{components:n})):r.a.createElement(v,l({ref:t},o))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,u=new Array(c);u[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var o=2;o<c;o++)u[o]=n[o];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),r=(n(0),n(237));const c={id:"CloudWatchEventRule",title:"Rule"},u={unversionedId:"aws/resources/CloudWatchEvents/CloudWatchEventRule",id:"aws/resources/CloudWatchEvents/CloudWatchEventRule",isDocsHomePage:!1,title:"Rule",description:"Manages an Event Bridge Rule.",source:"@site/docs/aws/resources/CloudWatchEvents/CloudWatchEventRule.md",sourceDirName:"aws/resources/CloudWatchEvents",slug:"/aws/resources/CloudWatchEvents/CloudWatchEventRule",permalink:"/docs/aws/resources/CloudWatchEvents/CloudWatchEventRule",version:"current",frontMatter:{id:"CloudWatchEventRule",title:"Rule"},sidebar:"docs",previous:{title:"EventBus",permalink:"/docs/aws/resources/CloudWatchEvents/CloudWatchEventBus"},next:{title:"LogGroup",permalink:"/docs/aws/resources/CloudWatchLogs/CloudWatchLogGroup"}},l=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],s={toc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Manages an Event Bridge ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/events/home?#/rules"},"Rule"),"."),Object(r.b)("h2",{id:"sample-code"},"Sample code"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'provider.CloudWatchEvents.makeEventBus({\n  name: "myEventBus",\n});\n\nprovider.CloudWatchEvents.makeRule({\n  name: "rule-Certificate-Approaching-Expiration",\n  properties: () => ({\n    EventPattern:\n      \'{"source":["aws.acm"],"detail-type":["ACM Certificate Approaching Expiration"]}\',\n    State: "ENABLED",\n  }),\n  dependencies: ({ resources }) => ({\n    eventBus: resources.CloudWatchEvents.EventBus.myEventBus,\n  }),\n});\n')),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#putRule-property"},"create properties"))),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./CloudWatchEventBus"},"Event Bus"))),Object(r.b)("h2",{id:"full-examples"},"Full Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/cloudWatchEvent/event"},"simple example"))),Object(r.b)("h2",{id:"list"},"List"),Object(r.b)("p",null,"The rules can be filtered with the ",Object(r.b)("em",{parentName:"p"},"CloudWatchEvents::Rule")," type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t CloudWatchEvents::Rule\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 15/15\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 CloudWatchEvents::Rule from aws                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: AutoScalingManagedRule                                                \u2502\n\u2502 managedByUs: NO                                                             \u2502\n\u2502 live:                                                                       \u2502\n\u2502   Name: AutoScalingManagedRule                                              \u2502\n\u2502   Arn: arn:aws:events:eu-west-2:840541460064:rule/AutoScalingManagedRule    \u2502\n\u2502   EventPattern: {"source":["aws.ec2"],"detail-type":["EC2 Instance Rebalan\u2026 \u2502\n\u2502   State: ENABLED                                                            \u2502\n\u2502   Description: This rule is used to route Instance notifications to EC2 Au\u2026 \u2502\n\u2502   ManagedBy: autoscaling.amazonaws.com                                      \u2502\n\u2502   EventBusName: default                                                     \u2502\n\u2502   Tags: []                                                                  \u2502\n\u2502   Targets:                                                                  \u2502\n\u2502     - Id: autoscaling                                                       \u2502\n\u2502       Arn: arn:aws:autoscaling:eu-west-2:::                                 \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule-test                                                             \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   Name: rule-test                                                           \u2502\n\u2502   Arn: arn:aws:events:eu-west-2:840541460064:rule/rule-test                 \u2502\n\u2502   EventPattern: {"source":["aws.ec2"],"detail-type":["EC2 Instance State-c\u2026 \u2502\n\u2502   State: ENABLED                                                            \u2502\n\u2502   Description: testing rule updated                                         \u2502\n\u2502   EventBusName: default                                                     \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: aws-example-cloudwatchevent                                    \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: rule-test                                                      \u2502\n\u2502   Targets: []                                                               \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: rule-test-ec2                                                         \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   Name: rule-test-ec2                                                       \u2502\n\u2502   Arn: arn:aws:events:eu-west-2:840541460064:rule/bus-test/rule-test-ec2    \u2502\n\u2502   EventPattern: {"source":["aws.acm"],"detail-type":["ACM Certificate Appr\u2026 \u2502\n\u2502   State: ENABLED                                                            \u2502\n\u2502   EventBusName: bus-test                                                    \u2502\n\u2502   Targets: []                                                               \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: aws-example-cloudwatchevent                                    \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: rule-test-ec2                                                  \u2502\n\u2502                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 CloudWatchEvents::Rule         \u2502 AutoScalingManagedRule                \u2502\n\u2502                                \u2502 rule-test                             \u2502\n\u2502                                \u2502 rule-test-ec2                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n3 resources, 1 type, 1 provider\nCommand "gc l -t Rule" executed in 12s\n')))}o.isMDXComponent=!0}}]);