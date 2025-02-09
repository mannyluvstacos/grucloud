const createResources = ({ provider }) => {
  provider.APIGateway.makeRestApi({
    name: "PetStore",
    properties: () => ({
      apiKeySource: "HEADER",
      endpointConfiguration: {
        types: ["REGIONAL"],
      },
      schemaFile: "test/PetStore2.oas30.json",
    }),
  });
};
exports.createResources = createResources;
