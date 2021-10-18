(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(232)),c={id:"AcmCertificate",title:"Certificate"},o={unversionedId:"aws/resources/ACM/AcmCertificate",id:"aws/resources/ACM/AcmCertificate",isDocsHomePage:!1,title:"Certificate",description:"Provides an SSL certificate.",source:"@site/docs/aws/resources/ACM/AcmCertificate.md",sourceDirName:"aws/resources/ACM",slug:"/aws/resources/ACM/AcmCertificate",permalink:"/docs/aws/resources/ACM/AcmCertificate",version:"current",frontMatter:{id:"AcmCertificate",title:"Certificate"},sidebar:"docs",previous:{title:"Kubernetes Modules",permalink:"/docs/k8s/K8sModules"},next:{title:"Account",permalink:"/docs/aws/resources/APIGateway/APIGatewayAccount"}},s=[{value:"Examples",id:"examples",children:[{value:"Create a certificate with DNS validation",id:"create-a-certificate-with-dns-validation",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"UsedBy",id:"usedby",children:[]},{value:"List",id:"list",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides an SSL certificate."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Certificates for CloudFront must be created in the us-east-1 region only.")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"create-a-certificate-with-dns-validation"},"Create a certificate with DNS validation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nconst certificate = provider.ACM.makeCertificate({\n  name: domainName,\n  properties: () => ({}),\n});\n\nconst domain = provider.Route53Domain.useDomain({\n  name: domainName,\n});\nconst hostedZone = provider.Route53.makeHostedZone({\n  name: `${domainName}.`,\n  dependencies: { domain },\n});\n\nconst recordValidation = provider.Route53.makeRecord({\n  name: `certificate-validation-${domainName}.`,\n  dependencies: { hostedZone, certificate },\n  properties: ({ dependencies: { certificate } }) => {\n    const domainValidationOption =\n      certificate?.live?.DomainValidationOptions[0];\n    const record = domainValidationOption?.ResourceRecord;\n    if (domainValidationOption) {\n      assert(\n        record,\n        `missing record in DomainValidationOptions, certificate ${JSON.stringify(\n          certificate.live\n        )}`\n      );\n    }\n    return {\n      Name: record?.Name,\n      ResourceRecords: [\n        {\n          Value: record?.Value,\n        },\n      ],\n      TTL: 300,\n      Type: "CNAME",\n    };\n  },\n});\n')),Object(i.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/certificate/iac.js#L26"},"module-aws-certificate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js"},"https static website"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ACM.html#requestCertificate-property"},"properties list"))),Object(i.b)("h2",{id:"usedby"},"UsedBy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../Route53/Route53HostedZone"},"Rotue53 Hosted Zone")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../CloudFront/CloudFrontDistribution"},"CloudFront Distribution")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../APIGateway/APIGatewayDomainName"},"APIGateway Domain Name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../ApiGatewayV2/ApiGatewayV2DomainName"},"ApiGatewayV2 Domain Name"))),Object(i.b)("h2",{id:"list"},"List"),Object(i.b)("p",null,"The list of certificates can be displayed and filtered with the type ",Object(i.b)("strong",{parentName:"p"},"Certificate"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"gc list -t Certificate\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 Certificate from aws                                                                                                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                                     \u2502 Data                                                                                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 dev.example-module-aws-certificate.gruc\u2026 \u2502 CertificateArn: arn:aws:acm:eu-west-2:840541460064:certificate/e7aa0b10-1606-4c90-b9cd-accde2259716   \u2502 Yes  \u2502\n\u2502                                          \u2502 DomainName: dev.example-module-aws-certificate.grucloud.org                                           \u2502      \u2502\n\u2502                                          \u2502 SubjectAlternativeNames:                                                                              \u2502      \u2502\n\u2502                                          \u2502   - "dev.example-module-aws-certificate.grucloud.org"                                                 \u2502      \u2502\n\u2502                                          \u2502 DomainValidationOptions:                                                                              \u2502      \u2502\n\u2502                                          \u2502   - DomainName: dev.example-module-aws-certificate.grucloud.org                                       \u2502      \u2502\n\u2502                                          \u2502     ValidationDomain: dev.example-module-aws-certificate.grucloud.org                                 \u2502      \u2502\n\u2502                                          \u2502     ValidationStatus: SUCCESS                                                                         \u2502      \u2502\n\u2502                                          \u2502     ResourceRecord:                                                                                   \u2502      \u2502\n\u2502                                          \u2502       Name: _b43939171abf0b1c5022e767067716ea.dev.example-module-aws-certificate.grucloud.org.        \u2502      \u2502\n\u2502                                          \u2502       Type: CNAME                                                                                     \u2502      \u2502\n\u2502                                          \u2502       Value: _da38df93563490b16daee8c697da91ec.zjfbrrwmzc.acm-validations.aws.                        \u2502      \u2502\n\u2502                                          \u2502     ValidationMethod: DNS                                                                             \u2502      \u2502\n\u2502                                          \u2502 Serial: 0e:c9:76:47:08:94:d4:b2:70:db:4a:42:37:b1:13:62                                               \u2502      \u2502\n\u2502                                          \u2502 Subject: CN=dev.example-module-aws-certificate.grucloud.org                                           \u2502      \u2502\n\u2502                                          \u2502 Issuer: Amazon                                                                                        \u2502      \u2502\n\u2502                                          \u2502 CreatedAt: 2021-04-03T01:31:53.000Z                                                                   \u2502      \u2502\n\u2502                                          \u2502 IssuedAt: 2021-04-03T01:32:33.000Z                                                                    \u2502      \u2502\n\u2502                                          \u2502 Status: ISSUED                                                                                        \u2502      \u2502\n\u2502                                          \u2502 NotBefore: 2021-04-03T00:00:00.000Z                                                                   \u2502      \u2502\n\u2502                                          \u2502 NotAfter: 2022-05-02T23:59:59.000Z                                                                    \u2502      \u2502\n\u2502                                          \u2502 KeyAlgorithm: RSA-2048                                                                                \u2502      \u2502\n\u2502                                          \u2502 SignatureAlgorithm: SHA256WITHRSA                                                                     \u2502      \u2502\n\u2502                                          \u2502 InUseBy: []                                                                                           \u2502      \u2502\n\u2502                                          \u2502 Type: AMAZON_ISSUED                                                                                   \u2502      \u2502\n\u2502                                          \u2502 KeyUsages:                                                                                            \u2502      \u2502\n\u2502                                          \u2502   - Name: DIGITAL_SIGNATURE                                                                           \u2502      \u2502\n\u2502                                          \u2502   - Name: KEY_ENCIPHERMENT                                                                            \u2502      \u2502\n\u2502                                          \u2502 ExtendedKeyUsages:                                                                                    \u2502      \u2502\n\u2502                                          \u2502   - Name: TLS_WEB_SERVER_AUTHENTICATION                                                               \u2502      \u2502\n\u2502                                          \u2502     OID: 1.3.6.1.5.5.7.3.1                                                                            \u2502      \u2502\n\u2502                                          \u2502   - Name: TLS_WEB_CLIENT_AUTHENTICATION                                                               \u2502      \u2502\n\u2502                                          \u2502     OID: 1.3.6.1.5.5.7.3.2                                                                            \u2502      \u2502\n\u2502                                          \u2502 RenewalEligibility: INELIGIBLE                                                                        \u2502      \u2502\n\u2502                                          \u2502 Options:                                                                                              \u2502      \u2502\n\u2502                                          \u2502   CertificateTransparencyLoggingPreference: ENABLED                                                   \u2502      \u2502\n\u2502                                          \u2502 Tags:                                                                                                 \u2502      \u2502\n\u2502                                          \u2502   - Key: ManagedBy                                                                                    \u2502      \u2502\n\u2502                                          \u2502     Value: GruCloud                                                                                   \u2502      \u2502\n\u2502                                          \u2502   - Key: stage                                                                                        \u2502      \u2502\n\u2502                                          \u2502     Value: dev                                                                                        \u2502      \u2502\n\u2502                                          \u2502   - Key: projectName                                                                                  \u2502      \u2502\n\u2502                                          \u2502     Value: @grucloud/example-module-aws-certificate                                                   \u2502      \u2502\n\u2502                                          \u2502   - Key: CreatedByProvider                                                                            \u2502      \u2502\n\u2502                                          \u2502     Value: aws                                                                                        \u2502      \u2502\n\u2502                                          \u2502   - Key: Name                                                                                         \u2502      \u2502\n\u2502                                          \u2502     Value: dev.example-module-aws-certificate.grucloud.org                                            \u2502      \u2502\n\u2502                                          \u2502                                                                                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                                                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Certificate        \u2502 dev.example-module-aws-certificate.grucloud.org                                                                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')))}u.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return a?r.a.createElement(b,o(o({ref:t},l),{},{components:a})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);