"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2930],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),g=n,f=m["".concat(i,".").concat(g)]||m[g]||p[g]||c;return t?o.createElement(f,a(a({ref:r},l),{},{components:t})):o.createElement(f,a({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<c;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9749:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var o=t(7462),n=t(3366),c=(t(7294),t(3905)),a=["components"],s={id:"ResourcesList",title:"Resources List"},i=void 0,u={unversionedId:"google/ResourcesList",id:"google/ResourcesList",isDocsHomePage:!1,title:"Resources List",description:"List of resources for provider google:",source:"@site/docs/google/GcpResources.md",sourceDirName:"google",slug:"/google/ResourcesList",permalink:"/docs/google/ResourcesList",tags:[],version:"current",frontMatter:{id:"ResourcesList",title:"Resources List"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/aws/AwsRequirements"},next:{title:"Address",permalink:"/docs/google/resources/compute/Address"}},l=[],p={toc:l};function m(e){var r=e.components,t=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"List of resources for provider google:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"storage:\n",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/storage/Bucket"},"Bucket"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/storage/Object"},"Object")),(0,c.kt)("li",{parentName:"ul"},"iam:\n",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/iam/ServiceAccount"},"ServiceAccount"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/iam/Policy"},"Policy"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/iam/Binding"},"Binding")),(0,c.kt)("li",{parentName:"ul"},"compute:\n",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/SslCertificate"},"SslCertificate"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/BackendBucket"},"BackendBucket"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/UrlMap"},"UrlMap"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/HttpsTargetProxy"},"HttpsTargetProxy"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/GlobalForwardingRule"},"GlobalForwardingRule"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Network"},"Network"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/SubNetwork"},"SubNetwork"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Firewall"},"Firewall"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Address"},"Address"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Disk"},"Disk"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/VmInstance"},"VmInstance")),(0,c.kt)("li",{parentName:"ul"},"dns:\n",(0,c.kt)("a",{parentName:"li",href:"./resources/dns/ManagedZone.md"},"ManagedZone")),(0,c.kt)("li",{parentName:"ul"},"run:\n",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/run/Service"},"Service"),", ",(0,c.kt)("a",{parentName:"li",href:"/docs/google/resources/run/ServiceIamMember"},"ServiceIamMember"))))}m.isMDXComponent=!0}}]);