"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6919],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(d,u(u({ref:r},p),{},{components:t})):n.createElement(d,u({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2818:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),u=["components"],o={id:"AzureExamples",title:"Azure Examples"},c=void 0,l={unversionedId:"azure/AzureExamples",id:"azure/AzureExamples",isDocsHomePage:!1,title:"Azure Examples",description:"Virtual Machine",source:"@site/docs/azure/AzureExamples.md",sourceDirName:"azure",slug:"/azure/AzureExamples",permalink:"/docs/azure/AzureExamples",tags:[],version:"current",frontMatter:{id:"AzureExamples",title:"Azure Examples"}},p=[{value:"Virtual Machine",id:"virtual-machine",children:[{value:"Virtual Machine inside a VPC",id:"virtual-machine-inside-a-vpc",children:[],level:3}],level:2}],s={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"virtual-machine"},"Virtual Machine"),(0,i.kt)("h3",{id:"virtual-machine-inside-a-vpc"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/grucloud/grucloud/tree/main/examples/azure/vm"},"Virtual Machine inside a VPC")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/azure/vm/artifacts/diagram-target.svg",alt:"Virtual Machine"})))}m.isMDXComponent=!0}}]);