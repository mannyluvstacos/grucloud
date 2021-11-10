(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(238)),s={},o={unversionedId:"aws/AwsGettingStarted",id:"aws/AwsGettingStarted",isDocsHomePage:!1,title:"AwsGettingStarted",description:"This tutorial explains the code generation from a live infrastructure.",source:"@site/docs/aws/AwsGettingStarted.md",sourceDirName:"aws",slug:"/aws/AwsGettingStarted",permalink:"/docs/aws/AwsGettingStarted",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is GruCloud ?",permalink:"/docs/Introduction"},next:{title:"GCP Getting Started",permalink:"/docs/google/GoogleGettingStarted"}},i=[{value:"Requirements",id:"requirements",children:[{value:"AWS Account",id:"aws-account",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]},{value:"Access and Secret Key",id:"access-and-secret-key",children:[]},{value:"Getting the GruCloud CLI",id:"getting-the-grucloud-cli",children:[]}]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"List the live resources",id:"list-the-live-resources",children:[]},{value:"Resource mind map",id:"resource-mind-map",children:[]},{value:"Target Graph",id:"target-graph",children:[]},{value:"Destroy",id:"destroy",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This tutorial explains the code generation from a live infrastructure.\nInstead of manually coding the infrastructure, GruCloud automatically creates the infrastructure as code."),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("p",null,"The following chart explains the AWS requirements:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AWS Account"),Object(c.b)("li",{parentName:"ul"},"AWS CLI"),Object(c.b)("li",{parentName:"ul"},"Access and Secret Key")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/aws-requirements.svg",alt:"AWS Requirements"})),Object(c.b)("h3",{id:"aws-account"},"AWS Account"),Object(c.b)("p",null,"Ensure access to the ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com"},"Amazon Console")," and create an account if necessary."),Object(c.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"Ensure the ",Object(c.b)("em",{parentName:"p"},"AWS CLI")," is installed and configured:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"aws --version\n")),Object(c.b)("p",null,"If not, visit ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html")),Object(c.b)("h3",{id:"access-and-secret-key"},"Access and Secret Key"),Object(c.b)("p",null,"Visit the ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/security_credentials"},"security credentials")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click on ",Object(c.b)("strong",{parentName:"li"},"Access key (access key ID and secret access key).")),Object(c.b)("li",{parentName:"ul"},"Click on the button ",Object(c.b)("strong",{parentName:"li"},"Create New Access Key"),".")),Object(c.b)("p",null,"Write down the ",Object(c.b)("strong",{parentName:"p"},"AWSAccessKeyId")," and ",Object(c.b)("strong",{parentName:"p"},"AWSSecretKey")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"In a further episode, the access and secret key will be obtained from a dedicated IAM user with the correct role and policy.")),Object(c.b)("h3",{id:"getting-the-grucloud-cli"},"Getting the GruCloud CLI"),Object(c.b)("p",null,"This chart describes the way to install ",Object(c.b)("strong",{parentName:"p"},"gc"),", the GruCloud CLI:"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/grucloud-cli-install.svg",alt:"gc-cli-install"})),Object(c.b)("p",null,"GruCloud is written in Javascript running on ",Object(c.b)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),". Check if ",Object(c.b)("inlineCode",{parentName:"p"},"node")," is present on your system"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"node --version\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The version must be greater than 14")),Object(c.b)("p",null,"Install the ",Object(c.b)("em",{parentName:"p"},"GrucCloud")," command-line utility ",Object(c.b)("strong",{parentName:"p"},"gc")," with ",Object(c.b)("em",{parentName:"p"},"npm")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm i -g @grucloud/core\n")),Object(c.b)("p",null,"Check the current version of ",Object(c.b)("strong",{parentName:"p"},"gc"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc --version\n")),Object(c.b)("h2",{id:"create-a-new-project"},"Create a new project"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"new")," command guides you on how to create anf configured new project."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc new\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},'\u2714 Cloud Provider \u203a AWS\n\u2714 Project\'s name \u2026 my-aws-project\n\u2713 aws --version\n\u2716 aws sts get-caller-identity --region us-east-1\nUnable to locate credentials. You can configure credentials by running "aws configure".\n\nCreate and retrieve the AWS Access Key ID and AWS Secret Access Key by visiting the following page:\n\u2714 Open https://console.aws.amazon.com/iam/home#/security_credentials \u2026 yes\n\u2714 AWS Access Key ID \u2026 XXXXX64Y2BD7AGAXXXXX\n\u2714 AWS Secret Access Key \u2026 ****************************************\n\u2713 aws configure set aws_access_key_id XXXXX64Y2BD7AGAXXXXX\n\u2713 aws configure set aws_secret_access_key XXXXXXXXXXXXXXX\n\u2713 aws sts get-caller-identity --region us-east-1\n\u2713 aws ec2 describe-regions --region us-east-1\n\u2716 aws configure get region\n\u2714 Select a region \u203a us-east-2\n\u2713 aws configure set region us-east-2\ncd /Users/fredericheem/test/my-aws-project\nnpm install\nadded 217 packages from 198 contributors and audited 218 packages in 8.098s\n\nNew aws project created in /Users/fredericheem/test/my-aws-project\nWhat to do next ?\nStep 1: cd /Users/joe/test/my-aws-project\nStep 2: gc init\nStep 3: gc list --graph\nStep 5: gc gencode\nStep 6: gc destroy\nStep 7: gc apply\n')),Object(c.b)("p",null,"The boilerplate project is now created and configured."),Object(c.b)("h2",{id:"list-the-live-resources"},"List the live resources"),Object(c.b)("p",null,"Visualize your current infrastructure with the ",Object(c.b)("em",{parentName:"p"},"list")," command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc list --graph\n")),Object(c.b)("p",null,"##\xa0Generate the code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc gencode\n")),Object(c.b)("p",null,"The live resources will be fetched and the code generated in ",Object(c.b)("em",{parentName:"p"},"resource.js"),".\nA diff between the current file and the new one is displayed."),Object(c.b)("h2",{id:"resource-mind-map"},"Resource mind map"),Object(c.b)("p",null,"Given the target resources defined in ",Object(c.b)("em",{parentName:"p"},"resources.js"),", let's generate a mindmap of the target resources by group and type."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc tree\n")),Object(c.b)("h2",{id:"target-graph"},"Target Graph"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"graph")," command creates a dependency graph of the target resources:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc graph\n")),Object(c.b)("h2",{id:"destroy"},"Destroy"),Object(c.b)("p",null,"Resources can be destroyed in the right order with the ",Object(c.b)("em",{parentName:"p"},"destroy")," command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc destroy\n")))}u.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);