(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{125:function(e,t,l){"use strict";l.r(t);var n=l(181),r=l(10),c=l(279),a=l(194),i=l(191),o=l(192),u=l(193);let b=()=>Object(n.b)("div",null);if(r.a.canUseDOM){const{Box:e,CodePane:t,Deck:r,FlexBox:s,FullScreen:f,Grid:p,Heading:d,ListItem:h,Progress:O,Slide:v,Text:m,UnorderedList:j}=l(280),g={colors:{primary:"#666666",secondary:"#0018A8",tertiary:"white"},fontSizes:{header:"52px",paragraph:"28px",text:"42px"}},y=()=>Object(n.b)(s,{justifyContent:"space-between",alignItems:"center",position:"absolute",bottom:0,width:1},Object(n.b)(e,{padding:"0 1em"},Object(n.b)(f,null)),Object(n.b)(e,{padding:"1em"},Object(n.b)(O,null)));b=()=>Object(n.b)(r,{backgroundColor:"white",theme:g,template:y},Object(n.b)(v,{backgroundColor:"white"},Object(n.b)(s,{justifyContent:"space-between",alignItems:"center",flexDirection:"column"},Object(n.b)(a.a,null),Object(n.b)(d,null,"GruCloud"),Object(n.b)(m,null,"Infrastructure as Javascript Code"))),Object(n.b)(v,null,Object(n.b)(d,null,"Principles"),Object(n.b)(j,null,Object(n.b)(h,null,Object(n.b)(m,null,"Define Infrastructure with Javascript code.")),Object(n.b)(h,null,Object(n.b)(m,null,"Use the GruCloud CLI to deploy, update and destroy cloud resources")),Object(n.b)(h,null,Object(n.b)(m,null,"No YAML or Domain Specific language.")))),Object(n.b)(v,null,Object(n.b)(p,{gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 5fr",gridRowGap:1,alignItems:"center"},Object(n.b)(m,null,Object(n.b)(i.a,null)),Object(n.b)(m,null,Object(n.b)(o.a,null)),Object(n.b)(m,null,Object(n.b)(u.a,null)),Object(n.b)("div",null,Object(n.b)(m,null,"EC2 Instance"),Object(n.b)(m,null,"S3: Bucket, Object"),Object(n.b)(m,null,"IAM: User, Group, Policy, Instance Profile")),Object(n.b)("div",null,Object(n.b)(m,null,"VM, Address, Network, Security Group"),Object(n.b)(m,null,"IAM Policy")),Object(n.b)("div",null,Object(n.b)(m,null,"VM, Network Interface, PublicAddress, Security Group, Resource Group")))),Object(n.b)(v,null,Object(n.b)(d,null,"Infrastructure Code"),Object(n.b)(t,{autoFillHeight:!0,language:"javascript",theme:c.a,fontSize:"15"},'const { GoogleProvider } = require("@grucloud/core");\n\nexports.createStack = async ({ config }) => {\n  const provider = GoogleProvider({ config });\n\n  const server = await provider.makeVmInstance({\n    name: "webserver",\n    properties: () => ({\n      diskSizeGb: "20",\n      machineType: "f1-micro",\n      sourceImage:\n        "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts"\n    }),\n  });\n\n  return {\n    provider,\n  };\n};\n')),Object(n.b)(v,null,Object(n.b)(s,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},Object(n.b)("div",null,Object(n.b)(d,null,"Commands"),Object(n.b)(j,null,Object(n.b)(h,null,Object(n.b)(m,null,"gc plan")),Object(n.b)(h,null,Object(n.b)(m,null,"gc apply")),Object(n.b)(h,null,Object(n.b)(m,null,"gc destroy")),Object(n.b)(h,null,Object(n.b)(m,null,"gc list")))),Object(n.b)("div",null,Object(n.b)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/VNjhjXHwRhGkuP6kcMBks3Kmo/embed?autoplay=true&speed=6&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"900px",height:"720px"}})))))}t.default=b},191:function(e,t,l){"use strict";var n=l(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var a=n.createElement("path",{d:"M33.254 25.423c0 1.44.157 2.608.431 3.465.314.856.707 1.79 1.256 2.803.196.311.275.623.275.895 0 .39-.236.779-.746 1.168l-2.472 1.635c-.354.234-.707.35-1.02.35-.393 0-.786-.194-1.178-.544a12.056 12.056 0 01-1.413-1.83 30.092 30.092 0 01-1.216-2.297c-3.062 3.582-6.908 5.372-11.539 5.372-3.296 0-5.926-.934-7.849-2.803-1.923-1.868-2.904-4.36-2.904-7.475 0-3.309 1.177-5.995 3.571-8.02 2.394-2.024 5.573-3.036 9.616-3.036 1.334 0 2.707.117 4.16.311 1.452.195 2.943.506 4.513.857v-2.842c0-2.96-.628-5.023-1.845-6.23-1.256-1.206-3.375-1.79-6.397-1.79-1.373 0-2.786.155-4.238.506-1.452.35-2.865.778-4.239 1.323a11.32 11.32 0 01-1.373.506c-.275.078-.471.117-.628.117-.55 0-.824-.389-.824-1.207V4.75c0-.623.078-1.09.274-1.363.196-.272.55-.545 1.1-.817 1.373-.701 3.021-1.285 4.944-1.752 1.923-.507 3.964-.74 6.122-.74 4.67 0 8.085 1.051 10.283 3.153 2.158 2.103 3.257 5.295 3.257 9.578v12.614h.079zM17.32 31.34c1.295 0 2.63-.233 4.042-.7 1.413-.468 2.669-1.324 3.729-2.492.627-.74 1.098-1.557 1.334-2.492.235-.934.392-2.063.392-3.387v-1.635a33.009 33.009 0 00-3.61-.662 29.813 29.813 0 00-3.69-.233c-2.629 0-4.552.506-5.847 1.557-1.295 1.051-1.923 2.53-1.923 4.477 0 1.83.47 3.192 1.452 4.127.942.973 2.316 1.44 4.12 1.44zm31.514 4.205c-.706 0-1.177-.117-1.491-.39-.314-.233-.589-.778-.824-1.518L37.296 3.543c-.236-.779-.353-1.285-.353-1.557 0-.623.314-.974.942-.974h3.846c.745 0 1.255.117 1.53.39.314.233.55.778.785 1.518l6.593 25.773L56.762 2.92c.196-.779.431-1.285.745-1.518.314-.234.864-.39 1.57-.39h3.14c.745 0 1.256.117 1.57.39.314.233.588.778.745 1.518l6.201 26.084 6.79-26.084c.235-.779.51-1.285.785-1.518.313-.234.824-.39 1.53-.39h3.65c.628 0 .981.312.981.974 0 .194-.04.389-.078.622-.04.234-.118.546-.275.974l-9.458 30.094c-.236.779-.51 1.285-.825 1.519-.314.233-.824.389-1.49.389h-3.376c-.746 0-1.256-.117-1.57-.39-.314-.272-.589-.778-.746-1.557L60.57 8.527l-6.044 25.071c-.197.78-.432 1.285-.746 1.558-.314.272-.863.39-1.57.39h-3.375zm50.43 1.051c-2.04 0-4.081-.233-6.043-.7-1.963-.468-3.493-.974-4.514-1.558-.627-.35-1.06-.74-1.216-1.09a2.73 2.73 0 01-.236-1.09v-1.986c0-.817.314-1.207.903-1.207.236 0 .471.04.707.117.235.078.588.234.98.39a21.474 21.474 0 004.318 1.362c1.57.312 3.1.467 4.67.467 2.472 0 4.395-.428 5.73-1.284 1.334-.857 2.04-2.103 2.04-3.699 0-1.09-.353-1.985-1.059-2.725-.707-.74-2.041-1.402-3.964-2.025l-5.69-1.752c-2.865-.895-4.985-2.219-6.28-3.97-1.295-1.714-1.962-3.621-1.962-5.646 0-1.635.353-3.075 1.06-4.321a10.035 10.035 0 012.825-3.193c1.178-.895 2.512-1.557 4.082-2.024C97.185.195 98.833 0 100.56 0c.863 0 1.766.039 2.629.156.903.117 1.727.272 2.551.428.785.195 1.531.39 2.237.623.707.233 1.256.467 1.648.7.55.312.942.624 1.178.974.235.311.353.74.353 1.285v1.83c0 .817-.314 1.245-.903 1.245-.314 0-.824-.155-1.491-.467-2.237-1.012-4.749-1.518-7.535-1.518-2.237 0-4.003.35-5.22 1.09-1.216.74-1.844 1.869-1.844 3.465 0 1.09.392 2.024 1.177 2.764.785.74 2.237 1.48 4.317 2.141l5.573 1.752c2.826.896 4.866 2.142 6.083 3.738 1.217 1.596 1.805 3.426 1.805 5.45 0 1.674-.353 3.193-1.02 4.516-.707 1.324-1.648 2.492-2.865 3.426-1.217.974-2.669 1.675-4.356 2.18-1.766.546-3.611.818-5.612.818z",fill:"#252F3E"}),i=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M106.682 55.517C93.77 64.977 75.011 70 58.881 70 36.276 70 15.907 61.708.523 47.925c-1.217-1.09-.118-2.569 1.334-1.712C18.497 55.79 39.023 61.59 60.255 61.59c14.324 0 30.062-2.96 44.543-9.033 2.159-.973 4.003 1.402 1.884 2.96z",fill:"#F90"}),o=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M112.059 49.444c-1.649-2.102-10.911-1.012-15.11-.506-1.256.155-1.452-.935-.314-1.752 7.378-5.14 19.505-3.66 20.918-1.947 1.413 1.752-.392 13.782-7.3 19.544-1.059.895-2.08.428-1.609-.74 1.57-3.854 5.063-12.536 3.415-14.6z",fill:"#F90"});t.a=function(e){var t=e.title,l=e.titleId,u=c(e,["title","titleId"]);return n.createElement("svg",r({width:118,height:70,fill:"none","aria-labelledby":l},u),t?n.createElement("title",{id:l},t):null,a,i,o)}},192:function(e,t,l){"use strict";var n=l(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var a=n.createElement("path",{d:"M55.636 19.666h2.674l7.622-7.714.374-3.275A34.108 34.108 0 0050.976.805a33.861 33.861 0 00-17.18.656 34.186 34.186 0 00-14.7 9.02 34.78 34.78 0 00-8.52 15.113 4.1 4.1 0 012.674-.163l15.243-2.544s.775-1.299 1.177-1.218a18.928 18.928 0 0112.616-6.232 18.86 18.86 0 0113.404 4.23h-.054z",fill:"#EA4335"}),i=n.createElement("path",{d:"M76.79 25.594a34.818 34.818 0 00-10.35-16.89L55.743 19.531a19.214 19.214 0 015.225 6.82 19.443 19.443 0 011.755 8.446v1.921a9.463 9.463 0 016.731 2.822 9.695 9.695 0 012.789 6.814 9.695 9.695 0 01-2.788 6.813 9.463 9.463 0 01-6.732 2.823h-19.04l-1.9 1.948v11.558l1.9 1.922h19.04a24.563 24.563 0 0014.8-4.824 25.056 25.056 0 009.04-12.803 25.352 25.352 0 00-.28-15.734 25.026 25.026 0 00-9.494-12.463z",fill:"#4285F4"}),o=n.createElement("path",{d:"M24.615 71.31h19.04V55.88h-19.04a9.372 9.372 0 01-3.93-.866l-2.675.84-7.675 7.713-.669 2.707a24.435 24.435 0 0014.95 5.034z",fill:"#34A853"}),u=n.createElement("path",{d:"M24.615 21.263a24.565 24.565 0 00-14.36 4.752 25.045 25.045 0 00-8.96 12.313 25.353 25.353 0 00-.224 15.29 25.07 25.07 0 008.595 12.576l11.045-11.179a9.539 9.539 0 01-3.58-2.847 9.692 9.692 0 01-1.866-4.204 9.749 9.749 0 01.277-4.6 9.659 9.659 0 012.357-3.943 9.5 9.5 0 013.896-2.385 9.41 9.41 0 014.545-.281c1.515.28 2.94.928 4.154 1.888a9.619 9.619 0 012.812 3.624l11.045-11.179a24.804 24.804 0 00-8.73-7.254 24.492 24.492 0 00-11.006-2.57z",fill:"#FBBC05"}),b=n.createElement("path",{d:"M138.376 60.537a24.108 24.108 0 01-9.564-1.846 24.354 24.354 0 01-8.086-5.49 23.825 23.825 0 01-5.535-8.035 24.052 24.052 0 01-1.872-9.611c-.039-3.3.599-6.573 1.874-9.611a23.85 23.85 0 015.533-8.037 24.359 24.359 0 018.07-5.562 24.112 24.112 0 019.58-1.908 23.393 23.393 0 019.149 1.73 23.615 23.615 0 017.779 5.172l-4.76 4.899a17.032 17.032 0 00-12.168-4.872 16.78 16.78 0 00-6.847 1.369 16.967 16.967 0 00-5.722 4.044 17.702 17.702 0 00-3.879 5.894 17.868 17.868 0 00-1.282 6.963 17.88 17.88 0 001.313 6.875 17.704 17.704 0 003.848 5.819 17.84 17.84 0 0012.456 5.296 17.827 17.827 0 0012.575-4.998 14.48 14.48 0 003.664-8.418h-16.046v-6.93h22.704c.224 1.396.313 2.81.268 4.223a21.89 21.89 0 01-1.312 8.592 21.672 21.672 0 01-4.545 7.377 22.75 22.75 0 01-7.853 5.387 22.519 22.519 0 01-9.342 1.678zm52.789-4.601a16.261 16.261 0 01-11.325 4.606 16.26 16.26 0 01-11.325-4.606 15.443 15.443 0 01-3.508-5.26 15.609 15.609 0 01-1.119-6.244 15.623 15.623 0 011.121-6.242 15.468 15.468 0 013.506-5.261 16.288 16.288 0 0111.325-4.596c4.219 0 8.275 1.646 11.325 4.596a15.466 15.466 0 013.505 5.26 15.623 15.623 0 011.121 6.243c.055 2.14-.33 4.267-1.131 6.247-.801 1.98-2 3.77-3.522 5.257h.027zm-17.65-4.52a8.67 8.67 0 002.878 2.051 8.576 8.576 0 006.894 0 8.666 8.666 0 002.877-2.051 9.64 9.64 0 002.035-3.218c.459-1.2.677-2.48.64-3.766a9.763 9.763 0 00-.637-3.779 9.669 9.669 0 00-2.038-3.23 8.796 8.796 0 00-2.898-2.03 8.71 8.71 0 00-6.906 0 8.796 8.796 0 00-2.898 2.03 9.669 9.669 0 00-2.038 3.23 9.762 9.762 0 00-.636 3.78 9.735 9.735 0 00.651 3.768 9.645 9.645 0 002.05 3.215h.026zm52.468 4.52a16.261 16.261 0 01-11.325 4.606c-4.221 0-8.278-1.65-11.325-4.606a15.443 15.443 0 01-3.508-5.26 15.609 15.609 0 01-1.119-6.244 15.624 15.624 0 011.122-6.242 15.451 15.451 0 013.505-5.261 16.262 16.262 0 0111.325-4.607c4.221 0 8.278 1.65 11.325 4.607a15.451 15.451 0 013.505 5.26 15.624 15.624 0 011.122 6.243 15.609 15.609 0 01-1.119 6.244 15.443 15.443 0 01-3.508 5.26zm-17.65-4.52a8.67 8.67 0 002.878 2.051 8.576 8.576 0 006.894 0 8.67 8.67 0 002.878-2.051 9.654 9.654 0 002.034-3.218c.46-1.2.677-2.48.64-3.766a9.781 9.781 0 00-.636-3.779 9.7 9.7 0 00-2.038-3.23 8.81 8.81 0 00-2.899-2.03 8.71 8.71 0 00-6.905 0 8.79 8.79 0 00-2.899 2.03 9.669 9.669 0 00-2.038 3.23 9.762 9.762 0 00-.636 3.78 9.735 9.735 0 00.652 3.768 9.627 9.627 0 002.049 3.215h.026zm40.542 23.574a13.901 13.901 0 01-8.906-2.869 16.568 16.568 0 01-5.188-6.658l6.098-2.571a10.376 10.376 0 003.021 4.033 7.566 7.566 0 005.001 1.705 7.936 7.936 0 003.378-.53 8.02 8.02 0 002.853-1.906 9.96 9.96 0 002.22-7.038V56.83h-.241a10.199 10.199 0 01-3.759 2.827 10.083 10.083 0 01-4.611.827 14.37 14.37 0 01-5.836-1.22 14.514 14.514 0 01-4.861-3.49 15.568 15.568 0 01-3.435-5.196 15.735 15.735 0 01-1.138-6.145 15.889 15.889 0 011.135-6.183 15.742 15.742 0 013.438-5.239 14.504 14.504 0 014.856-3.506 14.35 14.35 0 015.841-1.23 11.383 11.383 0 014.92 1.11 9.894 9.894 0 013.477 2.57h.241v-2.57h6.632v28.825a17.011 17.011 0 01-.844 6.737 16.858 16.858 0 01-3.408 5.85 14.964 14.964 0 01-5.023 3.212 14.811 14.811 0 01-5.861.982zm.481-20.787a7.703 7.703 0 003.32-.671 7.798 7.798 0 002.724-2.035 10.09 10.09 0 002.433-6.93 10.31 10.31 0 00-2.433-7.064 7.768 7.768 0 00-2.723-2.037 7.676 7.676 0 00-3.321-.67 8.178 8.178 0 00-3.417.672 8.271 8.271 0 00-2.841 2.035 9.945 9.945 0 00-2.674 7.01 9.797 9.797 0 00.654 3.735 9.7 9.7 0 002.02 3.195 8.296 8.296 0 002.835 2.062 8.207 8.207 0 003.423.698zm26.448-41.953v47.313h-6.98V12.25h6.98zm19.147 48.287a15.027 15.027 0 01-6.106-1.125 15.166 15.166 0 01-5.152-3.504 15.664 15.664 0 01-3.424-5.268 15.845 15.845 0 01-1.096-6.208 16.034 16.034 0 011.015-6.24 15.887 15.887 0 013.344-5.344 14.335 14.335 0 014.877-3.403 14.184 14.184 0 015.82-1.117 13.37 13.37 0 015.349 1.055 12.595 12.595 0 014.091 2.707 18.88 18.88 0 012.674 3.275 19.343 19.343 0 011.578 3.167l.722 1.84-21.394 8.905a8.094 8.094 0 003.105 3.645 7.945 7.945 0 004.597 1.227 9.039 9.039 0 004.5-1.187 9.176 9.176 0 003.336-3.279l5.348 3.654a17.726 17.726 0 01-5.134 4.926 14.42 14.42 0 01-8.05 2.274zm-8.932-16.592l14.227-5.982a4.956 4.956 0 00-2.22-2.463 7.177 7.177 0 00-3.663-.947 8.218 8.218 0 00-5.75 2.571 8.58 8.58 0 00-2.05 3.117 8.673 8.673 0 00-.544 3.704zM345.2 60.537a21.805 21.805 0 01-8.668-1.634 22.02 22.02 0 01-7.341-4.942 22.342 22.342 0 01-4.839-7.46 22.542 22.542 0 01-1.562-8.781 22.542 22.542 0 011.562-8.782 22.342 22.342 0 014.839-7.46 22.02 22.02 0 017.341-4.941 21.805 21.805 0 018.668-1.634 19.742 19.742 0 018.737 1.735 19.976 19.976 0 017.121 5.41l-3.851 3.79a14.582 14.582 0 00-5.334-4.226 14.4 14.4 0 00-6.647-1.323c-2.202-.05-4.391.35-6.436 1.179a16.32 16.32 0 00-5.464 3.639 16.917 16.917 0 00-3.723 5.794 17.07 17.07 0 00-1.117 6.819 17.07 17.07 0 001.117 6.818 16.917 16.917 0 003.723 5.795 16.32 16.32 0 005.464 3.639 16.163 16.163 0 006.436 1.179 16.836 16.836 0 007.4-1.622 17.034 17.034 0 005.971-4.712l3.851 3.898a21.044 21.044 0 01-7.407 5.71 22.446 22.446 0 01-9.841 2.112zm27.597-.974h-5.535V15.85h5.535v43.712zm9.039-26.31a15.39 15.39 0 0110.911-4.551 15.39 15.39 0 0110.911 4.552 15.88 15.88 0 013.261 5.251 16.003 16.003 0 011.017 6.117 16.002 16.002 0 01-1.017 6.116 15.88 15.88 0 01-3.261 5.252 15.39 15.39 0 01-10.911 4.552 15.39 15.39 0 01-10.911-4.552 15.88 15.88 0 01-3.261-5.252 16.022 16.022 0 01-1.018-6.116 16.023 16.023 0 011.018-6.117 15.88 15.88 0 013.261-5.251zm4.118 19.218a9.349 9.349 0 003.089 2.184 9.243 9.243 0 007.381 0 9.328 9.328 0 003.089-2.184 10.854 10.854 0 002.21-3.633c.491-1.348.712-2.781.651-4.216a10.957 10.957 0 00-.651-4.216 10.854 10.854 0 00-2.21-3.633 9.326 9.326 0 00-3.089-2.184 9.236 9.236 0 00-7.381 0 9.346 9.346 0 00-3.089 2.184 10.87 10.87 0 00-2.21 3.633 10.957 10.957 0 00-.651 4.216 10.946 10.946 0 00.669 4.204 10.853 10.853 0 002.219 3.618l-.027.027zm52.656 7.092h-5.349V55.42h-.16a10.345 10.345 0 01-3.905 3.736 10.808 10.808 0 01-5.482 1.488 10.29 10.29 0 01-4.584-.733 10.407 10.407 0 01-3.813-2.677 13.65 13.65 0 01-2.861-9.149V29.681h5.536v17.377c0 5.575 2.433 8.363 7.3 8.363a6.721 6.721 0 003.132-.664 6.804 6.804 0 002.484-2.042 10.28 10.28 0 002.166-6.47V29.682h5.536v29.881zm18.799.974c-1.877.006-3.734-.4-5.442-1.19a13.006 13.006 0 01-4.452-3.384 16.354 16.354 0 01-4.145-11.341 16.354 16.354 0 014.145-11.341 13.006 13.006 0 014.452-3.385 12.865 12.865 0 015.442-1.19 12.42 12.42 0 016.044 1.462 10.282 10.282 0 014.011 3.654h.241l-.241-4.141V15.85H473v43.712h-5.348v-4.14h-.241a10.288 10.288 0 01-4.011 3.653 12.423 12.423 0 01-5.991 1.462zm.91-5.116a8.733 8.733 0 003.64-.736 8.819 8.819 0 003.018-2.187 11.044 11.044 0 002.675-7.876c.167-2.88-.794-5.71-2.675-7.877a9.041 9.041 0 00-3.03-2.21 8.948 8.948 0 00-7.31 0 9.045 9.045 0 00-3.031 2.21 10.86 10.86 0 00-2.11 3.655 10.955 10.955 0 00-.564 4.195 10.955 10.955 0 00.564 4.194 10.86 10.86 0 002.11 3.655 8.834 8.834 0 003.037 2.227 8.731 8.731 0 003.676.75z",fill:"#5F6368"});t.a=function(e){var t=e.title,l=e.titleId,s=c(e,["title","titleId"]);return n.createElement("svg",r({width:"80%",height:75,viewBox:"0 0 473 75",fill:"none","aria-labelledby":l},s),t?n.createElement("title",{id:l},t):null,a,i,o,u,b)}},193:function(e,t,l){"use strict";var n=l(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var a=n.createElement("path",{d:"M44.908 70.99l22.896-4.034.212-.049-11.773-13.972c-3.946-4.66-7.87-9.339-11.774-14.035 0-.07 12.158-33.464 12.228-33.582.02-.04 8.296 14.208 20.054 34.536l20.173 34.88.153.266-37.421-.005-37.421-.005 22.673-3.995v-.005zm143.51-3.374c-5.697-.364-9.006-3.602-9.884-9.658-.237-1.608-.237-1.653-.262-12.107l-.019-10.124h5.04l.02 9.79c.02 8.825.03 9.858.114 10.478.345 2.52 1.026 4.217 2.19 5.432.932.974 2.022 1.544 3.531 1.845.71.142 2.737.147 3.384 0 1.529-.335 2.757-1 3.837-2.076 1.233-1.23 2.145-2.977 2.584-4.945l.148-.664.02-9.874.015-9.873h5.149v31.043h-5.095v-2.465c0-1.673-.02-2.46-.059-2.445a2.019 2.019 0 00-.291.443 10.342 10.342 0 01-3.941 3.935c-1.923 1.058-3.847 1.432-6.481 1.265zm57.821-.025a13.38 13.38 0 01-5.859-1.909c-3.65-2.248-5.806-5.958-6.437-11.064a26.698 26.698 0 01-.064-5.638c.409-3.355 1.726-6.646 3.61-9.003.484-.6 1.579-1.692 2.18-2.17a13.572 13.572 0 015.569-2.651c1.179-.256 3.255-.379 4.513-.261 3.147.29 6.037 1.771 8 4.098 1.993 2.361 3.088 5.672 3.226 9.741.025.64.029 1.756.015 2.49l-.03 1.323-11.033.015-11.034.014v.492c0 1.49.365 3.198.996 4.644.543 1.25 1.48 2.613 2.245 3.272a9.877 9.877 0 005.593 2.361c.779.074 2.762 0 3.65-.137a15.507 15.507 0 006.895-2.839c.227-.172.444-.33.488-.354.055-.035.069.413.069 2.292v2.337l-.527.32a18.3 18.3 0 01-7.394 2.558c-.794.099-3.719.138-4.671.069zm9.603-19.708c0-2.504-1.06-5.284-2.555-6.715a7.029 7.029 0 00-3.896-1.885 11.544 11.544 0 00-3.024.084c-1.622.325-2.959 1.033-4.128 2.19a11.207 11.207 0 00-2.732 4.358c-.233.7-.409 1.417-.528 2.145l-.035.26h16.898v-.437zM106.167 66.809l8.326-21.814 8.306-21.75h5.337l.217.566c.68 1.732 16.622 43.022 16.622 43.047 0 .01-1.278.02-2.837.02h-2.836l-2.298-6.1-2.298-6.101H116.2l-.084.202-2.18 6.1-2.101 5.904h-2.846c-2.249 0-2.836-.015-2.822-.074zm26.847-16.791c0-.01-1.544-4.191-3.438-9.298-3.536-9.544-3.734-10.115-4.01-11.65-.133-.718-.197-.738-.276-.083-.054.472-.296 1.52-.484 2.1-.093.29-1.681 4.65-3.536 9.692a1506.156 1506.156 0 00-3.374 9.21c0 .024 3.404.049 7.562.049 4.157 0 7.556-.01 7.556-.02zm13.677 16.068v-.797l9.223-12.644 9.219-12.638-8.351-.025-8.345-.03-.015-2.115-.015-2.11h24.149v1.426l-9.223 12.712c-3.083 4.24-6.158 8.486-9.224 12.737 0 .015 4.104.025 9.115.025h9.11v4.25h-25.648l.005-.791zm67.656.757c-.025-.02-.039-7.03-.039-15.575V35.727h5.04v3.202c0 1.766.02 3.208.05 3.208a2.86 2.86 0 00.271-.64 11.073 11.073 0 012.811-4.33 7.31 7.31 0 013.981-1.972c.434-.069.799-.084 1.662-.059 1.085.03 1.652.108 2.318.32l.202.069v5.215l-.592-.296a6.375 6.375 0 00-3.339-.669 6.319 6.319 0 00-5.169 2.977c-1.095 1.746-1.874 3.985-2.106 6.046-.044.369-.069 3.38-.079 9.313l-.01 8.767h-2.485c-1.362 0-2.496-.015-2.516-.035zM0 66.735c0-.02 5.549-9.628 12.33-21.351l12.331-21.312L39.03 12.043C46.931 5.431 53.417.01 53.446 0c-.053.202-.13.397-.232.58L37.61 33.96 22.284 66.74l-11.142.015c-6.126.01-11.142 0-11.142-.02z",fill:"#0089D6"});t.a=function(e){var t=e.title,l=e.titleId,i=c(e,["title","titleId"]);return n.createElement("svg",r({width:261,height:75,fill:"none","aria-labelledby":l},i),t?n.createElement("title",{id:l},t):null,a)}},194:function(e,t,l){"use strict";var n=l(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var a=n.createElement("defs",null,n.createElement("linearGradient",{id:"gc_svg__b",gradientUnits:"userSpaceOnUse",x1:320,y1:58.34,x2:320,y2:551.31},n.createElement("stop",{offset:"0%",stopColor:"#00d1ff"}),n.createElement("stop",{offset:"100%",stopColor:"#1540f5"})),n.createElement("path",{d:"M153.99 207.43C71.06 219.19 7.48 291.86 10.08 378.56c2.64 87.74 74.24 159.59 161.98 162.46 94.93 3.12 173.16-73.18 173.26-167.43.01-14.05-11.29-25.5-25.34-25.5H203.44c-14.81 0-26.65 12.71-25.21 27.82 1.25 13.17 13.07 22.85 26.3 22.85h87.36c-11.67 52.7-58.97 92.16-115.23 91.69-63.57-.54-116-53.47-116-117.04.01-64.51 52.49-116.98 116.99-116.98 14.01 0 25.28-11.82 25.34-25.82.26-64.29 52.64-116.51 116.99-116.51 64.58 0 117.11 52.57 117.03 117.15-.02 14.01 11.34 25.18 25.35 25.18 66.26.01 119.83 55.39 116.86 122.29-2.73 61.54-58.18 111.73-119.78 111.73h-69.91c-14.81 0-26.65 12.71-25.21 27.82 1.25 13.17 13.07 22.84 26.3 22.84h68.14c90.86 0 167.91-70.81 171.13-161.62 3.09-87.11-60.66-160.26-143.88-172.06-11.53-81.29-81.59-143.99-166.03-143.99-84.42 0-154.46 62.7-165.99 143.99",id:"gc_svg__a"})),i=n.createElement("use",{xlinkHref:"#gc_svg__a",fill:"url(#gc_svg__b)"}),o=n.createElement("use",{xlinkHref:"#gc_svg__a",fillOpacity:0,stroke:"#000",strokeOpacity:0});t.a=function(e){var t=e.title,l=e.titleId,u=c(e,["title","titleId"]);return n.createElement("svg",r({viewBox:"0 0 640 640",width:200,height:200,"aria-labelledby":l},u),t?n.createElement("title",{id:l},t):null,a,i,o)}}}]);