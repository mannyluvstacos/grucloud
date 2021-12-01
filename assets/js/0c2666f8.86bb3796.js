"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6726],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?t.createElement(f,o(o({ref:a},p),{},{components:n})):t.createElement(f,o({ref:a},p))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7810:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"DomainName",title:"DomainName"},l=void 0,s={unversionedId:"aws/resources/ApiGatewayV2/DomainName",id:"aws/resources/ApiGatewayV2/DomainName",isDocsHomePage:!1,title:"DomainName",description:"Manages an Api Gateway V2 Domain Name.",source:"@site/docs/aws/resources/ApiGatewayV2/DomainName.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/DomainName",permalink:"/docs/aws/resources/ApiGatewayV2/DomainName",tags:[],version:"current",frontMatter:{id:"DomainName",title:"DomainName"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/aws/resources/ApiGatewayV2/Deployment"},next:{title:"Integration",permalink:"/docs/aws/resources/ApiGatewayV2/Integration"}},p=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],u={toc:p};function m(e){var a=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Manages an ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 Domain Name"),"."),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.ApiGatewayV2.makeDomainName({\n  name: "grucloud.org",\n  dependencies: ({ resources }) => ({\n    certificate: resources.ACM.Certificate.grucloudOrg,\n  }),\n});\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createDomainName-property"},"create properties"))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/aws/resources/ACM/Certificate"},"Certificate"))),(0,i.kt)("h2",{id:"full-examples"},"Full Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),(0,i.kt)("h2",{id:"list"},"List"),(0,i.kt)("p",null,"The DomainNames can be filtered with the ",(0,i.kt)("em",{parentName:"p"},"ApiGatewayV2::DomainName")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t ApiGatewayV2::DomainName\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 2/2\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ApiGatewayV2::DomainName from aws                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: grucloud.org                                                                 \u2502\n\u2502 managedByUs: Yes                                                                   \u2502\n\u2502 live:                                                                              \u2502\n\u2502   ApiMappingSelectionExpression: $request.basepath                                 \u2502\n\u2502   DomainName: grucloud.org                                                         \u2502\n\u2502   DomainNameConfigurations:                                                        \u2502\n\u2502     - ApiGatewayDomainName: d-m8wiox98oj.execute-api.eu-west-2.amazonaws.com       \u2502\n\u2502       CertificateArn: arn:aws:acm:eu-west-2:840541460064:certificate/d71ce4f7-df6\u2026 \u2502\n\u2502       CertificateName: null                                                        \u2502\n\u2502       CertificateUploadDate: null                                                  \u2502\n\u2502       DomainNameStatus: AVAILABLE                                                  \u2502\n\u2502       DomainNameStatusMessage: null                                                \u2502\n\u2502       EndpointType: REGIONAL                                                       \u2502\n\u2502       HostedZoneId: ZJ5UAJN8Y3Z2Q                                                  \u2502\n\u2502       SecurityPolicy: TLS_1_2                                                      \u2502\n\u2502       OwnershipVerificationCertificateArn: null                                    \u2502\n\u2502   Tags:                                                                            \u2502\n\u2502     gc-project-name: @grucloud/example-aws-api-gateway-lambda                      \u2502\n\u2502     gc-managed-by: grucloud                                                        \u2502\n\u2502     gc-stage: dev                                                                  \u2502\n\u2502     gc-created-by-provider: aws                                                    \u2502\n\u2502     Name: grucloud.org                                                             \u2502\n\u2502                                                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                               \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ApiGatewayV2::DomainName \u2502 grucloud.org                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t ApiGatewayV2::DomainName" executed in 6s\n')))}m.isMDXComponent=!0}}]);