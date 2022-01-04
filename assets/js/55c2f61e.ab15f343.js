"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[713],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(v,l(l({ref:n},o),{},{components:t})):r.createElement(v,l({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90833:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return o},default:function(){return d}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),l=["components"],i={id:"Cluster",title:"Cluster"},c=void 0,u={unversionedId:"aws/resources/ECS/Cluster",id:"aws/resources/ECS/Cluster",isDocsHomePage:!1,title:"Cluster",description:"Manages an ECS Cluster.",source:"@site/docs/aws/resources/ECS/Cluster.md",sourceDirName:"aws/resources/ECS",slug:"/aws/resources/ECS/Cluster",permalink:"/docs/aws/resources/ECS/Cluster",tags:[],version:"current",frontMatter:{id:"Cluster",title:"Cluster"},sidebar:"docs",previous:{title:"CapacityProvider",permalink:"/docs/aws/resources/ECS/CapacityProvider"},next:{title:"Service",permalink:"/docs/aws/resources/ECS/Service"}},o=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],p={toc:o};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Manages an ",(0,s.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecs/home?#/clusters"},"ECS Cluster"),"."),(0,s.kt)("h2",{id:"sample-code"},"Sample code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.ECS.makeCluster({\n  name: "my-cluster",\n  properties: () => ({\n    settings: [\n      {\n        name: "containerInsights",\n        value: "enabled",\n      },\n    ],\n  }),\n  dependencies: ({ resources }) => ({\n    capacityProviders: [resources.ECS.CapacityProvider.cp],\n  }),\n});\n')),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#createCluster-property"},"create properties"))),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/CapacityProvider"},"Capacity Provider")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/aws/resources/KMS/Key"},"KMS Key"))),(0,s.kt)("h2",{id:"full-examples"},"Full Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecs/ecs-simple"},"Simple example"))),(0,s.kt)("h2",{id:"list"},"List"),(0,s.kt)("p",null,"The clusters can be filtered with the ",(0,s.kt)("em",{parentName:"p"},"ECS::Cluster")," type:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t ECS::Cluster\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 23/23\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ECS::Cluster from aws                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: cluster                                                                 \u2502\n\u2502 managedByUs: Yes                                                              \u2502\n\u2502 live:                                                                         \u2502\n\u2502   clusterArn: arn:aws:ecs:eu-west-2:840541460064:cluster/cluster              \u2502\n\u2502   clusterName: cluster                                                        \u2502\n\u2502   status: ACTIVE                                                              \u2502\n\u2502   registeredContainerInstancesCount: 1                                        \u2502\n\u2502   runningTasksCount: 1                                                        \u2502\n\u2502   pendingTasksCount: 0                                                        \u2502\n\u2502   activeServicesCount: 1                                                      \u2502\n\u2502   statistics:                                                                 \u2502\n\u2502     - name: runningEC2TasksCount                                              \u2502\n\u2502       value: 1                                                                \u2502\n\u2502     - name: runningFargateTasksCount                                          \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingEC2TasksCount                                              \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingFargateTasksCount                                          \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: runningExternalTasksCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingExternalTasksCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: activeEC2ServiceCount                                             \u2502\n\u2502       value: 1                                                                \u2502\n\u2502     - name: activeFargateServiceCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingEC2ServiceCount                                           \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingFargateServiceCount                                       \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: activeExternalServiceCount                                        \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingExternalServiceCount                                      \u2502\n\u2502       value: 0                                                                \u2502\n\u2502   tags:                                                                       \u2502\n\u2502     - key: gc-created-by-provider                                             \u2502\n\u2502       value: aws                                                              \u2502\n\u2502     - key: gc-managed-by                                                      \u2502\n\u2502       value: grucloud                                                         \u2502\n\u2502     - key: gc-project-name                                                    \u2502\n\u2502       value: example-grucloud-ecs-simple                                      \u2502\n\u2502     - key: gc-stage                                                           \u2502\n\u2502       value: dev                                                              \u2502\n\u2502     - key: Name                                                               \u2502\n\u2502       value: cluster                                                          \u2502\n\u2502   settings:                                                                   \u2502\n\u2502     - name: containerInsights                                                 \u2502\n\u2502       value: enabled                                                          \u2502\n\u2502   capacityProviders:                                                          \u2502\n\u2502     - "cp"                                                                    \u2502\n\u2502   defaultCapacityProviderStrategy: []                                         \u2502\n\u2502   attachments:                                                                \u2502\n\u2502     - id: 8c350eb4-7aa6-4881-8336-54abaeb534c1                                \u2502\n\u2502       type: asp                                                               \u2502\n\u2502       status: CREATED                                                         \u2502\n\u2502       details:                                                                \u2502\n\u2502         - name: capacityProviderName                                          \u2502\n\u2502           value: cp                                                           \u2502\n\u2502         - name: scalingPlanName                                               \u2502\n\u2502           value: ECSManagedAutoScalingPlan-3124ced1-b8c9-4225-bd28-0df041bed\u2026 \u2502\n\u2502   attachmentsStatus: UPDATE_COMPLETE                                          \u2502\n\u2502                                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ECS::Cluster                   \u2502 cluster                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\n')))}d.isMDXComponent=!0}}]);