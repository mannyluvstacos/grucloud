const assert = require("assert");
const { pipe, tap, get, map, omit, switchCase } = require("rubico");
const Axios = require("axios");
const yaml = require("js-yaml");
const prettier = require("prettier");
const changeCase = require("change-case");
const { Command } = require("commander");
const fs = require("fs").promises;

const createProgram = ({ version, commands }) => {
  const program = new Command();
  program.storeOptionsAsProperties(false);
  program.allowUnknownOption(); // For testing
  program.version(version);
  program.option("-i, --input <file>", "k8s yaml manifest");
  program.parse(process.argv);

  return program;
};
const program = createProgram({ version: "1.0" });
const options = program.opts();
console.log("Kubernetes yaml manifest to code");
//const manifestUrl =
// "https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.8/docs/examples/rbac-role.yaml";
//console.log(process.argv);
//const manifestUrl =
// "https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/main/docs/install/v2_1_3_full.yaml";
const resourceName = ({ metadata, kind }) =>
  `${changeCase.camelCase(metadata.name)}${kind}`;

const writeResources = map((manifest) =>
  pipe([
    tap(() => {
      //console.log(manifest);
    }),
    () => manifest.metadata.name,
    (name) => `const ${resourceName(manifest)} = await provider.make${
      manifest.kind
    }({
    name: "${name}",
    properties: () => (${JSON.stringify(
      omit(["kind", "metadata.name"])(manifest),
      null,
      4
    )})
})
`,
    tap((code) => {
      console.log(code);
    }),
    (code) => ({ manifest, code }),
  ])()
);
const main = pipe([
  () => options.input,
  switchCase([
    () => true, //TODO is file or url ?
    pipe([() => fs.readFile(options.input)]),
    pipe([() => Axios.get(options.input), get("data")]),
  ]),

  tap((result) => {
    //console.log(result);
  }),
  yaml.loadAll,
  tap((result) => {
    console.log(`${result.length} resources`);
  }),
  writeResources,
  tap((code) => {
    //console.log(code);
  }),
  (results) => `
  exports.createResources = async ({ provider }) => {
${map(get("code"))(results).join("\n")}

return {
    ${pipe([
      () => results,
      map(pipe([get("manifest"), resourceName, (name) => `${name},`])),
      (results) => results.join("\n"),
    ])()}
}
}
`,
  tap((formatted) => {
    assert(formatted);
  }),
  prettier.format,
  tap((formatted) => {
    console.log(formatted);
  }),
  (formatted) => fs.writeFile("./resources.js", formatted),
]);

main()
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error("error");

    console.log(error);
  });
