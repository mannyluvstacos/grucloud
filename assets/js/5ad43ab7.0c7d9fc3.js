(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{128:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return i})),o.d(n,"default",(function(){return d}));var r=o(3),t=(o(0),o(201));const a={id:"Route53Record",title:"Route53 Record"},c={unversionedId:"aws/resources/Route53/Route53Record",id:"aws/resources/Route53/Route53Record",isDocsHomePage:!1,title:"Route53 Record",description:"Provides a single Route53 Record",source:"@site/docs/aws/resources/Route53/Route53Record.md",sourceDirName:"aws/resources/Route53",slug:"/aws/resources/Route53/Route53Record",permalink:"/docs/aws/resources/Route53/Route53Record",version:"current",frontMatter:{id:"Route53Record",title:"Route53 Record"},sidebar:"docs",previous:{title:"Hosted Zone",permalink:"/docs/aws/resources/Route53/Route53HostedZone"},next:{title:"Route53 Domains",permalink:"/docs/aws/resources/Route53Domain/Route53Domain"}},i=[{value:"Examples",id:"examples",children:[{value:"A Record",id:"a-record",children:[]},{value:"CNAME from a certificate",id:"cname-from-a-certificate",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],s={toc:i};function d({components:e,...n}){return Object(t.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Provides a single ",Object(t.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/route53/v2/home#Dashboard"},"Route53 Record")),Object(t.b)("h2",{id:"examples"},"Examples"),Object(t.b)("h3",{id:"a-record"},"A Record"),Object(t.b)("p",null,"Add an A record to the hosted zone:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nconst domain = provider.route53Domain.useDomain({\n  name: domainName,\n});\n\nconst hostedZoneName = `${domainName}.`;\nconst hostedZone = provider.route53.makeHostedZone({\n  name: hostedZoneName,\n  dependencies: { domain },\n  properties: ({}) => ({}),\n});\n\nconst recordA = provider.route53.makeRecord({\n  name: `${hostedZoneName}-ipv4`,\n  dependencies: { hostedZone, eip },\n  properties: ({ dependencies: { eip } }) => {\n    return {\n      Name: hostedZoneName,\n      Type: "A",\n      ResourceRecords: [\n        {\n          Value: eip.live?.PublicIp,\n        },\n      ],\n      TTL: 60,\n    };\n  },\n});\n')),Object(t.b)("h3",{id:"cname-from-a-certificate"},"CNAME from a certificate"),Object(t.b)("p",null,"Verify a certificate with DNS validation by adding a CNAME record."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nconst domain = provider.route53Domain.useDomain({\n  name: domainName,\n});\n\nconst hostedZone = provider.route53.makeHostedZone({\n  name: `${domainName}.`,\n  dependencies: { domain },\n  properties: ({}) => ({}),\n});\n\nconst recordValidation = provider.route53.makeRecord({\n  name: `validation-${domainName}.`,\n  dependencies: { hostedZone, certificate },\n  properties: ({ dependencies: { certificate } }) => {\n    const domainValidationOption =\n      certificate?.live?.DomainValidationOptions[0];\n    const record = domainValidationOption?.ResourceRecord;\n    if (domainValidationOption) {\n      assert(\n        record,\n        `missing record in DomainValidationOptions, certificate ${JSON.stringify(\n          certificate.live\n        )}`\n      );\n    }\n    return {\n      Name: record?.Name,\n      ResourceRecords: [\n        {\n          Value: record?.Value,\n        },\n      ],\n      TTL: 300,\n      Type: "CNAME",\n    };\n  },\n});\n')),Object(t.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js"},"https static website ")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://github.com/FredericHeem/starhackit/blob/master/deploy/grucloud-aws/iac.js"},"starhack.it")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/route53/dns-validation-record-txt/iac.js"},"TXT record and hosted zone "))),Object(t.b)("h2",{id:"properties"},"Properties"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#changeResourceRecordSets-property"},"properties list"))),Object(t.b)("h2",{id:"dependencies"},"Dependencies"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"./Route53HostedZone"},"Route53 HostedZone"))),Object(t.b)("h2",{id:"list"},"List"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-txt"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 route53::Record from aws                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name               \u2502 Data                                           \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud.org.::NS  \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: NS                                       \u2502      \u2502\n\u2502                    \u2502 TTL: 172800                                    \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1907.awsdns-46.co.uk.            \u2502      \u2502\n\u2502                    \u2502   - Value: ns-15.awsdns-01.com.                \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1423.awsdns-49.org.              \u2502      \u2502\n\u2502                    \u2502   - Value: ns-514.awsdns-00.net.               \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud.org.::SOA \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: SOA                                      \u2502      \u2502\n\u2502                    \u2502 TTL: 900                                       \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1907.awsdns-46.co.uk. awsdns-ho\u2026 \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 txt.grucloud.org.  \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: TXT                                      \u2502      \u2502\n\u2502                    \u2502 TTL: 60                                        \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: "google-site-verification=q_tZuuK8\u2026 \u2502      \u2502\n\u2502                    \u2502 Tags:                                          \u2502      \u2502\n\u2502                    \u2502   - Key: gc-managed-by                         \u2502      \u2502\n\u2502                    \u2502     Value: grucloud                            \u2502      \u2502\n\u2502                    \u2502   - Key: gc-project-name                       \u2502      \u2502\n\u2502                    \u2502     Value: @grucloud/example-aws-route53-dns-\u2026 \u2502      \u2502\n\u2502                    \u2502   - Key: gc-stage                              \u2502      \u2502\n\u2502                    \u2502     Value: dev                                 \u2502      \u2502\n\u2502                    \u2502   - Key: gc-record-txt.grucloud.org.           \u2502      \u2502\n\u2502                    \u2502     Value: grucloud.org.::TXT                  \u2502      \u2502\n\u2502                    \u2502   - Key: gc-created-by-provider                \u2502      \u2502\n\u2502                    \u2502     Value: aws                                 \u2502      \u2502\n\u2502                    \u2502   - Key: Name                                  \u2502      \u2502\n\u2502                    \u2502     Value: grucloud.org.                       \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502 namespace:                                     \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')))}d.isMDXComponent=!0},201:function(e,n,o){"use strict";o.d(n,"a",(function(){return l})),o.d(n,"b",(function(){return b}));var r=o(0),t=o.n(r);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),u=function(e){var n=t.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=u(e.components);return t.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(o),m=r,b=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return o?t.a.createElement(b,i(i({ref:n},d),{},{components:o})):t.a.createElement(b,i({ref:n},d))}));function b(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=o[d];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);