const assert = require("assert");
const { readFileSync } = require("fs");
const fs = require("fs").promises;
const path = require("path");
const os = require("os");

const {
  map,
  tryCatch,
  pipe,
  pick,
  get,
  tap,
  filter,
  switchCase,
  eq,
  not,
  omit,
  reduce,
  fork,
} = require("rubico");
const {
  defaultsDeep,
  pluck,
  isEmpty,
  find,
  uniq,
  isDeepEqual,
  first,
  isFunction,
  identity,
} = require("rubico/x");
const { JWT } = require("google-auth-library");
const shell = require("shelljs");

const { convertError } = require("@grucloud/core/Common");

const CoreProvider = require("@grucloud/core/CoreProvider");
const AxiosMaker = require("@grucloud/core/AxiosMaker");
const YAML = require("@grucloud/core/cli/json2yaml");

const {
  createProjectGoogle,
} = require("@grucloud/core/cli/providers/createProjectGoogle");

const logger = require("@grucloud/core/logger")({ prefix: "GoogleProvider" });
const { tos } = require("@grucloud/core/tos");

const GcpCompute = require("./resources/compute/");
const GcpIam = require("./resources/iam/");
const GcpStorage = require("./resources/storage/");
const GcpDns = require("./resources/dns/");
const GcpRun = require("./resources/run/");

const { retryCallOnError } = require("@grucloud/core/Retry");

const { generateCode } = require("./Gcp2gc");

const computeDefault = {
  region: "europe-west4",
  zone: "europe-west4-a",
};

const servicesApiMapBase = {
  "cloudbilling.googleapis.com": {
    url: ({ projectId }) =>
      `https://cloudbilling.googleapis.com/v1/projects/${projectId}/billingInfo`,
  },
  "cloudresourcemanager.googleapis.com": {
    url: ({ projectId }) =>
      `https://cloudresourcemanager.googleapis.com/v1/projects/${projectId}/:getIamPolicy`,
    method: "POST",
  },
  "iam.googleapis.com": {
    url: ({ projectId }) =>
      `https://iam.googleapis.com/v1/projects/${projectId}/serviceAccounts`,
  },
  "serviceusage.googleapis.com": {
    url: ({ projectId }) =>
      `https://storage.googleapis.com/storage/v1/b?project=${projectId}`,
  },
};
const servicesApiMapMain = {
  "compute.googleapis.com": {
    url: ({ projectId, zone }) =>
      `https://compute.googleapis.com/compute/v1/projects/${projectId}/global/images`,
  },
  "dns.googleapis.com": {
    url: ({ projectId }) =>
      `https://dns.googleapis.com/dns/v1beta2/projects/${projectId}/managedZones`,
  },
  "run.googleapis.com": {
    url: ({ projectId, region }) =>
      `https://${region}-run.googleapis.com/apis/serving.knative.dev/v1/namespaces/${projectId}/services`,
  },
  /*"domains.googleapis.com": {
    url: ({ projectId }) =>
      `https://domains.googleapis.com/v1beta1/projects/${projectId}/locations/global/registrations`,
  },*/
};

const rolesDefault = [
  "iam.serviceAccountAdmin",
  "compute.admin",
  "storage.admin",
  "storage.objectAdmin",
  "dns.admin",
  //"domains.admin",
  "editor",
  "resourcemanager.projectIamAdmin",
  "run.admin",
];
const ServiceAccountName = "grucloud";

const fnSpecs = (config) => [
  ...GcpStorage(config),
  ...GcpIam(config),
  ...GcpCompute(config),
  ...GcpDns(config),
  ...GcpRun(config),
];
//const ProjectId = ({ projectName }) => `grucloud-${projectName}`;

const ApplicationCredentialsFile = ({
  configDir = path.resolve(os.homedir(), ".config/gcloud"),
  projectId,
}) => path.resolve(configDir, `${projectId}.json`);

