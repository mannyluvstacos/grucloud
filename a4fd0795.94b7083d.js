(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(161));const c={id:"GoogleGettingStarted",title:"Getting Started"},o={id:"google/GoogleGettingStarted",isDocsHomePage:!1,title:"Getting Started",description:"Let's create a simple infrastructure with a server running ubuntu, connected to a public ip address, accessible through SSH.",source:"@site/docs/google/GoogleGettingStarted.md",permalink:"/docs/google/GoogleGettingStarted",sidebar:"someSidebar",previous:{title:"Google Requirements",permalink:"/docs/google/GoogleRequirements"},next:{title:"Network",permalink:"/docs/google/resources/Compute/Network"}},l=[{value:"Getting the code",id:"getting-the-code",children:[{value:"Config",id:"config",children:[]}]},{value:"Plan",id:"plan",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"List",id:"list",children:[]},{value:"Destroy",id:"destroy",children:[]}],i={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's create a simple infrastructure with a server running ubuntu, connected to a public ip address, accessible through SSH."),Object(a.b)("p",null,"First of all, make sure all the gcp prerequisites has been met: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/google/GoogleRequirements"}),"GoogleRequirements")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud info\n")),Object(a.b)("p",null,"To go further, you'll need a ",Object(a.b)("strong",{parentName:"p"},"service account"),", ",Object(a.b)("strong",{parentName:"p"},"project"),", ",Object(a.b)("strong",{parentName:"p"},"region")," and ",Object(a.b)("strong",{parentName:"p"},"zone")),Object(a.b)("h2",{id:"getting-the-code"},"Getting the code"),Object(a.b)("p",null,"Install the grucloud command line utility: ",Object(a.b)("strong",{parentName:"p"},"gc")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @grucloud/core\n")),Object(a.b)("p",null,"Clone one of the example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:grucloud/grucloud.git\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd grucloud/examples/google/vm\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("h3",{id:"config"},"Config"),Object(a.b)("p",null,"Find out the default region, zone and project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud config list\n")),Object(a.b)("p",null,"Now it is time to edit the infrastructure ",Object(a.b)("strong",{parentName:"p"},"iac.js")," file that describes the architecture:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const GoogleProvider = require("@grucloud/core").GoogleProvider;\n\nconst config = require("./config");\n\nexports.createStack = async ({ options }) => {\n  // Create GCP provider\n  const provider = GoogleProvider({ name: "google" }, config);\n  // Allocate public Ip address\n  const ip = await provider.makeAddress({ name: "ip-webserver" });\n  // Allocate a server\n  const server = await provider.makeVmInstance({\n    name: "web-server",\n    dependencies: { ip },\n    properties: () => ({\n      machineType: "e2-micro",\n    }),\n  });\n\n  return { provider };\n};\n')),Object(a.b)("h2",{id:"plan"},"Plan"),Object(a.b)("p",null,"Find out which resources are going to be allocated:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc plan\n")),Object(a.b)("h2",{id:"deploy"},"Deploy"),Object(a.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc apply\n")),Object(a.b)("p",null,"Verify the newly created server is accessible:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud compute ssh web-server\n")),Object(a.b)("h2",{id:"list"},"List"),Object(a.b)("p",null,"List the available resources with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list\n")),Object(a.b)("h2",{id:"destroy"},"Destroy"),Object(a.b)("p",null,"Time to destroy the resouces allocated:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc destroy\n")))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,g=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(g,l(l({ref:t},p),{},{components:n})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);