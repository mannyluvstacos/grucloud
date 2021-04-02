(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(207)),i={id:"K8sGettingStarted",title:"Getting Started with Kubernetes"},o={id:"k8s/K8sGettingStarted",isDocsHomePage:!1,title:"Getting Started with Kubernetes",description:"Introduction",source:"@site/docs/k8s/K8sGettingStarted.md",permalink:"/docs/k8s/K8sGettingStarted",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/docs/k8s/K8sRequirements"},next:{title:"ConfigMap",permalink:"/docs/k8s/resources/ConfigMap"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Getting the code",id:"getting-the-code",children:[]},{value:"config.js",id:"configjs",children:[]}]},{value:"Plan",id:"plan",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"List",id:"list",children:[]},{value:"Destroy",id:"destroy",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"The Kubernetes Grucloud provider allows to define and describe Kubernetes resources in Javascript, removing the need to write YAML or templating file."),Object(c.b)("p",null,"The GruCloud Command Line Interface ",Object(c.b)("strong",{parentName:"p"},"gc")," reads this description in Javascript and connect to the k8s control plane to apply the new or updated resource definitions."),Object(c.b)("p",null,"Let's deploy a full-stack application on kubernetes locally with minikube."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"a frontend (React)"),Object(c.b)("li",{parentName:"ul"},"a backend (Node.js)"),Object(c.b)("li",{parentName:"ul"},"an SQL database (postgres)"),Object(c.b)("li",{parentName:"ul"},"Key/Value, Pub/Sub (redis)")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/k8s/starhackit/minikube/grucloud.svg",alt:"starhackit-grucloud"}))),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("p",null,"Ensure ",Object(c.b)("strong",{parentName:"p"},"kubectl")," and ",Object(c.b)("strong",{parentName:"p"},"minikube")," is started with the ingress addon: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/k8s/K8sRequirements"}),"K8s Requirements")),Object(c.b)("h3",{id:"getting-the-code"},"Getting the code"),Object(c.b)("p",null,"Install the ",Object(c.b)("em",{parentName:"p"},"grucloud")," command line utility: ",Object(c.b)("strong",{parentName:"p"},"gc")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @grucloud/core\n")),Object(c.b)("p",null,"Clone the source code containing the examples:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:grucloud/grucloud.git\n")),Object(c.b)("p",null,"Change the k8s minikube directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd grucloud/examples/k8s/starhackit/minikube\n")),Object(c.b)("p",null,"Install the node dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(c.b)("h3",{id:"configjs"},"config.js"),Object(c.b)("p",null,"Edit ",Object(c.b)("strong",{parentName:"p"},"config.js")," and eventually change the configuration."),Object(c.b)("h2",{id:"plan"},"Plan"),Object(c.b)("p",null,"Find out which resources are going to be allocated:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc plan\n")),Object(c.b)("h2",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc deploy\n")),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"List all the resources:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc list\n")),Object(c.b)("h2",{id:"destroy"},"Destroy"),Object(c.b)("p",null,"Time to destroy the resources allocated:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc destroy\n")))}b.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||c;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);