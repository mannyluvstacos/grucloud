const _ = require("lodash");
const logger = require("./logger")({ prefix: "MocCloud" });
const toString = (x) => JSON.stringify(x, null, 4);

const checkEnvironment = (env = []) =>
  env.forEach((env) => {
    //console.log(env);
    if (!process.env[env]) {
      throw new Error(`Please set the environment variable ${env}`);
    }
  });
const compareObject = ({ target = {}, live = {} }) => {
  console.log(target, live);

  const diff = _.map(target, (targetValue, targetKey) => {
    console.log(
      "key:",
      targetKey,
      ",target value:",
      targetValue,
      ",live value",
      live[targetKey]
    );
    if (_.isObject(targetValue)) {
      return compareObject({ target: targetValue, live: live[targetKey] });
    }
    if (targetValue !== live[targetKey]) {
      console.log("key diff ", targetKey);
      return {
        key: targetKey,
        targetValue: targetValue,
        liveValue: live[targetKey],
      };
    }
  }).filter((x) => x);
  return diff.length > 0 ? diff : undefined;
};
const compare = ({ target = {}, targetKeys = [], live = {} }) => {
  logger.info(`compare ${toString({ target, targetKeys, live })}`);

  const targetDiff = targetKeys
    .map((targetKey) => {
      const targetValue = _.get(target, targetKey);
      const liveValue = _.get(live, targetKey);

      logger.info(
        `compare for targetKey: ${toString({
          targetKey,
          targetValue,
          liveValue,
        })}`
      );
      if (!liveValue) {
        return {
          key: targetKey,
          type: "NEW",
          targetValue,
          liveValue: undefined,
        };
      }

      if (!_.isEqual(targetValue, liveValue)) {
        return {
          key: targetKey,
          type: "DIFF",
          targetValue,
          liveValue,
        };
      }
    })
    .filter((x) => x);

  logger.info(`compare ${toString({ targetDiff })}`);
  return targetDiff;
};

module.exports = {
  compare,
  checkEnvironment,
  compareObject,
};
