const _ = require("lodash");
const Axios = require("axios");
const logger = require("../logger")({ prefix: "AxiosMaker" });
const toString = (x) => JSON.stringify(x, null, 4);

module.exports = AxiosMaker = ({ baseURL, onHeaders = noop }) => {
  return Axios.create({
    baseURL,
    timeout: 30e3,
    withCredentials: true,
    headers: { ...onHeaders(), "Content-Type": "application/json" },
    transformRequest: [
      (data, headers) => {
        logger.info(`tx ${baseURL} ${data ? toString(data) : ""}`);
        //logger.info(`tx ${toString({ headers })}`);

        return JSON.stringify(data);
      },
    ],
    transformResponse: [
      (data) => {
        logger.debug(`rx baseURL: ${baseURL}`);
        try {
          const parsedData = data && JSON.parse(data);
          logger.debug(`rx baseURL: ${baseURL}, ${toString(parsedData)}`);
          return parsedData;
        } catch (error) {
          logger.info(`rx json data ${toString(data)}`);
          return data;
        }
      },
    ],
  });
};
