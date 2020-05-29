const assert = require("assert");
const _ = require("lodash");
const compare = require("../../Utils").compare;
const CoreProvider = require("../CoreProvider");
const ScalewayClient = require("./ScalewayClient");
const logger = require("../../logger")({ prefix: "ScalewayProvider" });

const TagName = require("../TagName");

const toString = (x) => JSON.stringify(x, null, 4);

const getByName = ({ name, items = [] }) => {
  logger.debug(`getByName: ${name}, items: ${toString(items)}`);
  //TODO check with tag
  const itemsWithName = items.filter((item) =>
    item?.tags.find((tag) => tag.includes(name))
  );
  if (itemsWithName.length === 0) {
    logger.debug(`getByName: ${name}, no result`);
    return;
  }
  logger.debug(`getByName: ${name}, returns: ${toString(itemsWithName)}`);
  if (itemsWithName.length > 1) {
    logger.error(
      `getByName: ${name}, multiple result: ${toString(itemsWithName)}`
    );
  }

  return itemsWithName[0];
};

const fnSpecs = (config) => {
  const { organization } = config;

  const isOurMinion = ({ resource }) =>
    TagName.isOurMinion({ resource, tag: config.tag });

  return [
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/ips`,
          config,
          onResponseList: (data) => {
            logger.debug(`onResponse ${toString(data)}`);
            if (data && data.ips) {
              return { total: data.ips.length, items: data.ips };
            } else {
              throw Error(`Cannot find ips`);
            }
          },
          configDefault: ({ name, properties }) => ({
            ...properties,
            tags: [name],
            organization,
          }),
          toName: (item) => item.address,
        }),
      type: "Ip",
      postConfig: ({ config, items }) => {
        //assert(items);
        //TODO check that
        logger.debug(
          `postConfig: ${toString(config)}, items: ${toString(items)}`
        );
        const ip = items.find((item) => item.address === config.address);
        if (ip) {
          return ip;
        }
        return { ...config };
      },
      isOurMinion,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/bootscripts`,
          config,
          onResponseList: ({ bootscripts }) => ({
            total: bootscripts.length,
            items: bootscripts,
          }),
        }),
      type: "Bootscript",
      methods: { list: true },
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/images`,
          onResponseList: ({ images }) => ({
            total: images.length,
            items: images,
          }),
          config,
        }),
      type: "Image",
      methods: { list: true },
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/volumes`,
          config,
          onResponseList: (result) => {
            logger.debug(`onResponseList Volume: ${JSON.stringify(result)}`);
            const { volumes = [] } = result;
            return {
              total: volumes.length,
              items: volumes,
            };
          },
          configDefault: ({ name, options }) => ({
            volume_type: "l_ssd",
            name,
            organization,
            ...options,
          }),
        }),
      type: "Volume",

      isOurMinion,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/servers`,
          config,
          onResponseList: ({ servers }) => {
            return { total: servers.length, items: servers };
          },
        }),
      type: "Server",
      compare: ({ target, live }) => {
        logger.debug(`compare server`);
        const diff = compare({
          target,
          targetKeys: ["commercial_type", "volumes.0.size"],
          live,
        });
        logger.debug(`compare ${toString(diff)}`);
        return diff;
      },
      propertiesDefault: {
        dynamic_ip_required: false,
        commercial_type: "DEV1-S",
        enable_ipv6: true,
        boot_type: "local",
      },
      configDefault: ({ name, properties }) => ({
        name,
        organization,
        tags: [name],
        ...properties,
      }),
      configStatic: async ({ config, dependencies: { image, ip } }) => {
        const imageId = await image.config().id;
        //logger.debug(`configStatic imageId: ${imageId}`);

        return {
          image: imageId,
          public_ip: await ip.config(),

          ...config,
        };
      },
      configLive: async ({ config, dependencies: { image, ip } }) => {
        const ipLive = await ip.getLive();
        const imageConfig = await image.config();
        logger.debug(`Server configLive ip: ${toString(ipLive)}`);

        if (!ipLive) {
          throw Error(`configFromLive: cannot find ip resources`);
        }

        return {
          image: imageConfig.id,
          public_ip: ipLive.id,
          ...config,
        };
      },
      isOurMinion,
    },
  ];
};

const configCheck = (config) => {
  assert(config, "Please provide a config");
  const { zone, organization, secretKey } = config;
  assert(zone, "zone is missing, e.g fr-par-1");
  assert(organization, "organization is missing");
  assert(secretKey, "secretKey is missing");
};

module.exports = ScalewayProvider = async ({ name, config }) => {
  configCheck(config);
  return CoreProvider({
    type: "scaleway",
    name,
    config,
    fnSpecs,
  });
};
