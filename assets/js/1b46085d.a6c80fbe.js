(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{241:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=t,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(b,c(c({ref:n},s),{},{components:a})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return u}));var t=a(3),r=a(8),o=(a(0),a(241)),i={id:"EventSourceMapping",title:"Event Source Mapping"},c={unversionedId:"aws/resources/Lambda/EventSourceMapping",id:"aws/resources/Lambda/EventSourceMapping",isDocsHomePage:!1,title:"Event Source Mapping",description:"Provides an Event Source Mapping",source:"@site/docs/aws/resources/Lambda/EventSourceMapping.md",sourceDirName:"aws/resources/Lambda",slug:"/aws/resources/Lambda/EventSourceMapping",permalink:"/docs/aws/resources/Lambda/EventSourceMapping",version:"current",frontMatter:{id:"EventSourceMapping",title:"Event Source Mapping"},sidebar:"docs",previous:{title:"Key",permalink:"/docs/aws/resources/KMS/Key"},next:{title:"Function",permalink:"/docs/aws/resources/Lambda/Function"}},l=[{value:"Examples",id:"examples",children:[{value:"SQS Queue Source Mapping",id:"sqs-queue-source-mapping",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],s={toc:l};function u(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an ",Object(o.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/lambda/home"},"Event Source Mapping")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"sqs-queue-source-mapping"},"SQS Queue Source Mapping"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const lambdaPolicy = require("./lambdaPolicy.json");\nconst lambdaAssumePolicy = require("./lambdaAssumePolicy.json");\n\nconst iamPolicy = provider.IAM.makePolicy({\n  name: "lambda-policy",\n  properties: () => lambdaPolicy,\n});\n\nconst iamRole = provider.IAM.makeRole({\n  name: "lambda-role",\n  dependencies: { policies: [iamPolicy] },\n  properties: () => lambdaAssumePolicy,\n});\n\nconst lambdaFunction = provider.Lambda.makeFunction({\n  name: "lambda-hello-world", // Source must be located in the direcory \'lambda-hello-world\'\n  dependencies: { role: iamRole },\n  properties: () => ({\n    PackageType: "Zip",\n    Handler: "helloworld.handler", // The handler function must de defined in lambda-hello-world/helloworkd.js\n    Runtime: "nodejs14.x",\n  }),\n});\n\nconst sqsQueue = provider.SQS.makeQueue({\n  name: "my-queue",\n  properties: () => ({\n    Attributes: {\n      VisibilityTimeout: "30",\n      MaximumMessageSize: "262144",\n      MessageRetentionPeriod: "345600",\n      DelaySeconds: "0",\n      ReceiveMessageWaitTimeSeconds: "0",\n    },\n    tags: {\n      "my-tag": "my-value",\n    },\n  }),\n});\n\nprovider.Lambda.makeEventSourceMapping({\n  name: "mapping-lambda-hello-world-my-queue",\n  dependencies: { lambdaFunction, sqsQueue },\n  properties: () => ({}),\n});\n')),Object(o.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/example/aws/lambda/nodejs/sqs-lambda/iac.js"},"sqs lambda"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/interfaces/createeventsourcemappingcommandinput.html"},"properties list"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/Lambda/Function"},"Lambda Function")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/aws/resources/SQS/Queue"},"SQS Queue"))),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,"The list of event source mappings can be displayed and filtered with the type ",Object(o.b)("strong",{parentName:"p"},"EventSourceMapping"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc list -t EventSourceMapping\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 6/6\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 Lambda::EventSourceMapping from aws                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: mapping-lambda-hello-world-my-queue                                    \u2502\n\u2502 managedByUs: Yes                                                             \u2502\n\u2502 live:                                                                        \u2502\n\u2502   UUID: 369cfa51-9364-4cba-88d4-7311317adc37                                 \u2502\n\u2502   StartingPosition: null                                                     \u2502\n\u2502   StartingPositionTimestamp: null                                            \u2502\n\u2502   BatchSize: 10                                                              \u2502\n\u2502   MaximumBatchingWindowInSeconds: 0                                          \u2502\n\u2502   ParallelizationFactor: null                                                \u2502\n\u2502   EventSourceArn: arn:aws:sqs:eu-west-2:840541460064:my-queue                \u2502\n\u2502   FunctionArn: arn:aws:lambda:eu-west-2:840541460064:function:lambda-hello-\u2026 \u2502\n\u2502   LastModified: 2021-09-23T13:46:06.664Z                                     \u2502\n\u2502   LastProcessingResult: null                                                 \u2502\n\u2502   State: Enabled                                                             \u2502\n\u2502   StateTransitionReason: USER_INITIATED                                      \u2502\n\u2502   MaximumRecordAgeInSeconds: null                                            \u2502\n\u2502   BisectBatchOnFunctionError: null                                           \u2502\n\u2502   MaximumRetryAttempts: null                                                 \u2502\n\u2502   TumblingWindowInSeconds: null                                              \u2502\n\u2502   Tags:                                                                      \u2502\n\u2502     gc-project-name: lambda-sqs-nodejs                                       \u2502\n\u2502     gc-managed-by: grucloud                                                  \u2502\n\u2502     gc-stage: dev                                                            \u2502\n\u2502     gc-created-by-provider: aws                                              \u2502\n\u2502     Name: lambda-hello-world                                                 \u2502\n\u2502                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Lambda::EventSourceMapping \u2502 mapping-lambda-hello-world-my-queue            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t EventSourceMapping" executed in 13s\n')))}u.isMDXComponent=!0}}]);