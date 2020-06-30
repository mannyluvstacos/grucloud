const assert = require("assert");
const _ = require("lodash");
const { compare, compareObject } = require("../Utils");
const { checkConfig } = require("../Utils");
const { replacerCredentials, hiddenCredentials } = require("../tos");
const YAML = require("../cli/json2yaml");

const properties = {
  storageProfile: {
    imageReference: {
      offer: "UbuntuServer",
      publisher: "Canonical",
    },
  },
};

const propertiesToYaml = `storageProfile:
  imageReference:
    offer: "UbuntuServer"
    publisher: "Canonical"
`;

describe("replacerCredentials", function () {
  it("replacerCredentials ok", async function () {
    assert.equal(
      replacerCredentials("adminPassword", "password"),
      hiddenCredentials
    );
  });
  it("YAML.stringify password", async function () {
    YAML.stringify({ properties: { adminPassword: "aaaaaaaa" } });
  });
  it("replacerCredentials accessToken", async function () {
    assert.equal(replacerCredentials("accessToken", "aaaa"), hiddenCredentials);
  });
  it("replacerCredentials disablePasswordAuthentication", async function () {
    assert.equal(
      replacerCredentials("disablePasswordAuthentication", true),
      true
    );
  });
  it("YAML.stringify object", async function () {
    assert.equal(YAML.stringify(properties), propertiesToYaml);
  });
});

describe("checkConfig", function () {
  it("checkConfig empty", async function () {
    checkConfig({}, []);
  });
  it("checkConfig ok", async function () {
    checkConfig({ mykey: "aa" }, ["mykey"]);
  });
  it("checkConfig throw", async function () {
    assert.throws(() => checkConfig({}, ["iDoNotExist"]), Error);
  });
});

const target = {
  name: "web-server",
  organization: "7734a2c2-df95-409c-bfa0-c094bd12f4ba",
  tags: ["web-server-gru"],
  volumes: {
    "0": {
      size: 20000000000,
    },
  },
};
const live = {
  id: "3c54230e-e944-4599-896b-2a5fc1136c17",
  name: "web-server",
  arch: "x86_64",
  volumes: {
    "0": {
      id: "9b0d0b50-0325-4b12-a26a-ea9ebaa60fad",
      size: 10000000000,
    },
  },
  tags: ["web-server-gru"],
};

describe("compare", function () {
  it("compareObject", async function () {
    const diff = compareObject({
      target,
      live,
    });
    //console.log(JSON.stringify(diff, null, 4));
  });
  it("compare ok", async function () {
    assert.equal(
      compare({
        target,
        targetKeys: ["volumes.0.size", "commercial_type"],
        live,
      }).length,
      2
    );
    assert.equal(
      compare({
        target,
        targetKeys: ["volumes.0.id"],
        live,
      }).length,
      1
    );
  });
});
