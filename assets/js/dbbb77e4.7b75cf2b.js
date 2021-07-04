(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(198)),c={id:"AzureGettingStarted",title:"Azure Getting Started"},i={unversionedId:"azure/AzureGettingStarted",id:"azure/AzureGettingStarted",isDocsHomePage:!1,title:"Azure Getting Started",description:"Let's create a simple infrastructure with the following resources:",source:"@site/docs/azure/AzureGettingStarted.md",sourceDirName:"azure",slug:"/azure/AzureGettingStarted",permalink:"/docs/azure/AzureGettingStarted",version:"current",frontMatter:{id:"AzureGettingStarted",title:"Azure Getting Started"},sidebar:"docs",previous:{title:"GCP Getting Started",permalink:"/docs/google/GoogleGettingStarted"},next:{title:"Kubernetes Getting Started",permalink:"/docs/k8s/K8sGettingStarted"}},s=[{value:"Getting the code",id:"getting-the-code",children:[{value:"Environment",id:"environment",children:[]},{value:"Config",id:"config",children:[]}]},{value:"Plan",id:"plan",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"List",id:"list",children:[]},{value:"Destroy",id:"destroy",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's create a simple infrastructure with the following resources:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/ResourceGroup"},"Resource Group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/VirtualNetwork"},"Virtual Network")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/SecurityGroup"},"Security Group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/PublicIpAddress"},"Public Ip Address")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/NetworkInterface"},"Network Interface")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./resources/VirtualMachine"},"Virtual Machine"))),Object(o.b)("p",null,"First of all, ensure all the Azure prerequisites has been met: ",Object(o.b)("a",{parentName:"p",href:"/docs/azure/AzureRequirements"},"AzureRequirements")),Object(o.b)("h2",{id:"getting-the-code"},"Getting the code"),Object(o.b)("p",null,"Install the grucloud command line utility: ",Object(o.b)("strong",{parentName:"p"},"gc")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm i -g @grucloud/core\n")),Object(o.b)("p",null,"Clone the code and go to one of the azure examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:grucloud/grucloud.git\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd grucloud/examples/azure\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(o.b)("h3",{id:"environment"},"Environment"),Object(o.b)("p",null,"Create ",Object(o.b)("strong",{parentName:"p"},"default.env")," and set the correct values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"TENANT_ID=\nSUBSCRIPTION_ID=\nAPP_ID=\nPASSWORD=\nMACHINE_ADMIN_USERNAME=\nMACHINE_ADMIN_PASSWORD=\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"See ",Object(o.b)("a",{parentName:"p",href:"/docs/azure/AzureRequirements"},"AzureRequirements")," to retrieve these informations")),Object(o.b)("h3",{id:"config"},"Config"),Object(o.b)("p",null,"Edit ",Object(o.b)("strong",{parentName:"p"},"config.js")," and set the location:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'module.exports = () => ({\n  location: "uksouth",\n});\n')),Object(o.b)("p",null,"To find out the list of locations:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"az account list-locations -o table\n")),Object(o.b)("p",null,"Now it is time to edit the infrastructure ",Object(o.b)("strong",{parentName:"p"},"iac.js")," file that describes the architecture."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const assert = require("assert");\nconst { AzureProvider } = require("@grucloud/provider-azure");\n\nexports.createStack = async ({ config, stage }) => {\n  assert(stage);\n  // Create an Azure provider\n  const provider = AzureProvider({ config });\n\n  // https://docs.microsoft.com/en-us/rest/api/apimanagement/2019-12-01/apimanagementservice/createorupdate\n  const rg = provider.makeResourceGroup({\n    name: `resource-group-${stage}`,\n  });\n\n  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/virtualnetworks/createorupdate#request-body\n  const vnet = provider.makeVirtualNetwork({\n    name: `virtual-network-${stage}`,\n    dependencies: { resourceGroup: rg },\n    properties: () => ({\n      properties: {\n        addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n        subnets: [\n          {\n            name: `subnet-${stage}`,\n            properties: {\n              addressPrefix: "10.0.0.0/24",\n            },\n          },\n        ],\n      },\n    }),\n  });\n\n  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networksecuritygroups/createorupdate#request-body\n  const sg = provider.makeSecurityGroup({\n    name: `security-group-${stage}`,\n    dependencies: { resourceGroup: rg },\n    properties: () => ({\n      properties: {\n        securityRules: [\n          {\n            name: "SSH",\n            properties: {\n              access: "Allow",\n              direction: "Inbound",\n              protocol: "Tcp",\n              destinationPortRange: "22",\n              destinationAddressPrefix: "*",\n              sourcePortRange: "*",\n              sourceAddressPrefix: "*",\n              priority: 1000,\n            },\n          },\n        ],\n      },\n    }),\n  });\n\n  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/publicipaddresses/createorupdate#request-body\n  const publicIpAddress = provider.makePublicIpAddress({\n    name: `ip-${stage}`,\n    dependencies: {\n      resourceGroup: rg,\n    },\n    properties: () => ({\n      properties: {\n        publicIPAllocationMethod: "Dynamic",\n      },\n    }),\n  });\n  // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces/createorupdate#request-body\n  const networkInterface = provider.makeNetworkInterface({\n    name: `network-interface-${stage}`,\n    dependencies: {\n      resourceGroup: rg,\n      virtualNetwork: vnet,\n      securityGroup: sg,\n      subnet: `subnet-${stage}`,\n      publicIpAddress,\n    },\n    properties: () => ({\n      properties: {\n        ipConfigurations: [\n          {\n            name: "ipconfig",\n            properties: {\n              privateIPAllocationMethod: "Dynamic",\n            },\n          },\n        ],\n      },\n    }),\n  });\n\n  const { MACHINE_ADMIN_USERNAME, MACHINE_ADMIN_PASSWORD } = process.env;\n  assert(MACHINE_ADMIN_USERNAME);\n  assert(MACHINE_ADMIN_PASSWORD);\n\n  // https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate\n  const vm = provider.makeVirtualMachine({\n    name: `vm-${stage}`,\n    dependencies: {\n      resourceGroup: rg,\n      networkInterface,\n    },\n    properties: () => ({\n      properties: {\n        hardwareProfile: {\n          vmSize: "Standard_A1_v2",\n        },\n        storageProfile: {\n          imageReference: {\n            // az vm image list\n            offer: "UbuntuServer",\n            publisher: "Canonical",\n            sku: "18.04-LTS",\n            version: "latest",\n          },\n        },\n        osProfile: {\n          adminUsername: MACHINE_ADMIN_USERNAME,\n          computerName: "myVM",\n          adminPassword: MACHINE_ADMIN_PASSWORD,\n        },\n      },\n    }),\n  });\n  return { provider };\n};\n')),Object(o.b)("h2",{id:"plan"},"Plan"),Object(o.b)("p",null,"Find out which resources are going to be allocated:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc plan\n")),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc apply\n")),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("p",null,"List the available resources and display a diagram with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc list --graph\n")),Object(o.b)("h2",{id:"destroy"},"Destroy"),Object(o.b)("p",null,"Time to destroy the resouces allocated:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc destroy\n")))}l.isMDXComponent=!0},198:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);