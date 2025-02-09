// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.iam.makeServiceAccount({
    name: "sa-test-example",
    properties: ({ config }) => ({
      serviceAccount: {
        displayName: "SA dev",
        description: "Managed By GruCloud",
      },
    }),
  });

  provider.iam.makeBinding({
    name: "roles/firebasenotifications.viewer",
    dependencies: ({ resources }) => ({
      serviceAccounts: [resources.iam.ServiceAccount["sa-test-example"]],
    }),
  });
};

exports.createResources = createResources;