const authorize = async ({
  gcloudConfig,
  projectName,
  projectId,
  applicationCredentialsFile,
}) => {
  logger.info(`authorize with file: ${applicationCredentialsFile}`);

  assert(applicationCredentialsFile);
  if (
    !(await fs
      .access(applicationCredentialsFile)
      .then(() => true)
      .catch(() => false))
  ) {
    const message = `Cannot open application credentials file ${applicationCredentialsFile}\nRunning 'gc init'`;
    console.log(message);
    await init({
      gcloudConfig,
      projectName,
      projectId,
      applicationCredentialsFile,
      serviceAccountName: ServiceAccountName,
    });
  }

  return pipe([
    () => fs.readFile(applicationCredentialsFile, "utf-8"),
    (content) => JSON.parse(content),
    tap((keys) => {
      logger.info(
        `authorize with email: ${keys.client_email}, keyId: ${keys.private_key_id}`
      );
      assert(keys.private_key, "keys.private_key");
    }),
    (keys) =>
      pipe([
        () =>
          new JWT({
            email: keys.client_email,
            key: keys.private_key,
            scopes: ["https://www.googleapis.com/auth/cloud-platform"],
          }),
        (client) =>
          new Promise((resolve, reject) => {
            client.authorize((err, response) => {
              if (err) {
                logger.error(`authorize error with ${keys.client_email}`);
                logger.error(tos(err));
                return reject(err);
              }
              if (response?.access_token) {
                resolve(response.access_token);
              } else {
                reject("Cannot get access_token");
              }
            });
          }),
      ])(),
    tap((token) => {
      logger.debug(`authorized ${token}`);
    }),
  ])();
};

const runGCloudCommand = tryCatch(
  ({ command }) => {
    logger.debug(`runGCloudCommand: ${command}`);

    const { stdout, stderr, code } = shell.exec(command, { silent: true });
    if (code !== 0) {
      throw { message: `command '${command}' failed`, stdout, stderr, code };
    }
    const config = JSON.parse(stdout);
    logger.debug(`runGCloudCommand: '${command}' result: ${tos(config)}`);
    return config;
  },
  (error) => {
    logger.error(`runGCloudCommand: ${tos(error)}`);
    //throw error;
    return { error };
  }
);

const getConfig = () =>
  runGCloudCommand({ command: "gcloud info --format json" });

const getDefaultAccessToken = pipe([
  () => ({
    command: "gcloud auth print-access-token --format json",
  }),
  runGCloudCommand,
  switchCase([
    get("error"),
    pipe([
      () => ({
        command: "gcloud auth login",
      }),
      runGCloudCommand,
      get("error"),
      switchCase([
        isEmpty,
        () => getDefaultAccessToken(),
        (error) => {
          throw error;
        },
      ]),
    ]),
    pipe([
      get("token"),
      tap((token) => {
        assert(token, `no token`);
      }),
    ]),
  ]),
]);

exports.authorize = authorize;

