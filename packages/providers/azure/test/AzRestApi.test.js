const assert = require("assert");
const path = require("path");

const { pipe, tap, get, eq } = require("rubico");
const { find } = require("rubico/x");

const {
  processSwaggerFiles,
  processSwagger,
  buildDependenciesFromBody,
} = require("../AzureRestApi");
const SwaggerParser = require("@apidevtools/swagger-parser");

describe("AzureRestApi", function () {
  before(async function () {});

  it("processSwagger compute", async function () {
    await pipe([
      () => ({
        name: "compute.json",
      }),
      processSwagger({
        dir: path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "compute/resource-manager/Microsoft.Compute/stable/2021-07-01"
        ),
        group: "Microsoft.Compute",
        groupDir: "compute",
        apiVersion: "2021-07-01",
      }),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  it("buildDependenciesFromBody virtualMachines", async function () {
    await pipe([
      () =>
        path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "compute/resource-manager/Microsoft.Compute/stable/2021-07-01",
          "compute.json"
        ),
      (filename) => SwaggerParser.dereference(filename, {}),
      get("paths"),
      get([
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      ]),
      get("put.parameters"),
      find(eq(get("in"), "body")),
      get("schema.properties"),
      buildDependenciesFromBody({}),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  it("buildDependenciesFromBody disk", async function () {
    await pipe([
      () =>
        path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "compute/resource-manager/Microsoft.Compute/stable/2021-04-01",
          "disk.json"
        ),
      (filename) => SwaggerParser.dereference(filename, {}),
      get("paths"),
      get([
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
      ]),
      get("put.parameters"),
      find(eq(get("in"), "body")),
      get("schema.properties"),
      buildDependenciesFromBody({}),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  //
  it("processSwagger webapp", async function () {
    await pipe([
      () => ({
        name: "WebApps.json",
      }),
      processSwagger({
        dir: path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification/",
          "web/resource-manager/Microsoft.Web/stable/2021-02-01"
        ),
        group: "Microsoft.Web",
        groupDir: "web",
        apiVersion: "2021-02-01",
      }),
      tap((params) => {
        assert(true);
      }),
    ])();
  });
  // it.skip("processSwaggerFiles all", async function () {
  //   await pipe([
  //     () => ({
  //       directory: process.cwd(),
  //     }),
  //     processSwaggerFiles,
  //     tap((params) => {
  //       assert(true);
  //     }),
  //     //groupBy("group"),
  //     tap((params) => {
  //       assert(true);
  //     }),
  //   ])();
  // });
  it.only("processSwaggerFiles", async function () {
    await pipe([
      () => ({
        directorySpec: path.resolve(
          process.cwd(),
          "azure-rest-api-specs/specification"
        ),
        directoryDoc: path.resolve(
          process.cwd(),
          "../../../docusaurus/docs/azure/resources/"
        ),
        outputSchemaFile: path.resolve(process.cwd(), "AzureSchema.json"),
        filterDirs: [
          //"apimanagement",
          //"appconfiguration",
          //"dns",
          "compute",
          "containerservice",
          "containerregistry",
          "keyvault",
          "msi",
          "operationalinsights",
          "postgresql",
          "network",
          "storage",
          "web",
          //"webpubsub",
        ],
      }),
      processSwaggerFiles,
      tap((params) => {
        assert(true);
      }),
    ])();
  });
});
