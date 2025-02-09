// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.run.makeService({
    properties: ({ config }) => ({
      apiVersion: "serving.knative.dev/v1",
      kind: "Service",
      metadata: {
        name: "starhackit-server",
      },
      spec: {
        template: {
          metadata: {
            name: "starhackit-server-00005-rud",
            annotations: {
              "autoscaling.knative.dev/maxScale": "100",
            },
          },
          spec: {
            containerConcurrency: 80,
            timeoutSeconds: 300,
            serviceAccountName: `${config.projectNumber()}-compute@developer.gserviceaccount.com`,
            containers: [
              {
                image: "gcr.io/google-samples/hello-app:1.0",
                resources: {
                  limits: {
                    cpu: "2000m",
                    memory: "512Mi",
                  },
                },
                ports: [
                  {
                    name: "http1",
                    containerPort: 8080,
                  },
                ],
              },
            ],
          },
        },
        traffic: [
          {
            percent: 100,
            latestRevision: true,
          },
        ],
      },
    }),
  });

  provider.run.makeServiceIamMember({
    properties: ({ config }) => ({
      location: config.region,
      policy: {
        version: 1,
        bindings: [
          {
            role: "roles/run.invoker",
            members: ["allUsers"],
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      service: resources.run.Service["starhackit-server"],
    }),
  });
};

exports.createResources = createResources;
