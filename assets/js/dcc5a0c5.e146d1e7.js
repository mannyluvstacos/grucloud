"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={id:"Deployment",title:"Deployment"},l=void 0,s={unversionedId:"aws/resources/ApiGatewayV2/Deployment",id:"aws/resources/ApiGatewayV2/Deployment",isDocsHomePage:!1,title:"Deployment",description:"Manages an Api Gateway V2 Deployment.",source:"@site/docs/aws/resources/ApiGatewayV2/Deployment.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/Deployment",permalink:"/docs/aws/resources/ApiGatewayV2/Deployment",tags:[],version:"current",frontMatter:{id:"Deployment",title:"Deployment"},sidebar:"docs",previous:{title:"Authorizer",permalink:"/docs/aws/resources/ApiGatewayV2/Authorizer"},next:{title:"DomainName",permalink:"/docs/aws/resources/ApiGatewayV2/DomainName"}},c=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manages an ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 Deployment"),"."),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const api = provider.ApiGatewayV2.makeApi({\n  name: "my-api",\n  properties: () => ({}),\n});\n\nconst stage = provider.ApiGatewayV2.makeStage({\n  name: "my-api-stage-dev",\n  dependencies: { api },\n  properties: () => ({}),\n});\n\nprovider.ApiGatewayV2.makeDeployment({\n  name: "my-api-deployment",\n  dependencies: { api, stage },\n  properties: () => ({}),\n});\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createDeployment-property"},"create properties"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Api"},"API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/Stage"},"Stage"))),(0,o.kt)("h2",{id:"full-examples"},"Full Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"The Deployments can be filtered with the ",(0,o.kt)("em",{parentName:"p"},"Deployment")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Deployment\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"")))}m.isMDXComponent=!0}}]);