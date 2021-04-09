(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return s})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return b}));var t=a(2),r=a(6),c=(a(0),a(213)),o={id:"AwsResourceHowto",title:"How to implement a new AWS Resources"},s={id:"aws/AwsResourceHowto",isDocsHomePage:!1,title:"How to implement a new AWS Resources",description:"This document will guide you through implementing a new AWS Resource for the GruCloud AWS provider.",source:"@site/docs/aws/AwsResourceHowto.md",permalink:"/docs/aws/AwsResourceHowto",sidebar:"someSidebar",previous:{title:"Modules",permalink:"/docs/aws/AwsModules"},next:{title:"How to implement a new AWS Module",permalink:"/docs/aws/AwsModuleHowto"}},l=[{value:"Clone the code",id:"clone-the-code",children:[]},{value:"Aws Provider",id:"aws-provider",children:[]},{value:"Creating the files &amp; directories",id:"creating-the-files--directories",children:[{value:"README.md",id:"readmemd",children:[]}]},{value:"AwsCommon.js",id:"awscommonjs",children:[]},{value:"AwsLoadBalancer.js",id:"awsloadbalancerjs",children:[{value:"ELB/testAwsLoadBalancer.test.js",id:"elbtestawsloadbalancertestjs",children:[]},{value:"ELB/ELBSpec.js",id:"elbelbspecjs",children:[]},{value:"ELB/index.js",id:"elbindexjs",children:[]}]},{value:"AwsLoadBalancer.js",id:"awsloadbalancerjs-1",children:[]},{value:"Resource Creation",id:"resource-creation",children:[{value:"Create",id:"create",children:[]},{value:"Destroy",id:"destroy",children:[]}]}],i={rightToc:l};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document will guide you through implementing a new AWS Resource for the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@grucloud/provider-aws"}),"GruCloud AWS provider"),"."),Object(c.b)("p",null,"Case study: ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/elasticloadbalancing/"}),"Elastic Load Balancer (ELB)")),Object(c.b)("p",null,"The implementation leverages the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/aws-sdk"}),"aws-sdk")," for Node, bookmark the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html"}),"the Javascropt SDK documentaion")," as it is the main source of information to develop this code."),Object(c.b)("h1",{id:"requirements"},"Requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AWS account"),Object(c.b)("li",{parentName:"ul"},"AWS CLI: ",Object(c.b)("inlineCode",{parentName:"li"},"aws --version")),Object(c.b)("li",{parentName:"ul"},"AWS access and secret key"),Object(c.b)("li",{parentName:"ul"},"Configure authentication ans region with ",Object(c.b)("inlineCode",{parentName:"li"},"aws configure")),Object(c.b)("li",{parentName:"ul"},"Node 14: ",Object(c.b)("inlineCode",{parentName:"li"},"node --version")),Object(c.b)("li",{parentName:"ul"},"VS code for editing and debugging.")),Object(c.b)("h1",{id:"getting-started"},"Getting Started"),Object(c.b)("h2",{id:"clone-the-code"},"Clone the code"),Object(c.b)("p",null,"Visit the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/grucloud/grucloud"}),"Grucloud github page")," and fork the monorepo.\nClone the repository on your local machine:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"git clone git@github.com:<yourusername>/grucloud.git\ncd grucloud\n")),Object(c.b)("p",null,"##\xa0Dependencies\nInstall the dependencies with the ",Object(c.b)("em",{parentName:"p"},"bootstrap")," npm script:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install\nnpm run bootstrap\n")),Object(c.b)("p",null,"This monorepo contains a lot a packages that depends on each others. ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"lerna")," is helping us to manage this situation."),Object(c.b)("h2",{id:"aws-provider"},"Aws Provider"),Object(c.b)("p",null,"Change to the aws provider package directory:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"cd packages/providers/aws\n")),Object(c.b)("p",null,"Run the existing test suite and ensure they pass."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"npm test\n")),Object(c.b)("h2",{id:"creating-the-files--directories"},"Creating the files & directories"),Object(c.b)("p",null,"Create the ELB directory that will contains the ELB resources: LoadBalancer. Create as well as a test directory:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"packages/providers/aws $ mkdir ELB\npackages/providers/aws $ mkdir ELB/test\n")),Object(c.b)("h1",{id:"documentation"},"Documentation"),Object(c.b)("p",null,"We'll describe how to add documentation for this resources."),Object(c.b)("p",null,"Create the ELB directory in ",Object(c.b)("em",{parentName:"p"},"docusurus/docs/aws/resources/ELB"),"."),Object(c.b)("p",null,"Create the markdown file ",Object(c.b)("em",{parentName:"p"},"docusurus/docs/aws/resources/ELB/AwsLoadBalancer.md")," and fill it with this basic information:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-md"}),"---\nid: AwsLoadBalancer\ntitle: Load Balancer\n---\n\nManage an AWS Load Balancer.\n")),Object(c.b)("p",null,"Edit ",Object(c.b)("em",{parentName:"p"},"docusaurus/sidebars.js"),", Add the ELB section as well as ",Object(c.b)("em",{parentName:"p"},"AwsLoadBalancer.md")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'//sidebars.js\n[...]\n{\n  "ELB": ["aws/resources/ELB/AwsLoadBalancer"]\n}\n[...]\n')),Object(c.b)("p",null,"To view the documentation locally, start the docusaurus development server:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"cd docusaurus\nnpm install\nnpm start\n")),Object(c.b)("h3",{id:"readmemd"},"README.md"),Object(c.b)("p",null,"Edit ",Object(c.b)("em",{parentName:"p"},"packages/providers/aws/README.md")," and add the new resource in the ",Object(c.b)("em",{parentName:"p"},"Resources")," section:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-md"}),"- ELB: [Load Balancer](https://grucloud.com/docs/aws/resources/ELB/Loadbalancer),\n")),Object(c.b)("p",null,"#\xa0Boiler plate code"),Object(c.b)("p",null,"The following section describes the files to create and edit."),Object(c.b)("h2",{id:"awscommonjs"},"AwsCommon.js"),Object(c.b)("p",null,"In order to handle various errors, all AWS calls goes through a facade. We need to create this facade for ",Object(c.b)("em",{parentName:"p"},"ELB"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// AwsCommon.js\nexports.ELBNew = (config) => () =>\n  createEndpoint({ endpointName: "ELB" })(config);\n')),Object(c.b)("h2",{id:"awsloadbalancerjs"},"AwsLoadBalancer.js"),Object(c.b)("p",null,"Create the file ",Object(c.b)("em",{parentName:"p"},"packages/providers/aws/ELB/AwsLoadBalancer.js")," and add the following boilerplate code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// ELB/AwsLoadBalancer.js\nconst assert = require("assert");\nconst { map, pipe, tap, tryCatch, get, switchCase, eq } = require("rubico");\nconst { defaultsDeep } = require("rubico/x");\n\nconst logger = require("@grucloud/core/logger")({\n  prefix: "LoadBalancer",\n});\nconst { retryCall } = require("@grucloud/core/Retry");\nconst { tos } = require("@grucloud/core/tos");\nconst {\n  getByNameCore,\n  isUpByIdCore,\n  isDownByIdCore,\n} = require("@grucloud/core/Common");\nconst {\n  ELBNew,\n  buildTags,\n  findNameInTags,\n  shouldRetryOnException,\n} = require("../AwsCommon");\n\nconst findName = () => {\n  throw Error("TODO findName");\n};\nconst findId = () => {\n  throw Error("TODO findId");\n};\n\nexports.AwsLoadBalancer = ({ spec, config }) => {\n  const elb = ELBNew(config);\n\n  const getList = async ({ params } = {}) =>\n    pipe([\n      tap(() => {\n        logger.info(`getList ${tos(params)}`);\n      }),\n      () => {\n        throw Error("TODO getList");\n      },\n      (items = []) => ({\n        total: items.length,\n        items,\n      }),\n      tap(({ total }) => {\n        logger.info(`getList: ${total}`);\n      }),\n    ])();\n\n  const getByName = ({ name }) => getByNameCore({ name, getList, findName });\n\n  const getById = pipe([\n    tap(({ id }) => {\n      logger.info(`getById ${id}`);\n    }),\n    () => {\n      throw Error("TODO getById");\n    },\n    tap((result) => {\n      logger.debug(`getById result: ${tos(result)}`);\n    }),\n  ]);\n\n  const isInstanceUp = (instance) => {\n    throw Error("TODO isInstanceUp");\n  };\n\n  const isUpById = isUpByIdCore({ isInstanceUp, getById });\n  const isDownById = isDownByIdCore({ getById });\n\n  const create = async ({ name, payload = {} }) =>\n    pipe([\n      tap(() => {\n        logger.debug(`create: ${name}, ${tos(payload)}`);\n      }),\n      () => {\n        throw Error("TODO create");\n      },\n      tap(() =>\n        retryCall({\n          name: `isUpById: ${name} id: ${id}`,\n          fn: () => isUpById({ name, id }),\n          config,\n        })\n      ),\n      tap(() => {\n        logger.info(`created:`);\n      }),\n    ])();\n\n  const destroy = async ({ live }) =>\n    pipe([\n      () => ({ id: findId(live), name: findName(live) }),\n      ({ id, name }) =>\n        pipe([\n          tap(() => {\n            logger.info(`destroy ${JSON.stringify({ name, id })}`);\n          }),\n          () => {\n            throw Error("TODO destroy");\n          },\n          tap(() =>\n            retryCall({\n              name: `isDownById: ${id}`,\n              fn: () => isDownById({ id }),\n              config,\n            })\n          ),\n          tap(() => {\n            logger.info(`destroyed ${JSON.stringify({ name, id })}`);\n          }),\n        ])(),\n    ])();\n\n  const configDefault = async ({ name, properties, dependencies }) =>\n    defaultsDeep({})(properties);\n\n  return {\n    type: "LoadBalancer",\n    spec,\n    isInstanceUp,\n    isUpById,\n    isDownById,\n    findId,\n    getByName,\n    getById,\n    findName,\n    create,\n    destroy,\n    getList,\n    configDefault,\n    shouldRetryOnException,\n  };\n};\n')),Object(c.b)("p",null,"We'll implement the following functions later on:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"findId,"),Object(c.b)("li",{parentName:"ul"},"findName,"),Object(c.b)("li",{parentName:"ul"},"getList"),Object(c.b)("li",{parentName:"ul"},"isInstanceUp,"),Object(c.b)("li",{parentName:"ul"},"getById"),Object(c.b)("li",{parentName:"ul"},"create"),Object(c.b)("li",{parentName:"ul"},"destroy"),Object(c.b)("li",{parentName:"ul"},"configDefault")),Object(c.b)("h3",{id:"elbtestawsloadbalancertestjs"},"ELB/testAwsLoadBalancer.test.js"),Object(c.b)("p",null,"Create the test file ",Object(c.b)("em",{parentName:"p"},"packages/providers/aws/ELB/test/AwsLoadBalancer.test.js"),", add this boilerplate code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// ELB/testAwsLoadBalancer.test.js\nconst assert = require("assert");\nconst { AwsProvider } = require("../../AwsProvider");\nconst { ConfigLoader } = require("@grucloud/core/ConfigLoader");\nconst {\n  testPlanDeploy,\n  testPlanDestroy,\n} = require("@grucloud/core/E2ETestUtils");\n\ndescribe("AwsLoadBalancer", async function () {\n  let config;\n  let provider;\n  let loadBalancer;\n  let loadBalancerName = "lb";\n  const types = ["LoadBalancer"];\n\n  before(async function () {\n    try {\n      config = ConfigLoader({ path: "../../../examples/multi" });\n    } catch (error) {\n      this.skip();\n    }\n    provider = AwsProvider({\n      config: () => ({ projectName: "gru-test" }),\n    });\n\n    await provider.start();\n\n    loadBalancer = await provider.makeLoadBalancer({\n      name: loadBalancerName,\n      properties: () => ({\n        // TODO\n      }),\n    });\n  });\n  after(async () => {});\n  it("load balancer apply plan", async function () {\n    await testPlanDeploy({\n      provider,\n      types,\n    });\n\n    await testPlanDestroy({ provider, types });\n  });\n});\n')),Object(c.b)("h3",{id:"elbelbspecjs"},"ELB/ELBSpec.js"),Object(c.b)("p",null,"In ",Object(c.b)("em",{parentName:"p"},"ELBSpec.js"),", we declare the list of resources belonging to ELB, for now just a the ",Object(c.b)("em",{parentName:"p"},"AwsLoadBalancer"),"\nFor each resources, we specify the ",Object(c.b)("em",{parentName:"p"},"type"),", the list of dependencies through ",Object(c.b)("em",{parentName:"p"},"dependsOn"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// packages/providers/aws/ELB/ELBSpec.js\nconst { isOurMinion } = require("../AwsCommon");\nconst { AwsLoadBalancer } = require("./AwsLoadBalancer");\n\nmodule.exports = [\n  {\n    type: "LoadBalancer",\n    dependsOn: ["Subnet", "SecurityGroup", "Certificate"],\n    Client: AwsLoadBalancer,\n    isOurMinion,\n  },\n];\n')),Object(c.b)("h3",{id:"elbindexjs"},"ELB/index.js"),Object(c.b)("p",null,"Create the file ",Object(c.b)("em",{parentName:"p"},"ELB/index.js"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// ELB/index.js\nmodule.exports = require("./ELBSpec");\n')),Object(c.b)("p",null,"###\xa0AwsProvider.js"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"ELB/ELBSpec.js")," and ",Object(c.b)("em",{parentName:"p"},"index.js")," created in the previous step is imported in ",Object(c.b)("em",{parentName:"p"},"AwsProvider.js")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// AwsProvider.js\nconst AwsELB = require("./ELB");\n\nconst fnSpecs = () => [\n  // Other module here\n  ...AwsELB,\n];\n')),Object(c.b)("p",null,"Now let's set the ELB api versions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'// AwsProvider.js\nAWS.config.apiVersions = {\n  // Other versions\n  elb: "2012-06-01",\n};\n')),Object(c.b)("h1",{id:"testing"},"Testing"),Object(c.b)("p",null,"At the stage, we have the necessary boilerplate code to start testing."),Object(c.b)("p",null,"To only execute our new load balancer test suite, we'll add ",Object(c.b)("strong",{parentName:"p"},".only")," to the ",Object(c.b)("em",{parentName:"p"},"describe")," function in ",Object(c.b)("em",{parentName:"p"},"ELB/testAwsLoadBalancer.test.js")),Object(c.b)("p",null,"We are ready to test by running this command in the ",Object(c.b)("em",{parentName:"p"},"packages/providers/aws")," directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"npm test\n")),Object(c.b)("p",null,"At this stage, the expected result is a one failed test as we still have to implement ",Object(c.b)("em",{parentName:"p"},"AwsLoadBalancer.js")),Object(c.b)("p",null,"The log files ",Object(c.b)("em",{parentName:"p"},"grucloud-debug.log"),", ",Object(c.b)("em",{parentName:"p"},"grucloud-info.log")," and ",Object(c.b)("em",{parentName:"p"},"grucloud-error.log")," will inform you about what happened."),Object(c.b)("p",null,"Open ",Object(c.b)("em",{parentName:"p"},"grucloud-debug.log"),' and search for "Error:"'),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"08:57:21.122 error: Common       Error: TODO getList\n    at items (/Users/fredericheem/grucloud/packages/providers/aws/ELB/AwsLoadBalancer.js:38:15)\n")),Object(c.b)("p",null,"The exception ",Object(c.b)("strong",{parentName:"p"},"getList")," has been thrown, as expected."),Object(c.b)("h1",{id:"debugging"},"Debugging"),Object(c.b)("p",null,"We recommend VS Code for debugging, many debug configuration has already been created."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open the GruCloud project source code as its root."),Object(c.b)("li",{parentName:"ul"},"Open ",Object(c.b)("em",{parentName:"li"},"AwsLoadBalancer.js")),Object(c.b)("li",{parentName:"ul"},"Set a breakpoint in ",Object(c.b)("strong",{parentName:"li"},"getList")," and the ",Object(c.b)("strong",{parentName:"li"},"logger.info")," line."),Object(c.b)("li",{parentName:"ul"},"Click on the debug icon on the left navigration bar"),Object(c.b)("li",{parentName:"ul"},'Select the "Debug Aws Provider" and click on the green arrow to start debugging.'),Object(c.b)("li",{parentName:"ul"},"You should expect the program to stop at the breakpoint.")),Object(c.b)("h1",{id:"implementation-code"},"Implementation code"),Object(c.b)("h2",{id:"awsloadbalancerjs-1"},"AwsLoadBalancer.js"),Object(c.b)("p",null,"To list all the load balancers for a given account, we'll use the (describeLoadBalancers)","[https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#describeLoadBalancers-property]"," function."),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"describeLoadBalancers")," ",Object(c.b)("em",{parentName:"p"},"json")," output is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'{\n  LoadBalancerDescriptions: [\n    {\n      AvailabilityZones: ["us-west-2a"],\n      BackendServerDescriptions: [\n        {\n          InstancePort: 80,\n          PolicyNames: ["my-ProxyProtocol-policy"],\n        },\n      ],\n      CanonicalHostedZoneName:\n        "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",\n      CanonicalHostedZoneNameID: "Z3DZXE0EXAMPLE",\n      CreatedTime: "",\n      DNSName: "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",\n      HealthCheck: {\n        HealthyThreshold: 2,\n        Interval: 30,\n        Target: "HTTP:80/png",\n        Timeout: 3,\n        UnhealthyThreshold: 2,\n      },\n      Instances: [\n        {\n          InstanceId: "i-207d9717",\n        },\n        {\n          InstanceId: "i-afefb49b",\n        },\n      ],\n      ListenerDescriptions: [\n        {\n          Listener: {\n            InstancePort: 80,\n            InstanceProtocol: "HTTP",\n            LoadBalancerPort: 80,\n            Protocol: "HTTP",\n          },\n          PolicyNames: [],\n        },\n        {\n          Listener: {\n            InstancePort: 443,\n            InstanceProtocol: "HTTPS",\n            LoadBalancerPort: 443,\n            Protocol: "HTTPS",\n            SSLCertificateId:\n              "arn:aws:iam::123456789012:server-certificate/my-server-cert",\n          },\n          PolicyNames: ["ELBSecurityPolicy-2015-03"],\n        },\n      ],\n      LoadBalancerName: "my-load-balancer",\n      Policies: {\n        AppCookieStickinessPolicies: [],\n        LBCookieStickinessPolicies: [\n          {\n            CookieExpirationPeriod: 60,\n            PolicyName: "my-duration-cookie-policy",\n          },\n        ],\n        OtherPolicies: [\n          "my-PublicKey-policy",\n          "my-authentication-policy",\n          "my-SSLNegotiation-policy",\n          "my-ProxyProtocol-policy",\n          "ELBSecurityPolicy-2015-03",\n        ],\n      },\n      Scheme: "internet-facing",\n      SecurityGroups: ["sg-a61988c3"],\n      SourceSecurityGroup: {\n        GroupName: "my-elb-sg",\n        OwnerAlias: "123456789012",\n      },\n      Subnets: ["subnet-15aaab61"],\n      VPCId: "vpc-a01106c2",\n    },\n  ];\n}\n')),Object(c.b)("h4",{id:"getlist"},"getList()"),Object(c.b)("p",null,"From the shape of the result we can now write the ",Object(c.b)("em",{parentName:"p"},"getList")," function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const getList = async ({ params } = {}) =>\n  pipe([\n    tap(() => {\n      logger.info(`getList ${tos(params)}`);\n    }),\n    () => elb().describeLoadBalancers(params),\n    get("LoadBalancerDescriptions"),\n    tap((results) => {\n      logger.debug(`getList: result: ${tos(results)}`);\n    }),\n    (items = []) => ({\n      total: items.length,\n      items,\n    }),\n    tap(({ total }) => {\n      logger.info(`getList: #total: ${total}`);\n    }),\n  ])();\n')),Object(c.b)("h4",{id:"findname"},"findName()"),Object(c.b)("p",null,"Again by looking at the shape of the output of ",Object(c.b)("strong",{parentName:"p"},"LoadBalancerName"),", we find the key name which is in this case ",Object(c.b)("strong",{parentName:"p"},"LoadBalancerName"),".\nHence the ",Object(c.b)("em",{parentName:"p"},"findName")," function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const findName = (live) => live.LoadBalancerName;\n")),Object(c.b)("p",null,"Which could be simplify with ",Object(c.b)("em",{parentName:"p"},"rubico"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const findName = get("LoadBalancerName");\n')),Object(c.b)("h4",{id:"findid"},"findId()"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"describeLoadBalancers")," ",Object(c.b)("em",{parentName:"p"},"json")," input is"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'var params = {\n  LoadBalancerNames: ["my-load-balancer"],\n};\n')),Object(c.b)("p",null,"In this case the id the same as the name:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const findId = findName;\n")),Object(c.b)("h4",{id:"getbyname"},"getByName()"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"describeLoadBalancers")," can also be used to retrieve just one load balancer."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const getByName = ({ name }) =>\n  pipe([\n    tap(() => {\n      logger.info(`getByName ${name}`);\n    }),\n    () => ({ LoadBalancerNames: [name] }),\n    (params) => elb().describeLoadBalancers(params),\n    get("LoadBalancerDescriptions"),\n    first,\n    tap((result) => {\n      logger.debug(`getByName result: ${tos(result)}`);\n    }),\n  ])();\n')),Object(c.b)("h4",{id:"getbyid"},"getById()"),Object(c.b)("p",null,"In the case of the load balancer resource, the name and id means the same:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const getById = ({ id }) => getByName({ name: id });\n")),Object(c.b)("h2",{id:"resource-creation"},"Resource Creation"),Object(c.b)("p",null,"To create a load balancer, we'll use ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#createLoadBalancer-property"}),"createLoadBalancer")," function."),Object(c.b)("p",null,"From the offical documentation, here are the parameters to create a HTTPS Load Balancer in a VPC:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'var params = {\n  Listeners: [\n    {\n      InstancePort: 80,\n      InstanceProtocol: "HTTP",\n      LoadBalancerPort: 80,\n      Protocol: "HTTP",\n    },\n    {\n      InstancePort: 80,\n      InstanceProtocol: "HTTP",\n      LoadBalancerPort: 443,\n      Protocol: "HTTPS",\n      SSLCertificateId:\n        "arn:aws:iam::123456789012:server-certificate/my-server-cert",\n    },\n  ],\n  LoadBalancerName: "my-load-balancer",\n  SecurityGroups: ["sg-a61988c3"],\n  Subnets: ["subnet-15aaab61"],\n};\n')),Object(c.b)("p",null,"This tells us that the load balancer depends on the following resources that need to be created before:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"SecurityGroups"),Object(c.b)("li",{parentName:"ul"},"Subnets"),Object(c.b)("li",{parentName:"ul"},"SSL Certificate")),Object(c.b)("p",null,"Subnets and SecurityGroups depends on a VPC so we'll create one too.\nThe load balancer also requires an Internet Gateway to be attached to the gateway.\nWe have now all the informations on how to create a load balancer and its dependencies. Have a look at ","[ELB/test/AwsLoadBalancer.test.js]"," for the final result."),Object(c.b)("h4",{id:"configdefault"},"configDefault()"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"configDefault")," function infers the parameters for the resource creation.\nThe load balancer depends on an array of subnets and security groups. We'll retrieve these values with the help of the ",Object(c.b)("strong",{parentName:"p"},"getField")," function."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const configDefault = async ({\n  name,\n  properties,\n  dependencies: { subnets, securityGroups },\n}) =>\n  pipe([\n    tap(() => {\n      assert(Array.isArray(securityGroups));\n      assert(Array.isArray(subnets));\n    }),\n    () => properties,\n    defaultsDeep({\n      LoadBalancerName: name,\n      SecurityGroups: map((securityGroup) =>\n        getField(securityGroup, "GroupId")\n      )(securityGroups),\n      Subnets: map((subnet) => getField(subnet, "SubnetId"))(subnets),\n    }),\n  ])();\n')),Object(c.b)("h4",{id:"isinstanceup"},"isInstanceUp()"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"isInstanceUp")," is going to be used by ",Object(c.b)("em",{parentName:"p"},"isUpById")," and indicates if the resource is up. The load balancer does not contains any state or status field, therefore we consider the load balancer is if it exists."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const isInstanceUp = (live) => live;\n")),Object(c.b)("p",null,"Simplify with rubico with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const isInstanceUp = not(isEmpty);\n")),Object(c.b)("h3",{id:"create"},"Create"),Object(c.b)("p",null,"Now that the ",Object(c.b)("em",{parentName:"p"},"configDefault")," and ",Object(c.b)("em",{parentName:"p"},"isInstanceUp")," are implemented, we can write the ",Object(c.b)("em",{parentName:"p"},"create")," function.\nWe start calling the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"(https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#createLoadBalancer-property)"}),"aws createLoadBalancer")," function, we check that the resource is up."),Object(c.b)("p",null,"We tag the resource with ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#addTags-property"}),"addTags")," to so we know they have been created by GruCloud."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const create = async ({ name, payload }) =>\n  pipe([\n    tap(() => {\n      logger.debug(`create: ${name}, ${tos(payload)}`);\n    }),\n    () => elb().createLoadBalancer(payload),\n    tap(() =>\n      retryCall({\n        name: `load balancer isUpById: ${name} id: ${id}`,\n        fn: () => isUpById({ name, id }),\n        config,\n      })\n    ),\n    tap(() =>\n      elb().addTags({\n        LoadBalancerNames: [name],\n        Tags: buildTags({ name, config, UserTags: payload.Tags }),\n      })\n    ),\n    tap(({ DNSName }) => {\n      logger.info(`created: ${DNSName}`);\n    }),\n  ])();\n")),Object(c.b)("h3",{id:"destroy"},"Destroy"),Object(c.b)("p",null,"We'll use ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELB.html#deleteLoadBalancer-property"}),"deleteLoadBalancer")," to destroy the load baancer. We then check that the resource is down."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const destroy = async ({ live }) =>\n  pipe([\n    () => ({ id: findId(live), name: findName(live) }),\n    ({ id, name }) =>\n      pipe([\n        tap(() => {\n          logger.info(`destroy ${JSON.stringify({ name })}`);\n        }),\n        () => ({\n          LoadBalancerName: name,\n        }),\n        (params) => elb().deleteLoadBalancer(params),\n        tap(() =>\n          retryCall({\n            name: `load balancer isDownById: ${id}`,\n            fn: () => isDownById({ id }),\n            config,\n          })\n        ),\n        tap(() => {\n          logger.info(`destroyed ${JSON.stringify({ name })}`);\n        }),\n      ])(),\n  ])();\n")),Object(c.b)("p",null,"Congratulation, the load balancer has been implemented, tested and documented."),Object(c.b)("p",null,"The remaining task it to use the load balancer in the EKS module."))}b.isMDXComponent=!0},213:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=t,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,s(s({ref:n},i),{},{components:a})):r.a.createElement(m,s({ref:n},i))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,o=new Array(c);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);