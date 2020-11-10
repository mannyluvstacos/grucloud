const Axios = require("axios");
const logger = require("../logger")({ prefix: "AxiosMaker" });
const { tos } = require("../tos");

module.exports = AxiosMaker = ({
  baseURL,
  onHeaders = noop,
  contentType = "application/json",
}) => {
  const axios = Axios.create({
    baseURL,
    timeout: 15e3,
    withCredentials: true,
  });

  axios.interceptors.request.use(
    function (config) {
      const { method, baseURL, url } = config;
      logger.debug(`axios request ${method} ${baseURL ? baseURL : ""}${url}`);
      //config.data && logger.debug(tos(config.data));
      return {
        ...config,
        headers: {
          ...config.headers,
          common: { ...onHeaders(), "Content-Type": contentType },
        },
      };
    },
    function (error) {
      logger.debug(`axios request error ${error}`);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      const { config, status } = response;
      const { method, baseURL, url } = config;
      logger.debug(
        `axios response ${status}, ${method} ${baseURL ? baseURL : ""}${url}`
      );
      //logger.debug(tos(response.data));
      return response;
    },
    function (error) {
      if (error.response?.status === 404) {
        const { method, baseURL, url } = error.config;
        logger.info(`axios error ${method} ${baseURL ? baseURL : ""}${url}`);
        logger.info(`axios error ${error}`);
      } else {
        logger.error(`axios error config: ${tos(error.config)}`);
        logger.error(`axios error ${error}`);
        error.response &&
          logger.error(`axios error response:: ${tos(error.response.data)}`);
      }

      return Promise.reject(error);
    }
  );

  return axios;
};
