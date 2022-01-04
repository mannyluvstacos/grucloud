"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[704],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60638:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],l={id:"AwsResourceHowto",title:"How to implement a new AWS Resources"},i=void 0,c={unversionedId:"aws/howto/AwsResourceHowto",id:"aws/howto/AwsResourceHowto",isDocsHomePage:!1,title:"How to implement a new AWS Resources",description:"This document will guide you through implementing a new AWS Resource for the GruCloud AWS provider.",source:"@site/docs/aws/howto/AwsResourceHowto.md",sourceDirName:"aws/howto",slug:"/aws/howto/AwsResourceHowto",permalink:"/docs/aws/howto/AwsResourceHowto",tags:[],version:"current",frontMatter:{id:"AwsResourceHowto",title:"How to implement a new AWS Resources"}},p=[{value:"Clone the code",id:"clone-the-code",children:[],level:2},{value:"Aws Provider",id:"aws-provider",children:[],level:2},{value:"Creating the files &amp; directories",id:"creating-the-files--directories",children:[{value:"README.md",id:"readmemd",children:[],level:3}],level:2},{value:"AwsCommon.js",id:"awscommonjs",children:[],level:2},{value:"AwsLoadBalancer.js",id:"awsloadbalancerjs",children:[{value:"ELB/testAwsLoadBalancer.test.js",id:"elbtestawsloadbalancertestjs",children:[],level:3},{value:"ELB/ELBSpec.js",id:"elbelbspecjs",children:[],level:3},{value:"ELB/index.js",id:"elbindexjs",children:[],level:3}],level:2},{value:"AwsLoadBalancer.js",id:"awsloadbalancerjs-1",children:[{value:"getList()",id:"getlist",children:[],level:4},{value:"findName()",id:"findname",children:[],level:4},{value:"findId()",id:"findid",children:[],level:4},{value:"getByName()",id:"getbyname",children:[],level:4},{value:"getById()",id:"getbyid",children:[],level:4}],level:2},{value:"Resource Creation",id:"resource-creation",children:[{value:"configDefault()",id:"configdefault",children:[],level:4},{value:"isInstanceUp()",id:"isinstanceup",children:[],level:4},{value:"Create",id:"create",children:[],level:3},{value:"Destroy",id:"destroy",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document will guide you through implementing a new AWS Resource for the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grucloud/provider-aws"},"GruCloud AWS provider"),"."),(0,o.kt)("p",null,"Case study: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/"},"Elastic Load Balancer (ELB)")),(0,o.kt)("p",null,"The implementation leverages the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/aws-sdk"},"aws-sdk")," for Node, bookmark the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html"},"the Javascropt SDK documentaion")," as it is the main source of information to develop this code."),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS account"),(0,o.kt)("li",{parentName:"ul"},"AWS CLI: ",(0,o.kt)("inlineCode",{parentName:"li"},"aws --version")),(0,o.kt)("li",{parentName:"ul"},"AWS access and secret key"),(0,o.kt)("li",{parentName:"ul"},"Configure authentication ans region with ",(0,o.kt)("inlineCode",{parentName:"li"},"aws configure")),(0,o.kt)("li",{parentName:"ul"},"Node 14: ",(0,o.kt)("inlineCode",{parentName:"li"},"node --version")),(0,o.kt)("li",{parentName:"ul"},"VS code for editing and debugging.")),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"clone-the-code"},"Clone the code"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud"},"Grucloud github page")," and fork the monorepo.\nClone the repository on your local machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:<yourusername>/grucloud.git\ncd grucloud\n")),(0,o.kt)("p",null,"##\xa0Dependencies\nInstall the dependencies with the ",(0,o.kt)("em",{parentName:"p"},"bootstrap")," npm script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\nnpm run bootstrap\n")),(0,o.kt)("p",null,"This monorepo contains a lot a packages that depends on each others. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"lerna")," is helping us to manage this situation."),(0,o.kt)("h2",{id:"aws-provider"},"Aws Provider"),(0,o.kt)("p",null,"Change to the aws provider package directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd packages/providers/aws\n")),(0,o.kt)("p",null,"Run the existing test suite and ensure they pass."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm test\n")),(0,o.kt)("h2",{id:"creating-the-files--directories"},"Creating the files & directories"),(0,o.kt)("p",null,"Create the ELB directory that will contain the ELB resources: LoadBalancer. Create as well as a test directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"packages/providers/aws $ mkdir ELB\npackages/providers/aws $ mkdir ELB/test\n")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"We'll describe how to add documentation for this resources."),(0,o.kt)("p",null,"Create the ELB directory in ",(0,o.kt)("em",{parentName:"p"},"docusurus/docs/aws/resources/ELB"),"."),(0,o.kt)("p",null,"Create the markdown file ",(0,o.kt)("em",{parentName:"p"},"docusurus/docs/aws/resources/ELB/AwsLoadBalancer.md")," and fill it with this basic information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: AwsLoadBalancer\ntitle: Load Balancer\n---\n\nManage an AWS Load Balancer.\n")),(0,o.kt)("p",null,"Edit ",(0,o.kt)("em",{parentName:"p"},"docusaurus/sidebars.js"),", Add the ELB section as well as ",(0,o.kt)("em",{parentName:"p"},"AwsLoadBalancer.md")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'//sidebars.js\n[...]\n{\n  "ELB": ["aws/resources/ELB/AwsLoadBalancer"]\n}\n[...]\n')),(0,o.kt)("p",null,"To view the documentation locally, start the docusaurus development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd docusaurus\nnpm install\nnpm start\n")),(0,o.kt)("h3",{id:"readmemd"},"README.md"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("em",{parentName:"p"},"packages/providers/aws/README.md")," and add the new resource in the ",(0,o.kt)("em",{parentName:"p"},"Resources")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"- ELB: [Load Balancer](https://grucloud.com/docs/aws/resources/ELB/Loadbalancer),\n")),(0,o.kt)("p",null,"#\xa0Boiler plate code"),(0,o.kt)("p",null,"The following section describes the files to create and edit."),(0,o.kt)("h2",{id:"awscommonjs"},"AwsCommon.js"),(0,o.kt)("p",null,"In order to handle various errors, all AWS calls goes through a facade. We need to create this facade for ",(0,o.kt)("em",{parentName:"p"},"ELB"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// AwsCommon.js\nexports.ELBNew = (config) => () =>\n  createEndpoint({ endpointName: "ELB" })(config);\n')),(0,o.kt)("h2",{id:"awsloadbalancerjs"},"AwsLoadBalancer.js"),(0,o.kt)("p",null,"Create the file ",(0,o.kt)("em",{parentName:"p"},"packages/providers/aws/ELB/AwsLoadBalancer.js")," and add the following boilerplate code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// ELB/AwsLoadBalancer.js\nconst assert = require("assert");\nconst { map, pipe, tap, tryCatch, get, switchCase, eq } = require("rubico");\nconst { defaultsDeep } = require("rubico/x");\n\nconst logger = require("@grucloud/core/logger")({\n  prefix: "LoadBalancer",\n});\nconst { retryCall } = require("@grucloud/core/Retry");\nconst { tos } = require("@grucloud/core/tos");\nconst {\n  getByNameCore,\n  isUpByIdCore,\n  isDownByIdCore,\n} = require("@grucloud/core/Common");\nconst {\n  ELBNew,\n  buildTags,\n  findNameInTags,\n  shouldRetryOnException,\n} = require("../AwsCommon");\n\nconst findName = () => {\n  throw Error("TODO findName");\n};\nconst findId = () => {\n  throw Error("TODO findId");\n};\n\nexports.AwsLoadBalancer = ({ spec, config }) => {\n  const elb = ELBNew(config);\n\n  const getList = ({ params } = {}) =>\n    pipe([\n      tap(() => {\n        logger.info(`getList ${tos(params)}`);\n      }),\n      () => {\n        throw Error("TODO getList");\n      },\n    ])();\n\n  const getByName = getByNameCore({ getList, findName });\n\n  const getById = pipe([\n    tap(({ id }) => {\n      logger.info(`getById ${id}`);\n    }),\n    () => {\n      throw Error("TODO getById");\n    },\n    tap((result) => {\n      logger.debug(`getById result: ${tos(result)}`);\n    }),\n  ]);\n\n  const isInstanceUp = (instance) => {\n    throw Error("TODO isInstanceUp");\n  };\n\n  const isUpById = isUpByIdCore({ isInstanceUp, getById });\n  const isDownById = isDownByIdCore({ getById });\n\n  const create = ({ name, payload = {} }) =>\n    pipe([\n      tap(() => {\n        logger.debug(`create: ${name}, ${tos(payload)}`);\n      }),\n      () => {\n        throw Error("TODO create");\n      },\n      tap(() =>\n        retryCall({\n          name: `isUpById: ${name} id: ${id}`,\n          fn: () => isUpById({ name, id }),\n          config,\n        })\n      ),\n      tap(() => {\n        logger.info(`created:`);\n      }),\n    ])();\n\n  const destroy = ({ live, lives }) =>\n    pipe([\n      () => ({ id: findId({ live }), name: findName({ live, lives }) }),\n      ({ id, name }) =>\n        pipe([\n          tap(() => {\n            logger.info(`destroy ${JSON.stringify({ name, id })}`);\n          }),\n          () => {\n            throw Error("TODO destroy");\n          },\n          tap(() =>\n            retryCall({\n              name: `isDownById: ${id}`,\n              fn: () => isDownById({ id }),\n              config,\n            })\n          ),\n          tap(() => {\n            logger.info(`destroyed ${JSON.stringify({ name, id })}`);\n          }),\n        ])(),\n    ])();\n\n  const configDefault = ({ name, properties, dependencies }) =>\n    defaultsDeep({})(properties);\n\n  return {\n    spec,\n    isInstanceUp,\n    isUpById,\n    isDownById,\n    findId,\n    getByName,\n    getById,\n    findName,\n    create,\n    destroy,\n    getList,\n    configDefault,\n    shouldRetryOnException,\n  };\n};\n')),(0,o.kt)("p",null,"We'll implement the following functions later on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"findId,"),(0,o.kt)("li",{parentName:"ul"},"findName,"),(0,o.kt)("li",{parentName:"ul"},"getList"),(0,o.kt)("li",{parentName:"ul"},"isInstanceUp,"),(0,o.kt)("li",{parentName:"ul"},"getById"),(0,o.kt)("li",{parentName:"ul"},"create"),(0,o.kt)("li",{parentName:"ul"},"destroy"),(0,o.kt)("li",{parentName:"ul"},"configDefault")),(0,o.kt)("h3",{id:"elbtestawsloadbalancertestjs"},"ELB/testAwsLoadBalancer.test.js"),(0,o.kt)("p",null,"Create the test file ",(0,o.kt)("em",{parentName:"p"},"packages/providers/aws/ELB/test/AwsLoadBalancer.test.js"),", add this boilerplate code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// ELB/testAwsLoadBalancer.test.js\nconst assert = require("assert");\nconst { AwsProvider } = require("../../AwsProvider");\nconst { ConfigLoader } = require("@grucloud/core/ConfigLoader");\nconst {\n  testPlanDeploy,\n  testPlanDestroy,\n} = require("@grucloud/core/E2ETestUtils");\n\ndescribe("AwsLoadBalancer", async function () {\n  let config;\n  let provider;\n  let loadBalancer;\n  let loadBalancerName = "lb";\n  const types = ["LoadBalancer"];\n\n  before(async function () {\n    try {\n      config = ConfigLoader({ path: "../../../examples/multi" });\n    } catch (error) {\n      this.skip();\n    }\n    provider = AwsProvider({\n      config: () => ({ projectName: "gru-test" }),\n    });\n\n    await provider.start();\n\n    loadBalancer = provider.ELBv2.makeLoadBalancer({\n      name: loadBalancerName,\n      properties: () => ({\n        // TODO\n      }),\n    });\n  });\n  after(async () => {});\n  it("load balancer apply plan", async function () {\n    await testPlanDeploy({\n      provider,\n      types,\n    });\n\n    await testPlanDestroy({ provider, types });\n  });\n});\n')),(0,o.kt)("h3",{id:"elbelbspecjs"},"ELB/ELBSpec.js"),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"ELBSpec.js"),", we declare the list of resources belonging to ELB, for now just a the ",(0,o.kt)("em",{parentName:"p"},"AwsLoadBalancer"),"\nFor each resources, we specify the ",(0,o.kt)("em",{parentName:"p"},"type"),", the list of dependencies through ",(0,o.kt)("em",{parentName:"p"},"dependsOn"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// packages/providers/aws/ELB/ELBSpec.js\nconst { isOurMinion } = require("../AwsCommon");\nconst { AwsLoadBalancer } = require("./AwsLoadBalancer");\n\nmodule.exports = [\n  {\n    type: "LoadBalancer",\n    dependsOn: ["Subnet", "SecurityGroup", "Certificate"],\n    Client: AwsLoadBalancer,\n    isOurMinion,\n  },\n];\n')),(0,o.kt)("h3",{id:"elbindexjs"},"ELB/index.js"),(0,o.kt)("p",null,"Create the file ",(0,o.kt)("em",{parentName:"p"},"ELB/index.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// ELB/index.js\nmodule.exports = require("./ELBSpec");\n')),(0,o.kt)("p",null,"###\xa0AwsProvider.js"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"ELB/ELBSpec.js")," and ",(0,o.kt)("em",{parentName:"p"},"index.js")," created in the previous step is imported in ",(0,o.kt)("em",{parentName:"p"},"AwsProvider.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// AwsProvider.js\nconst AwsELB = require("./ELB");\n\nconst fnSpecs = () => [\n  // Other module here\n  ...AwsELB,\n];\n')),(0,o.kt)("p",null,"Now let's set the ELB api versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// AwsProvider.js\nAWS.config.apiVersions = {\n  // Other versions\n  elb: "2012-06-01",\n};\n')),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"At the stage, we have the necessary boilerplate code to start testing."),(0,o.kt)("p",null,"To only execute our new load balancer test suite, we'll add ",(0,o.kt)("strong",{parentName:"p"},".only")," to the ",(0,o.kt)("em",{parentName:"p"},"describe")," function in ",(0,o.kt)("em",{parentName:"p"},"ELB/testAwsLoadBalancer.test.js")),(0,o.kt)("p",null,"We are ready to test by running this command in the ",(0,o.kt)("em",{parentName:"p"},"packages/providers/aws")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm test\n")),(0,o.kt)("p",null,"At this stage, the expected result is a one failed test as we still have to implement ",(0,o.kt)("em",{parentName:"p"},"AwsLoadBalancer.js")),(0,o.kt)("p",null,"The log files ",(0,o.kt)("em",{parentName:"p"},"grucloud-debug.log"),", ",(0,o.kt)("em",{parentName:"p"},"grucloud-info.log")," and ",(0,o.kt)("em",{parentName:"p"},"grucloud-error.log")," will inform you about what happened."),(0,o.kt)("p",null,"Open ",(0,o.kt)("em",{parentName:"p"},"grucloud-debug.log"),' and search for "Error:"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"08:57:21.122 error: Common       Error: TODO getList\n    at items (/Users/fredericheem/grucloud/packages/providers/aws/ELB/AwsLoadBalancer.js:38:15)\n")),(0,o.kt)("p",null,"The exception ",(0,o.kt)("strong",{parentName:"p"},"getList")," has been thrown, as expected."),(0,o.kt)("h1",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"We recommend VS Code for debugging, many debug configuration has already been created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the GruCloud project source code as its root."),(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("em",{parentName:"li"},"AwsLoadBalancer.js")),(0,o.kt)("li",{parentName:"ul"},"Set a breakpoint in ",(0,o.kt)("strong",{parentName:"li"},"getList")," and the ",(0,o.kt)("strong",{parentName:"li"},"logger.info")," line."),(0,o.kt)("li",{parentName:"ul"},"Click on the debug icon on the left navigration bar"),(0,o.kt)("li",{parentName:"ul"},'Select the "Debug Aws Provider" and click on the green arrow to start debugging.'),(0,o.kt)("li",{parentName:"ul"},"You should expect the program to stop at the breakpoint.")),(0,o.kt)("h1",{id:"implementation-code"},"Implementation code"),(0,o.kt)("h2",{id:"awsloadbalancerjs-1"},"AwsLoadBalancer.js"),(0,o.kt)("p",null,"To list all the load balancers for a given account, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#describeLoadBalancers-property"},"describeLoadBalancers")," function."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"describeLoadBalancers")," ",(0,o.kt)("em",{parentName:"p"},"json")," output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  LoadBalancerDescriptions: [\n    {\n      AvailabilityZones: ["us-west-2a"],\n      BackendServerDescriptions: [\n        {\n          InstancePort: 80,\n          PolicyNames: ["my-ProxyProtocol-policy"],\n        },\n      ],\n      CanonicalHostedZoneName:\n        "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",\n      CanonicalHostedZoneNameID: "Z3DZXE0EXAMPLE",\n      CreatedTime: "",\n      DNSName: "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",\n      HealthCheck: {\n        HealthyThreshold: 2,\n        Interval: 30,\n        Target: "HTTP:80/png",\n        Timeout: 3,\n        UnhealthyThreshold: 2,\n      },\n      Instances: [\n        {\n          InstanceId: "i-207d9717",\n        },\n        {\n          InstanceId: "i-afefb49b",\n        },\n      ],\n      ListenerDescriptions: [\n        {\n          Listener: {\n            InstancePort: 80,\n            InstanceProtocol: "HTTP",\n            LoadBalancerPort: 80,\n            Protocol: "HTTP",\n          },\n          PolicyNames: [],\n        },\n        {\n          Listener: {\n            InstancePort: 443,\n            InstanceProtocol: "HTTPS",\n            LoadBalancerPort: 443,\n            Protocol: "HTTPS",\n            SSLCertificateId:\n              "arn:aws:iam::123456789012:server-certificate/my-server-cert",\n          },\n          PolicyNames: ["ELBSecurityPolicy-2015-03"],\n        },\n      ],\n      LoadBalancerName: "my-load-balancer",\n      Policies: {\n        AppCookieStickinessPolicies: [],\n        LBCookieStickinessPolicies: [\n          {\n            CookieExpirationPeriod: 60,\n            PolicyName: "my-duration-cookie-policy",\n          },\n        ],\n        OtherPolicies: [\n          "my-PublicKey-policy",\n          "my-authentication-policy",\n          "my-SSLNegotiation-policy",\n          "my-ProxyProtocol-policy",\n          "ELBSecurityPolicy-2015-03",\n        ],\n      },\n      Scheme: "internet-facing",\n      SecurityGroups: ["sg-a61988c3"],\n      SourceSecurityGroup: {\n        GroupName: "my-elb-sg",\n        OwnerAlias: "123456789012",\n      },\n      Subnets: ["subnet-15aaab61"],\n      VPCId: "vpc-a01106c2",\n    },\n  ];\n}\n')),(0,o.kt)("h4",{id:"getlist"},"getList()"),(0,o.kt)("p",null,"From the shape of the result we can now write the ",(0,o.kt)("em",{parentName:"p"},"getList")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const getList = ({ params } = {}) =>\n  pipe([\n    tap(() => {\n      logger.info(`getList ${tos(params)}`);\n    }),\n    () => elb().describeLoadBalancers(params),\n    get("LoadBalancerDescriptions"),\n    tap((results) => {\n      logger.debug(`getList: result: ${tos(results)}`);\n    }),\n  ])();\n')),(0,o.kt)("h4",{id:"findname"},"findName()"),(0,o.kt)("p",null,"Again by looking at the shape of the output of ",(0,o.kt)("strong",{parentName:"p"},"LoadBalancerName"),", we find the key name which is in this case ",(0,o.kt)("strong",{parentName:"p"},"LoadBalancerName"),".\nHence the ",(0,o.kt)("em",{parentName:"p"},"findName")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const findName = ({ live }) => live.LoadBalancerName;\n")),(0,o.kt)("p",null,"Which could be simplify with ",(0,o.kt)("em",{parentName:"p"},"rubico"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const findName = get("live.LoadBalancerName");\n')),(0,o.kt)("h4",{id:"findid"},"findId()"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"describeLoadBalancers")," ",(0,o.kt)("em",{parentName:"p"},"json")," input is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var params = {\n  LoadBalancerNames: ["my-load-balancer"],\n};\n')),(0,o.kt)("p",null,"In this case the id the same as the name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const findId = findName;\n")),(0,o.kt)("h4",{id:"getbyname"},"getByName()"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"describeLoadBalancers")," can also be used to retrieve just one load balancer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const getByName = ({ name }) =>\n  pipe([\n    tap(() => {\n      logger.info(`getByName ${name}`);\n    }),\n    () => ({ LoadBalancerNames: [name] }),\n    (params) => elb().describeLoadBalancers(params),\n    get("LoadBalancerDescriptions"),\n    first,\n    tap((result) => {\n      logger.debug(`getByName result: ${tos(result)}`);\n    }),\n  ])();\n')),(0,o.kt)("h4",{id:"getbyid"},"getById()"),(0,o.kt)("p",null,"In the case of the load balancer resource, the name and id means the same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getById = ({ id }) => getByName({ name: id });\n")),(0,o.kt)("h2",{id:"resource-creation"},"Resource Creation"),(0,o.kt)("p",null,"To create a load balancer, we'll use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#createLoadBalancer-property"},"createLoadBalancer")," function."),(0,o.kt)("p",null,"From the offical documentation, here are the parameters to create a HTTPS Load Balancer in a VPC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var params = {\n  Listeners: [\n    {\n      InstancePort: 80,\n      InstanceProtocol: "HTTP",\n      LoadBalancerPort: 80,\n      Protocol: "HTTP",\n    },\n    {\n      InstancePort: 80,\n      InstanceProtocol: "HTTP",\n      LoadBalancerPort: 443,\n      Protocol: "HTTPS",\n      SSLCertificateId:\n        "arn:aws:iam::123456789012:server-certificate/my-server-cert",\n    },\n  ],\n  LoadBalancerName: "my-load-balancer",\n  SecurityGroups: ["sg-a61988c3"],\n  Subnets: ["subnet-15aaab61"],\n};\n')),(0,o.kt)("p",null,"This tells us that the load balancer depends on the following resources that need to be created before:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SecurityGroups"),(0,o.kt)("li",{parentName:"ul"},"Subnets"),(0,o.kt)("li",{parentName:"ul"},"SSL Certificate")),(0,o.kt)("p",null,"Subnets and SecurityGroups depends on a VPC so we'll create one too.\nThe load balancer also requires an Internet Gateway to be attached to the gateway.\nWe have now all the informations on how to create a load balancer and its dependencies. Have a look at ","[ELB/test/AwsLoadBalancer.test.js]"," for the final result."),(0,o.kt)("h4",{id:"configdefault"},"configDefault()"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"configDefault")," function infers the parameters for the resource creation.\nThe load balancer depends on an array of subnets and security groups. We'll retrieve these values with the help of the ",(0,o.kt)("strong",{parentName:"p"},"getField")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const configDefault = ({\n  name,\n  properties,\n  dependencies: { subnets, securityGroups },\n}) =>\n  pipe([\n    tap(() => {\n      assert(Array.isArray(securityGroups));\n      assert(Array.isArray(subnets));\n    }),\n    () => properties,\n    defaultsDeep({\n      LoadBalancerName: name,\n      SecurityGroups: map((securityGroup) =>\n        getField(securityGroup, "GroupId")\n      )(securityGroups),\n      Subnets: map((subnet) => getField(subnet, "SubnetId"))(subnets),\n    }),\n  ])();\n')),(0,o.kt)("h4",{id:"isinstanceup"},"isInstanceUp()"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"isInstanceUp")," is going to be used by ",(0,o.kt)("em",{parentName:"p"},"isUpById")," and indicates if the resource is up. The load balancer does not contains any state or status field, therefore we consider the load balancer is if it exists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isInstanceUp = (live) => live;\n")),(0,o.kt)("p",null,"Simplify with rubico with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isInstanceUp = not(isEmpty);\n")),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"Now that the ",(0,o.kt)("em",{parentName:"p"},"configDefault")," and ",(0,o.kt)("em",{parentName:"p"},"isInstanceUp")," are implemented, we can write the ",(0,o.kt)("em",{parentName:"p"},"create")," function.\nWe start calling the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#createLoadBalancer-property"},"aws createLoadBalancer")," function, we check that the resource is up."),(0,o.kt)("p",null,"We tag the resource with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#addTags-property"},"addTags")," to so we know they have been created by GruCloud."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const create = async ({ name, payload }) =>\n  pipe([\n    tap(() => {\n      logger.debug(`create: ${name}, ${tos(payload)}`);\n    }),\n    () => elb().createLoadBalancer(payload),\n    tap(() =>\n      retryCall({\n        name: `load balancer isUpById: ${name} id: ${id}`,\n        fn: () => isUpById({ name, id }),\n        config,\n      })\n    ),\n    tap(() =>\n      elb().addTags({\n        LoadBalancerNames: [name],\n        Tags: buildTags({ name, config, UserTags: payload.Tags }),\n      })\n    ),\n    tap(({ DNSName }) => {\n      logger.info(`created: ${DNSName}`);\n    }),\n  ])();\n")),(0,o.kt)("h3",{id:"destroy"},"Destroy"),(0,o.kt)("p",null,"We'll use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#deleteLoadBalancer-property"},"deleteLoadBalancer")," to destroy the load baancer. We then check that the resource is down."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const destroy = async ({ live }) =>\n  pipe([\n    () => ({ id: findId({ live }), name: findName({ live }) }),\n    ({ id, name }) =>\n      pipe([\n        tap(() => {\n          logger.info(`destroy ${JSON.stringify({ name })}`);\n        }),\n        () => ({\n          LoadBalancerName: name,\n        }),\n        (params) => elb().deleteLoadBalancer(params),\n        tap(() =>\n          retryCall({\n            name: `load balancer isDownById: ${id}`,\n            fn: () => isDownById({ id }),\n            config,\n          })\n        ),\n        tap(() => {\n          logger.info(`destroyed ${JSON.stringify({ name })}`);\n        }),\n      ])(),\n  ])();\n")),(0,o.kt)("p",null,"Congratulation, the load balancer has been implemented, tested and documented."),(0,o.kt)("p",null,"The remaining task it to use the load balancer in the EKS module."))}u.isMDXComponent=!0}}]);