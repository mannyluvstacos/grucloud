const assert = require("assert");
const { MockProvider } = require("../MockProvider");

const createResources = ({ provider }) => {
  // Ip
  const ip = provider.makeIp({ name: "myip" });

  // Boot images
  // const image = provider.useImage({
  //   name: "ubuntu",
  //   filterLives: ({ resources }) => {
  //     const image = resources.find(
  //       (image) =>
  //         image.live.name.includes("Ubuntu") && image.live.arch === "x86_64"
  //     );
  //     if (!image) {
  //       //assert(image);
  //       assert(true);
  //     }
  //     return image;
  //   },
  // });

  const volume = provider.makeVolume({
    name: "volume1",
    properties: () => ({
      size: 20_000_000_000,
    }),
  });
  // SecurityGroup
  const sg = provider.makeSecurityGroup({
    name: "sg",
    properties: () => ({
      securityRules: [
        {
          name: "SSH",
          properties: {
            access: "Allow",
            direction: "Inbound",
            protocol: "Tcp",
            destinationPortRange: "22",
            destinationAddressPrefix: "*",
            sourcePortRange: "*",
            sourceAddressPrefix: "*",
            priority: 1000,
          },
        },
      ],
    }),
  });
  //Server
  const server = provider.makeServer({
    name: "web-server",
    dependencies: () => ({ volume, sg: [sg], ip }),
    properties: () => ({
      diskSizeGb: "20",
      machineType: "f1-micro",
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ name = "mock", createProvider }) => {
  const provider = createProvider(MockProvider, {
    name,
    createResources,
    config: require("./config"),
  });
  return { provider };
};
