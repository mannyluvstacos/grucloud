const _ = require("lodash");
const toString = (x) => JSON.stringify(x, null, 4);
const assert = require("assert");
const logger = require("../logger")({ prefix: "SpecDefault" });
const compareObject = require("../Utils").compare;

const compare = ({ target, live }) => {
  logger.debug(`compare default`);
  const diff = compareObject({
    target,
    targetKeys: Object.getOwnPropertyNames(target),
    live,
  });
  logger.debug(`compare ${toString(diff)}`);
  return diff;
};

exports.SpecDefault = () => ({
  compare,
  postConfig: ({ config }) => config,
  configStatic: () => ({}),
  configLive: async () => ({}),

  methods: {
    get: true,
    list: true,
    create: true,
    del: true,
  },
});
