const createResources = ({ provider }) => {
  provider.SSM.makeParameter({
    name: "text-param",
    properties: () => ({
      Type: "String",
      Value: "my-value-updated",
      DataType: "text",
      Tags: [
        {
          Key: "TOTOKEY",
          Value: "TOTOVALUE",
        },
      ],
    }),
  });
};

exports.createResources = createResources;
