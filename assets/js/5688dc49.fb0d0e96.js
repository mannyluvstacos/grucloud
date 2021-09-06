(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(229)),i={id:"APIGatewayIntegration",title:"Integration"},c={unversionedId:"aws/resources/APIGateway/APIGatewayIntegration",id:"aws/resources/APIGateway/APIGatewayIntegration",isDocsHomePage:!1,title:"Integration",description:"Manages an API Gateway Integration.",source:"@site/docs/aws/resources/APIGateway/Integration.md",sourceDirName:"aws/resources/APIGateway",slug:"/aws/resources/APIGateway/APIGatewayIntegration",permalink:"/docs/aws/resources/APIGateway/APIGatewayIntegration",version:"current",frontMatter:{id:"APIGatewayIntegration",title:"Integration"},sidebar:"docs",previous:{title:"Domain Name",permalink:"/docs/aws/resources/APIGateway/APIGatewayDomainName"},next:{title:"Resource",permalink:"/docs/aws/resources/APIGateway/APIGatewayResource"}},l=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages an ",Object(o.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"API Gateway Integration"),"."),Object(o.b)("h2",{id:"sample-code"},"Sample code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const restApi = provider.APIGateway.makeRestApi({\n  name: "myRestApi",\n  properties: () => ({ endpointConfiguration: { types: ["REGIONAL"] } }),\n});\n\nconst integration = provider.APIGateway.makeIntegration({\n  name: "integration-lambda",\n  dependencies: {\n    restApi,\n    resource: resourceGet,\n    lambdaFunction: lambdaFunction,\n  },\n  properties: () => ({\n    httpMethod: "GET",\n    type: "AWS_PROXY",\n  }),\n});\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#putIntegration-property"},"create properties"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./APIGatewayRestApi"},"RestAPI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./APIGatewayResource"},"Resource")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../Lambda/Function"},"Lambda Function"))),Object(o.b)("h2",{id:"full-examples"},"Full Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway/restapi-lambda"},"RestAPI with Lambda"))),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,"The Integrations can be filtered with the ",Object(o.b)("em",{parentName:"p"},"Integration")," type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Integration\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"")))}s.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);