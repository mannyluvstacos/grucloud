(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(174)),c={id:"S3Bucket",title:"S3 Bucket"},i={id:"aws/resources/S3/S3Bucket",isDocsHomePage:!1,title:"S3 Bucket",description:"Manages S3 Buckets",source:"@site/docs/aws/resources/S3/S3Bucket.md",permalink:"/docs/aws/resources/S3/S3Bucket",sidebar:"someSidebar",previous:{title:"Hosted Zone",permalink:"/docs/aws/resources/Route53/Route53HostedZone"},next:{title:"S3 Object",permalink:"/docs/aws/resources/S3/S3Object"}},l=[{value:"Bucket Attributes",id:"bucket-attributes",children:[{value:"Basic",id:"basic",children:[]},{value:"Acceleration",id:"acceleration",children:[]},{value:"CORS",id:"cors",children:[]},{value:"Encryption",id:"encryption",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Notification",id:"notification",children:[]},{value:"Policy",id:"policy",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Request Payment",id:"request-payment",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Static Website",id:"static-website",children:[]}]},{value:"Examples Code",id:"examples-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/s3/index.html"}),"S3 Buckets")),Object(o.b)("h2",{id:"bucket-attributes"},"Bucket Attributes"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Bucket = await provider.makeS3Bucket({\n  name: "yourgloballyuniquebucketnamehere",\n  properties: () => ({}),\n});\n')),Object(o.b)("h3",{id:"acceleration"},"Acceleration"),Object(o.b)("p",null,"Enable or disable the bucket acceleration."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketAccelerateConfiguration-property"}),"AccelerateConfiguration properties page")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Accelerated = await provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere`,\n  properties: () => ({\n    AccelerateConfiguration: {\n      Status: "Enabled",\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"cors"},"CORS"),Object(o.b)("p",null,"Set the CORS configuration for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketCors-property"}),"CORSConfiguration properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'await provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere `,\n  properties: () => ({\n    CORSConfiguration: {\n      CORSRules: [\n        {\n          AllowedHeaders: ["Authorization"],\n          AllowedMethods: ["GET"],\n          AllowedOrigins: ["*"],\n          MaxAgeSeconds: 3000,\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"encryption"},"Encryption"),Object(o.b)("p",null,"Set the encryption configuration for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketEncryption-property"}),"ServerSideEncryptionConfiguration properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Encryption = await provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere`,\n  properties: () => ({\n    ServerSideEncryptionConfiguration: {\n      Rules: [\n        {\n          ApplyServerSideEncryptionByDefault: {\n            SSEAlgorithm: "AES256",\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(o.b)("p",null,"Enable or disable the bucket lifecycle."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketLifecycleConfiguration-property"}),"LifecycleConfiguration properties page")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Lifecycle = await provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere`,\n  properties: () => ({\n    LifecycleConfiguration: {\n      Rules: [\n        {\n          Expiration: {\n            Days: 3650,\n          },\n          Filter: {\n            Prefix: "documents/",\n          },\n          ID: "TestOnly",\n          Status: "Enabled",\n          Transitions: [\n            {\n              Days: 365,\n              StorageClass: "GLACIER",\n            },\n          ],\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"logging"},"Logging"),Object(o.b)("p",null,"Enable logging of one bucket to another."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketLogging-property"}),"BucketLoggingStatus")," for as full list of properties."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The destination bucket must have its ",Object(o.b)("em",{parentName:"p"},"ACL")," set to ",Object(o.b)("em",{parentName:"p"},"log-delivery-write"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bucketLogDestination = `yourgloballyuniquebucketnamehere-log-destination`;\nawait provider.makeS3Bucket({\n  name: bucketLogDestination,\n  properties: () => ({\n    ACL: "log-delivery-write",\n  }),\n});\n\nawait provider.makeS3Bucket({\n  name: `${bucketName}-logged`,\n  properties: () => ({\n    BucketLoggingStatus: {\n      LoggingEnabled: {\n        TargetBucket: bucketLogDestination,\n        TargetPrefix: "MyBucketLogs/",\n        TargetGrants: [\n          {\n            Grantee: {\n              Type: "Group",\n              URI: "http://acs.amazonaws.com/groups/global/AllUsers",\n            },\n            Permission: "READ",\n          },\n        ],\n      },\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"notification"},"Notification"),Object(o.b)("p",null,"Set the notification configuration for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketNotificationConfiguration-property"}),"NotificationConfiguration properties page")," for a full list of supported options."),Object(o.b)("h4",{id:"notification-for-sns"},"Notification for SNS"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bucketName = "yourgloballyuniquebucketnamehere";\nconst topicId = "123456789012";\n\nawait provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere-notification-configuration`,\n  properties: () => ({\n    NotificationConfiguration: {\n      TopicConfigurations: [\n        {\n          Events: ["s3:ObjectCreated:*"],\n          TopicArn: `arn:aws:sns:us-west-2:${topicId}:s3-notification-topic`,\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h4",{id:"notification-for-lambda-function"},"Notification for Lambda Function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bucketName = "yourgloballyuniquebucketnamehere";\nconst lambdaFunctionArn = "123456789012";\n\nawait provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere-notification-configuration`,\n  properties: () => ({\n    NotificationConfiguration: {\n      LambdaFunctionConfigurations: [\n        {\n          Events: ["s3:ObjectCreated"],\n          LambdaFunctionArn,\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"policy"},"Policy"),Object(o.b)("p",null,"Set the policy configuration for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketPolicy-property"}),"Policy properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bucketName = "yourgloballyuniquebucketnamehere";\n\nconst s3pPolicy = await provider.makeS3Bucket({\n  name: bucketName,\n  properties: () => ({\n    Policy: JSON.stringify({\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Sid: "IPAllow",\n          Effect: "Deny",\n          Principal: "*",\n          Action: "s3:*",\n          Resource: `arn:aws:s3:::${bucketName}/*`,\n          Condition: {\n            IpAddress: { "aws:SourceIp": "8.8.8.8/32" },\n          },\n        },\n      ],\n    }),\n  }),\n});\n')),Object(o.b)("h3",{id:"replication"},"Replication"),Object(o.b)("p",null,"Set the replication configuration for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketReplication-property"}),"ReplicationConfiguration properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bucketName = "yourgloballyuniquebucketnamehere";\nconst iamUser = "1233445";\n\nconst s3Replication = await provider.makeS3Bucket({\n  name: bucketName,\n  properties: () => ({\n    ReplicationConfiguration: {\n      Role: `arn:aws:iam::${iamUser}:role/examplerole`,\n      Rules: [\n        {\n          Destination: {\n            Bucket: "arn:aws:s3:::destinationbucket",\n            StorageClass: "STANDARD",\n          },\n          Prefix: "",\n          Status: "Enabled",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"request-payment"},"Request Payment"),Object(o.b)("p",null,"Set the request payment option for this bucket."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketRequestPayment-property"}),"RequestPaymentConfiguration properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3RequestPayment = await provider.makeS3Bucket({\n  name: `yourgloballyuniquebucketnamehere`,\n  properties: () => ({\n    RequestPaymentConfiguration: { Payer: "Requester" },\n  }),\n});\n')),Object(o.b)("h3",{id:"tags"},"Tags"),Object(o.b)("p",null,"Set bucket tags."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Bucket = await provider.makeS3Bucket({\n  name: "yourgloballyuniquebucketnamehere",\n  properties: () => ({\n    Tagging: {\n      TagSet: [\n        {\n          Key: "Key1",\n          Value: "Value1",\n        },\n        {\n          Key: "Key2",\n          Value: "Value2",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"versioning"},"Versioning"),Object(o.b)("p",null,"Enable or disable the bucket versioning."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketVersioning-property"}),"VersioningConfiguration properties page")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Bucket = await provider.makeS3Bucket({\n  name: "yourgloballyuniquebucketnamehere",\n  properties: () => ({\n    VersioningConfiguration: {\n      MFADelete: "Disabled",\n      Status: "Enabled",\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"static-website"},"Static Website"),Object(o.b)("p",null,"Set the S3 bucket as a website."),Object(o.b)("p",null,"See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putBucketWebsite-property"}),"WebsiteConfiguration properties page")," for a full list of supported options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const s3Bucket = await provider.makeS3Bucket({\n  name: "yourgloballyuniquebucketnamehere",\n  properties: () => ({\n    ACL: "public-read",\n    WebsiteConfiguration: {\n      ErrorDocument: {\n        Key: "error.html",\n      },\n      IndexDocument: {\n        Suffix: "index.html",\n      },\n    },\n  }),\n});\n')),Object(o.b)("h2",{id:"examples-code"},"Examples Code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/s3/iac.js"}),"simple example"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property"}),"properties list"))),Object(o.b)("h2",{id:"aws-cli"},"AWS CLI"),Object(o.b)("p",null,"List the S3 buckets for the current account:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws s3 ls\n")),Object(o.b)("p",null,"Remove the bucket and all its content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws s3 rb --force s3://yourbucketnamehere\n")))}s.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,i(i({ref:t},u),{},{components:n})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);