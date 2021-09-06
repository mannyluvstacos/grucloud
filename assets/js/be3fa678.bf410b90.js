(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),i=(a(0),a(229)),p={id:"ApiGatewayV2Stage",title:"Stage"},c={unversionedId:"aws/resources/ApiGatewayV2/ApiGatewayV2Stage",id:"aws/resources/ApiGatewayV2/ApiGatewayV2Stage",isDocsHomePage:!1,title:"Stage",description:"Manages an Api Gateway V2 Stage.",source:"@site/docs/aws/resources/ApiGatewayV2/Stage.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/ApiGatewayV2Stage",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Stage",version:"current",frontMatter:{id:"ApiGatewayV2Stage",title:"Stage"},sidebar:"docs",previous:{title:"Route",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Route"},next:{title:"AutoScaling Group",permalink:"/docs/aws/resources/AutoScaling/AutoScalingGroup"}},o=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],l={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Manages an ",Object(i.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 Stage"),"."),Object(i.b)("h2",{id:"sample-code"},"Sample code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const api = provider.ApiGatewayV2.makeApi({\n  name: "my-api",\n  properties: () => ({}),\n});\n\nconst stage = provider.ApiGatewayV2.makeStage({\n  name: "my-api-stage-dev",\n  dependencies: { api },\n  properties: () => ({}),\n});\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createStage-property"},"create properties"))),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./ApiGatewayV2Api"},"API"))),Object(i.b)("h2",{id:"used-by"},"Used By"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./ApiGatewayV2ApiMapping"},"ApiMapping")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./ApiGatewayV2Deployment"},"Deployment"))),Object(i.b)("h2",{id:"full-examples"},"Full Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),Object(i.b)("h2",{id:"list"},"List"),Object(i.b)("p",null,"The Stages can be filtered with the ",Object(i.b)("em",{parentName:"p"},"Stage")," type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Stage\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"")))}s.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<i;l++)p[l]=a[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);