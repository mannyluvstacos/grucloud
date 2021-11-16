(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{209:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(8),o=(t(0),t(241)),c={id:"VirtualMachine",title:"Virtual Machine"},i={unversionedId:"azure/resources/compute/VirtualMachine",id:"azure/resources/compute/VirtualMachine",isDocsHomePage:!1,title:"Virtual Machine",description:"Provides a Virtual Machine:",source:"@site/docs/azure/resources/compute/VirtualMachine.md",sourceDirName:"azure/resources/compute",slug:"/azure/resources/compute/VirtualMachine",permalink:"/docs/azure/resources/compute/VirtualMachine",version:"current",frontMatter:{id:"VirtualMachine",title:"Virtual Machine"},sidebar:"docs",previous:{title:"Resources List",permalink:"/docs/azure/ResourcesList"},next:{title:"Resource Group",permalink:"/docs/azure/resources/resourceManagement/ResourceGroup"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],s={toc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a Virtual Machine:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'provider.compute.makeVirtualMachine({\n  name: "vm",\n  properties: ({ config }) => ({\n    properties: {\n      hardwareProfile: {\n        vmSize: "Standard_A1_v2",\n      },\n      storageProfile: {\n        imageReference: {\n          publisher: "Canonical",\n          offer: "UbuntuServer",\n          sku: "18.04-LTS",\n          version: "latest",\n        },\n      },\n      osProfile: {\n        computerName: "myVM",\n        adminUsername: "ops",\n        linuxConfiguration: {\n          disablePasswordAuthentication: false,\n          provisionVMAgent: true,\n        },\n        allowExtensionOperations: true,\n        adminPassword: process.env.VM_ADMIN_PASSWORD,\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.resourceManagement.ResourceGroup["resource-group"],\n    networkInterface:\n      resources.virtualNetworks.NetworkInterface["network-interface"],\n  }),\n});\n')),Object(o.b)("p",null,"Retrieve the list of all possible virtual machine on a given location:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"az vm list-sizes  --output table --location uksouth\n")),Object(o.b)("p",null,"Regarding the ",Object(o.b)("em",{parentName:"p"},"imageReference"),", execute this command and select the desired image:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"az vm image list  --output table\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/resources.js"},"basic example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#request-body"},"all properties"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/azure/resources/resourceManagement/ResourceGroup"},"ResourceGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/azure/resources/virtualNetworks/NetworkInterface"},"NetworkInterface"))))}l.isMDXComponent=!0},241:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return t?a.a.createElement(d,i(i({ref:r},s),{},{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);