const createAxiosGeneric = ({ accessToken }) =>
  AxiosMaker({
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const createAxiosService = ({ accessToken, projectId }) =>
  AxiosMaker({
    baseURL: `https://serviceusage.googleapis.com/v1/projects/${projectId}`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const serviceEnable = async ({
  accessToken,
  projectId,
  region,
  servicesApiMap,
}) => {
  assert(region);
  const axiosService = createAxiosService({ accessToken, projectId });
  const axios = createAxiosGeneric({ accessToken, projectId });
  const servicesApis = Object.keys(servicesApiMap);
  return pipe([
    tap(() => {
      console.log(
        `Enabling ${servicesApis.length} services: ${servicesApis.join(", ")}`
      );
    }),
    () =>
      retryCallOnError({
        name: `get("/services?filter=state:ENABLED")`,
        fn: () => axiosService.get("/services?filter=state:ENABLED"),
        config: { retryCount: 20, retryDelay: 2e3 },
        shouldRetryOnException: ({ error }) => {
          return [403].includes(error.response?.status);
        },
      }),
    get("data.services"),
    tap((xxx) => {
      logger.debug("services");
    }),
    pluck("config.name"),
    (servicesEnabled = []) =>
      filter((service) => !servicesEnabled.includes(service))(servicesApis),
    switchCase([
      not(isEmpty),
      pipe([
        tap((serviceIds) => {
          logger.info(`Enabling ${serviceIds.length} services`);
        }),
        tap((serviceIds) =>
          axiosService.post("/services:batchEnable", { serviceIds })
        ),
        tap(() => {
          console.log(
            `Waiting for services to take off, may take up to 10 minutes`
          );
        }),
        map((serviceId) =>
          pipe([
            () => servicesApiMap[serviceId].url({ projectId, region }),
            (url) =>
              retryCallOnError({
                name: `check for serviceId ${serviceId}, getting ${url}`,
                fn: () =>
                  axios.request({
                    url,
                    method: servicesApiMap[serviceId].method || "GET",
                  }),
                config: { retryCount: 120, retryDelay: 10e3 },
                shouldRetryOnException: ({ error }) => {
                  return [403].includes(error.response?.status);
                },
              }),
            tap(() => {
              console.log(`Service ${serviceId} is up`);
            }),
          ])()
        ),
        tap(() => {
          logger.info(`services up and running`);
        }),
      ]),
      tap(() => {
        console.log("Services already enabled");
      }),
    ]),
  ])();
};

const serviceDisable = async ({ accessToken, projectId, servicesApiMap }) => {
  const axios = createAxiosService({ accessToken, projectId });
  const servicesApis = Object.keys(servicesApiMap);

  return pipe([
    tap(() => {
      console.log(
        `Disabling ${servicesApis.length} services: ${servicesApis.join(", ")}`
      );
    }),
    () => axios.get("/services?filter=state:ENABLED"),
    get("data.services"),
    tap((xxx) => {
      logger.debug("services");
    }),
    pluck("config.name"),
    (servicesEnabled = []) =>
      filter((service) => servicesEnabled.includes(service))(servicesApis),
    switchCase([
      (serviceIds) => !isEmpty(serviceIds),
      pipe([
        tap((serviceIds) => {
          logger.info(`Disabled ${serviceIds.length} services`);
        }),
        map((serviceId) =>
          axios.post(`/services/${serviceId}:disable`, {
            disableDependentServices: true,
          })
        ),
        tap((xxx) => {
          console.log("Services disabled");
        }),
      ]),
      tap(() => {
        console.log("Services already disabled");
      }),
    ]),
  ])();
};

const createAxiosServiceAccount = ({ accessToken, projectId }) =>
  AxiosMaker({
    baseURL: `https://iam.googleapis.com/v1/projects/${projectId}/serviceAccounts`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const ServiceAccountEmail = ({ serviceAccountName, projectId }) =>
  `${serviceAccountName}@${projectId}.iam.gserviceaccount.com`;

const serviceAccountCreate = async ({
  accessToken,
  projectId,
  serviceAccountName,
}) => {
  const axios = createAxiosServiceAccount({ accessToken, projectId });
  const serviceAccountEmail = ServiceAccountEmail({
    serviceAccountName,
    projectId,
  });

  console.log(`Creating service account ${serviceAccountEmail}`);

  return pipe([
    tap((xx) => {
      logger.debug("getting service accounts");
    }),
    () => axios.get("/"),
    get("data.accounts"),
    find((account) => account.email === serviceAccountEmail),
    tap((xx) => {
      logger.debug("serviceAccountCreate");
    }),
    switchCase([
      (account) => !account,
      pipe([
        () => {
          logger.debug(`creating service account ${serviceAccountName}`);
        },
        () =>
          axios.post("/", {
            accountId: serviceAccountName,
            serviceAccount: {
              displayName: `${serviceAccountName} service account`,
            },
          }),
        () => {
          logger.debug(`Service account ${serviceAccountEmail} created`);
        },
      ]),
      tap((account) => {
        logger.debug("service account already created");
      }),
    ]),
  ])();
};

const serviceAccountDelete = async ({
  accessToken,
  projectId,
  serviceAccountName,
}) => {
  const axios = createAxiosServiceAccount({ accessToken, projectId });
  const serviceAccountEmail = ServiceAccountEmail({
    serviceAccountName,
    projectId,
  });

  console.log(`Deleting service account ${serviceAccountEmail}`);

  return pipe([
    tap((xx) => {
      logger.debug("getting service accounts");
    }),
    () => axios.get("/"),
    get("data.accounts"),
    find((account) => account.email === serviceAccountEmail),
    tap((xx) => {
      logger.debug("serviceAccountDelete");
    }),
    switchCase([
      (account) => account,
      pipe([
        tap((account) => {
          logger.debug(`deleting service account ${serviceAccountName}`);
        }),
        (account) =>
          axios.delete(`/${account.uniqueId}`).catch((error) => {
            if (error.response?.status !== 404) {
              throw error;
            }
          }),
        () => {
          console.log(`Service account ${serviceAccountEmail} deleted`);
        },
      ]),
      tap(() => {
        console.log("service account already deleted");
      }),
    ]),
  ])();
};

const createAxiosServiceAccountKey = ({
  accessToken,
  projectId,
  serviceAccountEmail,
}) =>
  AxiosMaker({
    baseURL: `https://iam.googleapis.com/v1/projects/${projectId}/serviceAccounts/${serviceAccountEmail}/keys`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const serviceAccountKeyCreate = async ({
  accessToken,
  projectId,
  serviceAccountName,
  applicationCredentialsFile,
}) => {
  const serviceAccountEmail = ServiceAccountEmail({
    serviceAccountName,
    projectId,
  });

  const axios = createAxiosServiceAccountKey({
    accessToken,
    projectId,
    serviceAccountEmail,
  });

  return pipe([
    switchCase([
      () =>
        fs
          .access(applicationCredentialsFile)
          .then(() => false)
          .catch(() => true),
      pipe([
        tap((xx) => {
          logger.debug(
            `creating service account keys for ${serviceAccountEmail}`
          );
        }),
        () => axios.post("/", {}),
        get("data"),
        tap((xx) => {
          logger.debug("service account keys created");
        }),
        ({ privateKeyData }) =>
          Buffer.from(privateKeyData, "base64").toString("utf-8"),
        (credentials) => fs.writeFile(applicationCredentialsFile, credentials),
        tap((xx) => {
          logger.debug(
            `service account keys saved in ${applicationCredentialsFile}`
          );
        }),
      ]),
      tap(() => {
        console.log("Service account key already created");
      }),
    ]),
  ])();
};

const serviceAccountKeyDelete = async ({
  accessToken,
  projectId,
  serviceAccountName,
  applicationCredentialsFile,
}) => {
  const serviceAccountEmail = ServiceAccountEmail({
    serviceAccountName,
    projectId,
  });

  const axios = createAxiosServiceAccountKey({
    accessToken,
    projectId,
    serviceAccountEmail,
  });

  return pipe([
    switchCase([
      () =>
        fs
          .access(applicationCredentialsFile)
          .then(() => true)
          .catch(() => false),
      pipe([
        tap((xx) => {
          logger.debug(
            `delete service account keys for ${serviceAccountEmail}`
          );
        }),
        () => fs.readFile(applicationCredentialsFile, "utf-8"),
        (content) => JSON.parse(content),
        tap((content) => {
          logger.debug(`serviceAccountKeyDelete`);
        }),
        ({ private_key_id }) =>
          axios.delete(`/${private_key_id}`).catch((error) => {
            logger.error(`error deleting key ${private_key_id}`);
          }),
        tap((xx) => {
          logger.debug("service account keys deleted");
        }),
        () => fs.unlink(applicationCredentialsFile),
        tap((xx) => {
          console.log(
            `service account keys file '${applicationCredentialsFile}' deleted`
          );
        }),
      ]),
      tap(() => {
        console.log("Service account key already deleted");
      }),
    ]),
  ])();
};

const bindingsAdd = ({ currentBindings, rolesToAdd, member }) =>
  pipe([
    () => map((role) => `roles/${role}`)(rolesToAdd),
    (rolesToAddPrefixed) =>
      pipe([
        tap(() => {
          console.log(
            `Bind ${rolesToAdd.length} roles: ${rolesToAdd.join(
              ", "
            )} to member: ${member}`
          );
        }),
        map(({ role, members }) => {
          if (rolesToAddPrefixed.includes(role)) {
            return { role, members: uniq([...members, member]) };
          } else {
            return { role, members };
          }
        }),
        (bindings) =>
          pipe([
            () =>
              filter(
                (role) => !find((binding) => binding.role === role)(bindings)
              )(rolesToAddPrefixed),
            map((role) => ({ role, members: [member] })),
            (newBindings) => [...bindings, ...newBindings],
          ])(),
        tap((xx) => {
          logger.debug("bindingsAdd");
        }),
      ])(currentBindings),
  ])();

const bindingsRemove = ({ currentBindings, memberToRemove }) =>
  pipe([
    tap(() => {
      console.log(`Remove Bindings for member: ${memberToRemove}`);
    }),
    map(({ role, members }) => {
      return {
        role,
        members: pipe([
          filter((member) => member != memberToRemove),
          filter((member) => !member.startsWith("deleted:")),
        ])(members),
      };
    }),
    filter((binding) => !isEmpty(binding.members)),
    tap((xx) => {
      logger.debug("bindingsRemove");
    }),
  ])(currentBindings);

const createAxiosIam = ({ projectId, accessToken }) =>
  AxiosMaker({
    baseURL: `https://cloudresourcemanager.googleapis.com/v1/projects/${projectId}`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const MemberServiceAccount = ({ serviceAccountName, projectId }) =>
  `serviceAccount:${ServiceAccountEmail({
    serviceAccountName,
    projectId,
  })}`;

const iamPolicyAdd = async ({ accessToken, projectId, serviceAccountName }) => {
  const axios = createAxiosIam({ projectId, accessToken });
  const member = MemberServiceAccount({ serviceAccountName, projectId });

  return pipe([
    tap(() => {
      logger.debug("getting iam policy");
    }),
    () => axios.post(":getIamPolicy"),
    get("data"),
    (currentPolicy) =>
      pipe([
        () => ({
          etag: currentPolicy.etag,
          bindings: bindingsAdd({
            currentBindings: currentPolicy.bindings,
            rolesToAdd: rolesDefault,
            member,
          }),
        }),
        switchCase([
          (newPolicy) =>
            !isDeepEqual(currentPolicy.bindings, newPolicy.bindings),
          pipe([
            tap((newPolicy) => {
              logger.debug(`updating iam policy`);
              logger.debug(tos(currentPolicy));
              logger.debug(`new policy:`);
              logger.debug(tos(newPolicy));
            }),
            (policy) => axios.post(":setIamPolicy", { policy }),
            tap((xx) => {
              logger.debug("iam policy updated");
            }),
          ]),
          tap(() => {
            console.log(`Iam policy already up to date`);
          }),
        ]),
      ])(),
  ])();
};

const iamPolicyRemove = async ({
  accessToken,
  projectId,
  serviceAccountName,
}) => {
  const axios = createAxiosIam({ projectId, accessToken });
  const memberToRemove = MemberServiceAccount({
    serviceAccountName,
    projectId,
  });

  console.log(`Removing Iam binding for member ${memberToRemove} `);

  return pipe([
    tap(() => {
      logger.debug("getting iam policy");
    }),
    () => axios.post(":getIamPolicy"),
    get("data"),
    (currentPolicy) =>
      pipe([
        tap(() => {
          logger.debug("iamPolicyRemove ");
        }),
        () => ({
          etag: currentPolicy.etag,
          bindings: bindingsRemove({
            currentBindings: currentPolicy.bindings,
            memberToRemove,
          }),
        }),
        switchCase([
          (newPolicy) =>
            !isDeepEqual(currentPolicy.bindings, newPolicy.bindings),
          pipe([
            tap((newPolicy) => {
              logger.debug(`updating iam policy`);
              logger.debug(tos(currentPolicy));
              logger.debug(`new policy:`);
              logger.debug(tos(newPolicy));
            }),
            (policy) => axios.post(":setIamPolicy", { policy }),
            tap((xx) => {
              logger.debug("iam policy updated");
            }),
          ]),
          tap(() => {
            console.log(`Iam policy already up to date`);
          }),
        ]),
      ])(),
  ])();
};

const createProject = async ({ accessToken, projectName, projectId }) => {
  console.log(`Creating project ${projectName}, projectId: ${projectId}`);

  assert(projectName);
  const axiosProject = AxiosMaker({
    baseURL: `https://cloudresourcemanager.googleapis.com/v1/projects`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  return pipe([
    () => axiosProject.get("/"),
    get("data.projects"),
    tap((projects) => {
      logger.debug(`Current projects: ${tos(projects)}`);
    }),
    filter(eq(get("lifecycleState"), "ACTIVE")),
    find(eq(get("projectId"), projectId)),
    switchCase([
      isEmpty,
      pipe([
        tap(() => {
          logger.debug(
            `Creating project ${projectName}, projectId: ${projectId}`
          );
        }),
        () =>
          axiosProject.post("/", {
            name: projectName,
            projectId,
          }),
        tap(() => {
          logger.debug(`project ${projectName} created`);
        }),
      ]),
      tap((project) => {
        console.log(`project ${projectId} already exist`);
      }),
    ]),
  ])();
};

const createAxiosBilling = ({ accessToken, projectId }) =>
  AxiosMaker({
    baseURL: `https://cloudbilling.googleapis.com/v1`,
    onHeaders: () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

const billingEnable = async ({ accessToken, projectId }) => {
  const axiosBilling = createAxiosBilling({ accessToken });
  console.log(`Setup billing`);

  return pipe([
    tap(() => {
      logger.debug(`billingEnable for project ${projectId}`);
    }),
    () => axiosBilling.get(`/projects/${projectId}/billingInfo`),
    get("data"),
    tap((billingInfo) => {
      logger.debug(`billingEnable billingInfo for project: ${billingInfo}`);
    }),
    switchCase([
      get("billingEnabled"),
      tap((billingInfo) => {
        console.log(
          `billing '${billingInfo.billingAccountName}' already enabled`
        );
        logger.debug(`billing already enabled`);
      }),
      pipe([
        () => axiosBilling.get(`/billingAccounts`),
        get("data.billingAccounts"),
        tap((billingAccounts) => {
          logger.debug(
            `billingEnable billingAccounts: ${tos(billingAccounts)}`
          );
        }),
        filter(({ open }) => open),
        switchCase([
          isEmpty,
          () => {
            throw "no active billing account";
          },
          pipe([
            first,
            tap((billingAccount) => {
              logger.debug(`enabling billing account ${tos(billingAccount)}`);
            }),
            tap((billingAccount) =>
              axiosBilling.put(`/projects/${projectId}/billingInfo`, {
                billingAccountName: billingAccount.name,
                billingEnabled: true,
              })
            ),
            tap(() => {
              logger.debug(`billing account enabled`);
            }),
          ]),
        ]),
      ]),
    ]),
  ])();
};
const billingDisable = async ({ accessToken, projectId }) => {
  const axiosBilling = createAxiosBilling({ accessToken });
  console.log(`Disable billing`);

  return pipe([
    tap(() => {
      logger.debug(`billingDisable for project ${projectId}`);
    }),
    () => axiosBilling.get(`/projects/${projectId}/billingInfo`),
    get("data"),
    tap((billingInfo) => {
      logger.debug(`billingDisable billingInfo: ${billingInfo}`);
    }),
    switchCase([
      get("billingEnabled"),
      pipe([
        tap((billingInfo) => {
          console.log(`billing '${billingInfo.billingAccountName}'`);
          logger.debug(`disable billing`);
        }),
        tap((billingInfo) =>
          axiosBilling.put(`/projects/${projectId}/billingInfo`, {
            billingAccountName: billingInfo.billingAccountName,
            billingEnabled: false,
          })
        ),
        tap((billingInfo) => {
          console.log(`billing '${billingInfo.billingAccountName}' disabled`);
        }),
      ]),
      tap(() => {
        logger.debug(`billing already disabled`);
      }),
    ]),
  ])();
};

const info = ({
  config,
  gcloudConfig,
  projectId,
  projectName,
  applicationCredentialsFile,
  serviceAccountName,
}) => {
  return {
    projectId,
    projectName,
    applicationCredentialsFile,
    serviceAccountName,
    hasGCloud: !!gcloudConfig,
    config: omit(["projectName", "projectId", "accessToken"])(config),
  };
};

const init = ({
  gcloudConfig,
  projectId,
  projectName,
  region,
  applicationCredentialsFile,
  serviceAccountName,
  options,
  programOptions,
}) =>
  switchCase([
    () => gcloudConfig.config,
    tryCatch(
      pipe([
        tap(() => {
          assert(region);
          assert(programOptions.workingDirectory);
        }),
        fork({
          dirs: () => ({
            destination: path.resolve(programOptions.workingDirectory),
          }),
        }),
        tap((params) => {
          assert(true);
        }),
        createProjectGoogle,
        () => {
          console.log(`Initializing project ${projectId}`);
        },
        () => getDefaultAccessToken(),
        switchCase([
          isEmpty,
          () => {
            console.error(
              `Cannot get default access token, run 'gcloud auth login' and try again`
            );
          },
          (accessToken) =>
            pipe([
              () => createProject({ projectName, projectId, accessToken }),
              () =>
                serviceEnable({
                  projectId,
                  region,
                  accessToken,
                  servicesApiMap: servicesApiMapBase,
                }),
              () => billingEnable({ projectId, accessToken }),
              () =>
                serviceAccountCreate({
                  projectId,
                  accessToken,
                  serviceAccountName,
                }),
              () => {
                console.log(
                  `Create and save credential file to ${applicationCredentialsFile}`
                );
              },
              () =>
                serviceAccountKeyCreate({
                  projectId,
                  projectName,
                  accessToken,
                  serviceAccountName,
                  applicationCredentialsFile,
                }),
              () => {
                console.log(`Update IAM policy`);
              },
              () =>
                iamPolicyAdd({
                  accessToken,
                  projectId,
                  serviceAccountName,
                }),
              () =>
                serviceEnable({
                  region,
                  projectId,
                  accessToken,
                  servicesApiMap: servicesApiMapMain,
                }),
              () => {
                console.log(`Project ${projectName} is now initialized`);
              },
            ])(),
        ]),
      ]),
      pipe([
        tap((error) => {
          assert(true);
        }),
        (error) => convertError({ error }),
        tap((error) => {
          console.error(YAML.stringify(error));
        }),
        (error) => {
          throw error;
        },
      ])
    ),
    () => {
      console.error(`gcloud is not installed, setup aborted`);
    },
  ])();

const unInit = async ({
  gcloudConfig,
  projectId,
  projectName,
  applicationCredentialsFile,
  serviceAccountName,
  options = {},
}) => {
  if (!gcloudConfig.config) {
    console.error(`gcloud is not installed, setup aborted`);
    return;
  }
  console.log(`De-initializing project ${projectId}`);
  const accessToken = getDefaultAccessToken();
  if (!accessToken) {
    logger.debug(
      `cannot get default access token, run 'gcloud auth login' and try again`
    );
    return;
  }

  await iamPolicyRemove({
    accessToken,
    projectId,
    serviceAccountName,
  });

  if (options.serviceAccountDelete) {
    await serviceAccountKeyDelete({
      projectId,
      projectName,
      accessToken,
      serviceAccountName,
      applicationCredentialsFile,
    });

    await serviceAccountDelete({
      projectId,
      accessToken,
      serviceAccountName,
    });
  }
  //await billingDisable({ projectId, accessToken });
  //await removeProject({ projectName, projectId, accessToken });
  if (options.servicesDelete) {
    await serviceDisable({
      projectId,
      accessToken,
      servicesApiMap: servicesApiMapMain,
    });
    await serviceDisable({
      projectId,
      accessToken,
      servicesApiMap: servicesApiMapBase,
    });
  }
  console.log(`Project is now un-initialized`);
};

exports.GoogleProvider = ({
  name = "google",
  config,
  configs = [],
  stage,
  ...other
}) => {
  const gcloudConfig = getConfig();

  const mergeConfig = ({ config, configs }) =>
    pipe([
      () => [...configs, config],
      filter((x) => x),
      reduce((acc, config) => defaultsDeep(acc)(config(acc)), {
        stage,
        managedByTag: "-managed-by-gru",
        managedByKey: "gc-managed-by",
        managedByValue: "grucloud",
        ...computeDefault,
        accessToken: () => serviceAccountAccessToken,
        projectNumber: () => _projectNumber,
      }),
      switchCase([
        get("credentialFile"),
        (config) =>
          pipe([
            tap(() => {
              logger.debug(``);
            }),
            () => readFileSync(config.credentialFile, "utf-8"),
            JSON.parse,
            ({ project_id }) => ({ ...config, projectId: project_id }),
          ])(),
        (config) =>
          pipe([
            () => gcloudConfig,
            get("config.properties.compute", {}),
            pick(["region", "zone"]),
            defaultsDeep(config),
          ])(),
      ]),
    ])();

  const mergedConfig = mergeConfig({ config, configs });

  const projectId = () => get("projectId")(mergedConfig);
  const projectName = () => get("projectName", projectId())(mergedConfig);
  const region = () => get("region")(mergedConfig);

  const applicationCredentialsFile = switchCase([
    () => mergedConfig.credentialFile,
    () => path.resolve(mergedConfig.credentialFile),
    () =>
      ApplicationCredentialsFile({
        configDir: gcloudConfig.config?.paths.global_config_dir,
        projectId: projectId(),
      }),
  ])();

  let serviceAccountAccessToken;
  let _projectNumber;

  const start = async () => {
    if (!serviceAccountAccessToken) {
      serviceAccountAccessToken = await authorize({
        gcloudConfig,

        projectId: projectId(),
        projectName: projectName(),
        applicationCredentialsFile,
      });
    }

    return pipe([
      tap((params) => {
        assert(true);
      }),
      () => ({
        baseURL: `https://cloudresourcemanager.googleapis.com/v1/projects/${projectId()}`,
        onHeaders: () => ({
          Authorization: `Bearer ${serviceAccountAccessToken}`,
        }),
      }),
      tap((params) => {
        assert(true);
      }),
      AxiosMaker,
      (axiosService) => axiosService.get("/"),
      tap((params) => {
        assert(true);
      }),
      get("data"),
      tap(({ projectNumber }) => {
        logger.debug(`started`);
        _projectNumber = projectNumber;
      }),
    ])();
  };

  const core = CoreProvider({
    ...other,
    type: "google",
    name,
    makeConfig: () => mergedConfig,
    fnSpecs,
    start,
    info: ({ options } = {}) =>
      info({
        options,
        config: mergedConfig,
        gcloudConfig,
        projectName: projectName(),
        projectId: projectId(),
        applicationCredentialsFile,
        serviceAccountName: ServiceAccountName,
      }),
    init: ({ options, programOptions } = {}) =>
      init({
        options,
        programOptions,
        gcloudConfig,
        region: region(),
        projectName: projectName(),
        projectId: projectId(),
        applicationCredentialsFile,
        serviceAccountName: ServiceAccountName,
      }),
    unInit: ({ options } = {}) =>
      unInit({
        options,
        gcloudConfig,
        projectName: projectName(),
        projectId: projectId(),
        applicationCredentialsFile,
        serviceAccountName: ServiceAccountName,
      }),
    generateCode: ({ commandOptions, programOptions }) =>
      generateCode({
        providerConfig: mergedConfig,
        specs: fnSpecs(mergedConfig),
        commandOptions,
        programOptions,
      }),
  });

  return core;
};
