const assert = require("assert");
const plu = require("pluralize");
const prompts = require("prompts");
const colors = require("colors/safe");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const {
  map,
  pipe,
  switchCase,
  reduce,
  tap,
  assign,
  all,
  filter,
  not,
  any,
  and,
  or,
  tryCatch,
  get,
  eq,
} = require("rubico");
const {
  find,
  pluck,
  isEmpty,
  flatten,
  forEach,
  uniq,
  size,
  first,
} = require("rubico/x");

const logger = require("../logger")({ prefix: "CliCommands" });
const YAML = require("./json2yaml");
const {
  runAsyncCommand,
  displayProviderList,
  setupProviders,
} = require("./cliUtils");
const {
  displayPlan,
  displayPlanSummary,
  displayPlanDestroySummary,
  displayListSummary,
} = require("./displayUtils");
const { convertError, HookType } = require("../providers/Common");
const { tos } = require("../tos");

const DisplayAndThrow = ({ name }) => (error) => {
  displayError({ name, error });
  throw { code: 422, error: { ...error, displayed: true } };
};

const throwIfError = tap.if(get("error"), (result) => {
  throw result;
});

const formatResource = ({ providerName, type, name, id }) =>
  pipe([
    tap(() => {
      assert(providerName);
      assert(type);
      assert(name || id);
    }),
    () => `${providerName}/${type}/${name || id}`,
  ])();

const countDeployResources = pipe([
  tap((results) => {
    assert(Array.isArray(results));
  }),
  filter(not(get("error"))),
  reduce(
    (acc, value) => {
      assert(Array.isArray(value.resultCreate), "resultCreate");
      assert(Array.isArray(value.resultDestroy), "resultDestroy");

      const createCount = value.resultCreate.length;
      const destroyCount = value.resultDestroy.length;
      const providerActive = createCount > 0 || destroyCount > 0 ? 1 : 0;
      //TODO count types for destroy
      return {
        providers: acc.providers + providerActive,
        types:
          acc.types +
          pipe([pluck("resource.type"), uniq, size])(value.resultCreate),
        create: acc.create + createCount,
        destroy: acc.destroy + destroyCount,
      };
    },
    { providers: 0, types: 0, create: 0, destroy: 0 }
  ),
  tap((result) => {
    logger.debug(`countDeployResources ${JSON.stringify(result)}`);
  }),
]);

const hasPlans = pipe([
  tap((input) => {
    assert(input);
    assert(input.results);
  }),
  get("results"),
  //filter(not(get("error"))),
  find(
    or([
      pipe([get("resultCreate"), not(isEmpty)]),
      pipe([get("resultDestroy"), not(isEmpty)]),
    ])
  ),
  not(isEmpty),
  tap((hasPlan) => {
    logger.debug(`hasPlans ${hasPlan}`);
  }),
]);

const saveToJson = ({
  command,
  commandOptions,
  programOptions = {},
  result,
}) => {
  if (!programOptions.json) {
    return;
  }
  fs.writeFileSync(
    programOptions.json,
    JSON.stringify({ command, commandOptions, programOptions, result }, null, 4)
  );
};

const displayLiveError = (result) =>
  pipe([
    tap((results) => {
      //TODO
      //logger.debug(results);
    }),
    filter(get("error")),
    forEach(({ type, error }) => {
      console.error(`${type}: ${error.message}`);
      error.stack && console.error(error.stack);
    }),
  ])(result.results);

const displayPlanQueryErrorResult = pipe([
  tap((result) => {
    logger.debug(result);
  }),
  filter(get("error")),
  forEach(({ resource, error }) => {
    console.error(`Resource: ${resource.uri}`);
    console.log(YAML.stringify(convertError({ error })));
  }),
]);

const displayPlanApplyErrorResult = pipe([
  tap((xx) => {
    //logger.debug(tos(xx));
  }),
  filter(({ error }) => error),
  forEach(({ error, item: { resource } }) => {
    console.error(`Resource: ${resource.uri}`);
    console.log(YAML.stringify(convertError({ error })));
  }),
]);

const displayErrorHooks = ({ resultsHook }) => {
  if (resultsHook?.error) {
    pipe([
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      pluck("result"),
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      filter(get("error")),
      pluck("results"),
      flatten,
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      filter(get("error")),
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      pluck("results"),
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      flatten,
      tap((xx) => {
        logger.debug(tos(xx));
      }),
      filter(get("error")),
      forEach(({ error, hookName, providerName, hookType, action }) => {
        assert(providerName);
        const fullName = `${providerName}::${hookName}::${hookType}::${
          action ? action : "init"
        }`;
        console.log(`Error running hook '${fullName}'`);
        console.log(YAML.stringify(convertError({ error })));
      }),
    ])(resultsHook.results);
  }
};

const displayErrorResults = ({ results = [], name }) => {
  if (!isEmpty(results)) {
    pipe([
      //TODO
      tap((results) => {
        logger.debug(`displayErrorResults ${tos(results)}`);
      }),
      filter(get("error")),
      forEach(({ result, error, resultQuery }) => {
        if (error) {
          console.log(YAML.stringify(convertError({ error, name })));
        }
        if (resultQuery) {
          resultQuery.lives.error && displayLiveError(resultQuery.lives);
          displayPlanQueryErrorResult(resultQuery.resultCreate);
          displayPlanQueryErrorResult(resultQuery.resultDestroy);
        }

        if (result?.resultCreate?.results) {
          displayPlanApplyErrorResult(result.resultCreate.results);
        }
        if (result?.resultDestroy?.results) {
          displayPlanApplyErrorResult(result.resultDestroy.results);
        }

        if (result?.results) {
          pipe([
            filter(({ error }) => error),
            forEach(({ item, type, client, error }) => {
              item && console.log(`Resource ${formatResource(item.resource)}`);
              client && console.log(`Client ${client.type}`);
              type && console.log(`Client ${type}`);

              console.log(YAML.stringify(convertError({ error, name })));
            }),
          ])(result.results);
        }
      }),
    ])(results);
  }
};

const displayError = ({ name, error }) => {
  assert(error);
  assert(name);
  console.error(`ERROR running command '${name}'`);
  displayErrorResults({ name, results: error.result?.results });

  displayErrorResults({ name, results: error.resultQuery?.results });
  displayErrorResults({ name, results: error.resultsDestroy });
  displayErrorHooks({ name, resultsHook: error.resultsHook });

  const results =
    error.resultQuery ||
    error.resultsDestroy ||
    error.result ||
    error.resultQueryDestroy ||
    error.resultsHook;

  if (!results) {
    console.log(YAML.stringify(convertError({ error })));
  }
};

const displayCommandHeader = ({ providers, verb }) =>
  `${verb} resources on ${plu(
    "provider",
    providers.length,
    true
  )}: ${displayProviderList(providers)}`;

// Plan Query
const doPlanQuery = ({ commandOptions }) =>
  pipe([
    tap((input) => {
      logger.debug("doPlanQuery");
      assert(input.providersGru);
      assert(input.providersGru.getProviders().length > 0);
    }),
    ({ providersGru }) =>
      runAsyncCommand({
        text: displayCommandHeader({
          providers: providersGru.getProviders(),
          verb: "Querying",
        }),
        command: ({ onStateChange }) =>
          pipe([
            tap(() =>
              map.series((provider) =>
                provider.spinnersStartQuery({
                  onStateChange,
                  options: commandOptions,
                })
              )(providersGru.getProviders())
            ),
            assign({
              resultQuery: () =>
                providersGru.planQuery({ onStateChange, commandOptions }),
            }),
          ])({}),
      }),
    tap((result) => {
      assert(result);
    }),
    assign({ error: any(get("error")) }),
    //TODO create own function
    tap(
      pipe([
        tap((result) => {
          assert(result);
        }),
        get("resultQuery.results"),
        tap((result) => {
          assert(result);
        }),
        forEach(({ providerName, resultCreate, resultDestroy }) =>
          displayPlan({
            providerName,
            newOrUpdate: resultCreate,
            destroy: resultDestroy,
          })
        ),
        displayPlanSummary,
        tap((result) => {
          assert(result);
        }),
      ])
    ),
  ]);

const displayQueryNoPlan = () =>
  console.log("Nothing to deploy, everything is up to date");

const displayQueryPlanSummary = ({ providers, create, destroy }) =>
  console.log(
    `${plu("resource", create, true)} to deploy${
      destroy > 0 ? ` and ${plu("resource", destroy, true)} to destroy` : ""
    } on ${plu("provider", providers, true)}`
  );

const planQuery = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    pipe([
      () => infra,
      setupProviders({ commandOptions }),
      doPlanQuery({ commandOptions, programOptions }),
      tap((result) =>
        saveToJson({ command: "plan", commandOptions, programOptions, result })
      ),
      throwIfError,
      tap(
        pipe([
          tap((result) => {
            assert(result.resultQuery);
          }),
          get("resultQuery"),
          switchCase([
            hasPlans,
            pipe([
              get("results"),
              filter(not(get("error"))),
              countDeployResources,
              displayQueryPlanSummary,
            ]),
            displayQueryNoPlan,
          ]),
        ])
      ),
    ]),
    DisplayAndThrow({ name: "Plan" })
  )();

exports.planQuery = planQuery;

const commandToFunction = (command) =>
  `run${command.charAt(0).toUpperCase()}${command.slice(1)}`;

const runAsyncCommandHook = ({ hookType, commandTitle, providersGru }) =>
  pipe([
    tap(() => {
      logger.debug(`runAsyncCommandHook hookType: ${hookType}`);
      assert(providersGru);
    }),
    () =>
      runAsyncCommand({
        text: displayCommandHeader({
          providers: providersGru.getProviders(),
          verb: commandTitle,
        }),
        command: ({ onStateChange }) =>
          pipe([
            tap(() =>
              map((provider) =>
                provider.spinnersStartHook({
                  onStateChange,
                  hookType,
                })
              )(providersGru.getProviders())
            ),
            () =>
              providersGru.runCommand({
                onStateChange,
                functionName: commandToFunction(hookType),
              }),
          ])({}),
      }),
    tap((xxx) => {
      logger.debug(`runAsyncCommandHook hookType: ${hookType} DONE`);
    }),
    throwIfError,
  ]);

// planRunScript
const planRunScript = async ({
  infra,
  commandOptions = {},
  programOptions = {},
}) =>
  tryCatch(
    pipe([
      tap(() => {
        logger.debug("planRunScript");
      }),
      () => infra,
      setupProviders({ commandOptions }),
      tap((input) => {
        assert(input.providersGru);
      }),
      ({ providersGru }) =>
        switchCase([
          () => commandOptions.onDeployed,
          () =>
            runAsyncCommandHook({
              providersGru,
              hookType: HookType.ON_DEPLOYED,
              commandTitle: `Running OnDeployed`,
            })({}),
          () => commandOptions.onDestroyed,
          () =>
            runAsyncCommandHook({
              providersGru,
              hookType: HookType.ON_DESTROYED,
              commandTitle: `Running OnDestroyed`,
            })({}),
          () => {
            throw { code: 422, message: "no command found" };
          },
        ])(),
      tap((result) => {
        logger.debug("planRunScript Done");
      }),
      tap((result) =>
        saveToJson({
          command: "runScript",
          commandOptions,
          programOptions,
          result,
        })
      ),
      throwIfError,
    ]),
    DisplayAndThrow({ name: "Run Script" })
  )();

exports.planRunScript = planRunScript;

// Plan Apply

const processNoPlan = () => {
  console.log("Nothing to deploy");
};

const abortDeploy = () => {
  console.log("Deployment aborted");
};

const promptConfirmDeploy = (allPlans) =>
  pipe([
    tap((result) => {
      logger.debug("promptConfirmDeploy");
    }),
    get("results"),
    countDeployResources,
    ({ providers, types, create, destroy }) =>
      prompts({
        type: "confirm",
        name: "confirmDeploy",
        message: `Are you sure to deploy ${plu(
          "resource",
          create,
          true
        )}, ${plu("type", types, true)} on ${plu("provider", providers, true)}${
          destroy > 0 ? ` and destroy ${plu("resource", destroy, true)}` : ""
        }?`,
        initial: false,
      }),
    get("confirmDeploy"),
    tap((confirmDeploy) => {
      logger.debug(`promptConfirmDeploy ${confirmDeploy}`);
    }),
  ])(allPlans);

const displayDeploySuccess = pipe([
  tap((results) => {
    logger.debug("displayDeploySuccess");
    assert(Array.isArray(results));
  }),
  countDeployResources,
  ({ providers, types, create, destroy }) =>
    console.log(
      `${plu("resource", create, true)} deployed${
        destroy > 0 ? ` and ${plu("resource", destroy, true)} destroyed` : ""
      } of ${plu("type", types, true)} and ${plu("provider", providers, true)}`
    ),
]);

//TODO result => planInfo
const doPlansDeploy = ({ commandOptions, programOptions, providersGru }) => (
  result
) =>
  pipe([
    tap(() => {
      logger.debug("doPlansDeploy ");
    }),
    () => result,
    ({ results }) =>
      runAsyncCommand({
        text: displayCommandHeader({
          providers: providersGru.getProviders(),
          verb: "Deploying",
        }),
        command: ({ onStateChange }) =>
          pipe([
            tap(
              pipe([
                () => results,
                filter(not(get("error"))),
                map.series((plan) =>
                  providersGru
                    .getProvider({ providerName: plan.providerName })
                    .spinnersStartDeploy({
                      onStateChange,
                      plan,
                    })
                ),
              ])
            ),
            //TODO result => resultApply
            () =>
              providersGru.planApply({
                onStateChange,
                plan: result,
              }),
            tap((xxx) => {
              assert(xxx);
            }),
            tap(
              pipe([
                get("results"),
                filter(not(get("error"))),
                forEach(({ providerName, error }) =>
                  providersGru
                    .getProvider({ providerName })
                    .spinnersStopProvider({
                      onStateChange,
                      error,
                    })
                ),
              ])
            ),
          ])(),
      }),
    tap((result) =>
      saveToJson({ command: "apply", commandOptions, programOptions, result })
    ),
    //throwIfError,
    tap((xxx) => {
      logger.debug("doPlansDeploy");
    }),
    tap(() => displayDeploySuccess(result.results)),
  ])();

const processDeployPlans = ({ commandOptions, programOptions, providersGru }) =>
  switchCase([
    (allplans) => commandOptions.force || promptConfirmDeploy(allplans),
    doPlansDeploy({ commandOptions, programOptions, providersGru }),
    abortDeploy,
  ]);

const planApply = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    pipe([
      () => infra,
      setupProviders({ commandOptions }),
      ({ providersGru }) =>
        pipe([
          //TODO clean up providersGru
          () => ({ providersGru }),
          tap((providersGru) => {
            assert(providersGru);
          }),
          doPlanQuery({ commandOptions, programOptions }),
          tap((xxx) => {
            assert(xxx);
          }),
          assign({
            resultDeploy: pipe([
              get("resultQuery"),
              switchCase([
                hasPlans,
                processDeployPlans({
                  providersGru,
                  commandOptions,
                  programOptions,
                }),
                processNoPlan,
              ]),
            ]),
          }),
          tap((result) => {
            assert(result);
          }),
          switchCase([
            or([
              pipe([
                get("resultDeploy.results"),
                pluck("resultCreate"),
                pluck("results"),
                flatten,
                find(eq(get("error.errorClass"), "Dependency")),
                tap((hasError) => {
                  logger.info(`has dependency error: ${hasError}`);
                }),
              ]),
              and([
                pipe([
                  get("resultQuery.results"),
                  find(eq(get("errorClass"), "Dependency")),
                ]),
                not(get("resultDeploy.error")),
              ]),
            ]),
            pipe([
              tap(() => {
                logger.info("finishing deployment");
              }),
              () => planApply({ infra, commandOptions, programOptions }),
            ]),
            (result) => result,
          ]),
          throwIfError,
        ])(),
    ]),
    DisplayAndThrow({ name: "Plan Apply" })
  )();

exports.planApply = planApply;
// Plan Destroy

const processHasNoPlan = () => {
  console.log("No resources to destroy");
};

const countDestroyed = reduce(
  (acc, value) => {
    assert(value, "value.result");
    const plans = value.plans;
    assert(Array.isArray(plans), "plans");

    const resourceCount = plans.length;
    const providerActive = resourceCount > 0 ? 1 : 0;
    return {
      providers: acc.providers + providerActive,
      types: acc.types + pipe([pluck("resource.type"), uniq, size])(plans),
      resources: acc.resources + resourceCount,
    };
  },
  { providers: 0, types: 0, resources: 0 }
);

const displayDestroySuccess = pipe([
  tap((x) => {
    logger.debug(`displayDestroySuccess`);
  }),
  get("results"),
  map(get("resultDestroy")),
  tap((results) => {
    assert(results);
  }),
  countDestroyed,
  tap((stats) => {
    logger.debug(`displayDestroySuccess ${tos(stats)}`);
  }),
  ({ providers, types, resources }) =>
    console.log(
      `${plu("resource", resources, true)} destroyed, ${plu(
        "type",
        types,
        true
      )} on ${plu("provider", providers, true)}`
    ),
]);

const promptConfirmDestroy = (result) =>
  pipe([
    () => result,
    tap((result) => {
      assert(result);
      logger.debug(`promptConfirmDestroy`);
    }),
    countDestroyed,
    ({ providers, types, resources }) =>
      prompts({
        type: "confirm",
        name: "confirmDestroy",
        message: colors.red(
          `Are you sure to destroy ${plu("resource", resources, true)}, ${plu(
            "type",
            types,
            true
          )} on ${plu("provider", providers, true)}?`
        ),
        initial: false,
      }),
    get("confirmDestroy"),
    tap((confirmDestroy) => {
      logger.debug(`promptConfirmDestroy ${confirmDestroy}`);
    }),
  ])();

const displayDestroyErrors = pipe([
  tap((x) => {
    //TODO
    //logger.error(`displayDestroyErrors ${tos(x)}`);
  }),
]);

exports.planDestroy = async ({
  infra,
  commandOptions = {},
  programOptions = {},
}) => {
  const doPlansDestroy = ({
    commandOptions,
    providersGru,
    resultQueryDestroy,
  }) =>
    pipe([
      tap(() => {
        logger.debug(`doPlansDestroy`);
        assert(resultQueryDestroy);
      }),
      () => ({ resultQueryDestroy }),
      () =>
        runAsyncCommand({
          text: displayCommandHeader({
            providers: providersGru.getProviders(), //TODO pick provider names from  resultQueryDestroy.results
            verb: "Destroying",
          }),
          command: ({ onStateChange }) =>
            pipe([
              tap(
                pipe([
                  () => resultQueryDestroy.results,
                  filter(not(get("error"))),
                  map.series(({ providerName, plans }) =>
                    providersGru
                      .getProvider({ providerName })
                      .spinnersStartDestroy({
                        onStateChange,
                        plans: plans,
                      })
                  ),
                ])
              ),
              () =>
                providersGru.planDestroy({
                  onStateChange,
                  plan: resultQueryDestroy,
                }),
            ])(),
        }),
      tap((result) =>
        saveToJson({
          command: "destroy",
          commandOptions,
          programOptions,
          result,
        })
      ),
      tap(
        switchCase([get("error"), displayDestroyErrors, displayDestroySuccess])
      ),
      tap((result) => {
        logger.debug(`doPlansDestroy finished, error: ${result.error}`);
      }),
    ])();

  const processDestroyPlans = ({ providersGru, resultQueryDestroy }) =>
    pipe([
      tap(() => {
        assert(Array.isArray(resultQueryDestroy.results));
        logger.debug("processDestroyPlans");
      }),
      () => resultQueryDestroy.results,
      switchCase([
        (plans) => commandOptions.force || promptConfirmDestroy(plans),
        () =>
          doPlansDestroy({ commandOptions, providersGru, resultQueryDestroy }),
        tap(() => {
          console.log("Abort destroying plan");
        }),
      ]),
    ])();

  return tryCatch(
    pipe([
      () => infra,
      setupProviders({ commandOptions }),
      ({ providersGru }) =>
        pipe([
          () =>
            runAsyncCommand({
              text: displayCommandHeader({
                providers: providersGru.getProviders(),
                verb: "Find Deletable",
              }),
              command: ({ onStateChange }) =>
                pipe([
                  tap(() =>
                    map.series((provider) =>
                      provider.spinnersStartDestroyQuery({
                        onStateChange,
                        options: commandOptions,
                      })
                    )(providersGru.getProviders())
                  ),
                  assign({
                    resultQueryDestroy: () =>
                      providersGru.planQueryDestroy({
                        onStateChange,
                        options: commandOptions,
                      }),
                  }),
                  tap((xxx) => {
                    assert(xxx);
                  }),
                  assign({ error: any(get("error")) }),
                ])({}),
            }),
          tap((xxx) => {
            assert(xxx);
          }),
          tap(
            pipe([
              get("resultQueryDestroy.results"),
              forEach(({ providerName, plans }) =>
                displayPlan({
                  providerName: providerName,
                  newOrUpdate: [],
                  destroy: plans,
                })
              ),
              displayPlanDestroySummary,
            ])
          ),
          tap((xxx) => {
            assert(xxx);
          }),
          assign({
            resultDestroy: ({ resultQueryDestroy }) =>
              pipe([
                () => resultQueryDestroy.results,
                switchCase([
                  find(pipe([get("plans"), not(isEmpty)])),
                  () =>
                    processDestroyPlans({ providersGru, resultQueryDestroy }),
                  processHasNoPlan,
                ]),
              ])(),
          }),
          assign({ error: any(get("error")) }),
          tap((xxx) => {
            assert(xxx);
          }),
          throwIfError,
        ])(),
    ]),
    DisplayAndThrow({ name: "Plan Destroy" })
  )();
};

const countResources = pipe([
  tap((perProviders) => {
    assert(Array.isArray(perProviders));
  }),
  reduce(
    (acc, { results }) => ({
      providers: acc.providers + 1,
      types: reduce((acc) => acc + 1, acc.types)(results),
      resources: reduce(
        (acc, value) => acc + value.resources.length,
        acc.resources
      )(results),
    }),
    { providers: 0, types: 0, resources: 0 }
  ),
  tap((result) => {
    logger.info(`countResources ${JSON.stringify(result)}`);
  }),
]);

const displayNoList = () => {
  console.log("No live resources to list");
};

const displayListSummaryResults = ({ providers, types, resources }) => {
  console.log(
    `${plu("resource", resources, true)}, ${plu("type", types, true)}, ${plu(
      "provider",
      providers,
      true
    )}`
  );
};

const listDoOk = ({ commandOptions, programOptions }) =>
  pipe([
    setupProviders({ commandOptions }),
    ({ providersGru }) =>
      pipe([
        () =>
          runAsyncCommand({
            text: displayCommandHeader({
              providers: providersGru.getProviders(),
              verb: "Listing",
            }),
            command: ({ onStateChange }) =>
              pipe([
                tap(() =>
                  map.series((provider) =>
                    provider.spinnersStartListLives({
                      onStateChange,
                      options: commandOptions,
                    })
                  )(providersGru.getProviders())
                ),
                assign({
                  result: () =>
                    providersGru.listLives({
                      onStateChange,
                      options: commandOptions,
                    }),
                }),
              ])({}),
          }),
        tap(({ result }) => {
          providersGru.displayLives(result);
        }),
      ])(),
    tap(
      pipe([
        tap((xxx) => {
          assert(xxx);
        }),
        switchCase([
          pipe([get("result.results"), isEmpty]),
          displayNoList,
          pipe([
            tap(displayListSummary),
            get("result.results"),
            filter(not(get("error"))),
            countResources,
            displayListSummaryResults,
          ]),
        ]),
      ])
    ),
    tap((xxx) => {
      assert(xxx);
    }),
    assign({ error: any(get("error")) }),
    tap((result) =>
      saveToJson({ command: "list", commandOptions, programOptions, result })
    ),
    throwIfError,
  ]);

//List all
exports.list = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    listDoOk({ commandOptions, programOptions }),
    DisplayAndThrow({ name: "List" })
  )(infra);

//Output
const OutputDoOk = ({ commandOptions, programOptions }) =>
  pipe([
    tap(() => {
      logger.info(`output`);
    }),
    setupProviders({ commandOptions }),
    ({ providersGru }) => providersGru.getProviders(),
    tap((providers) => {
      logger.debug(`output #providers ${providers.length}`);
    }),
    // TODO try catch
    // TODO use Lister
    map((provider) =>
      pipe([
        () => provider.start(),
        () =>
          provider.getResource({
            uri: `${provider.name}::${commandOptions.type}::${commandOptions.name}`,
          }),
      ])()
    ),
    filter((resource) => resource),
    switchCase([
      isEmpty,
      () => {
        throw {
          message: `Cannot find resource: '${commandOptions.type}::${commandOptions.name}'`,
        };
      },
      (resources) => size(resources) > 1,
      () => {
        throw {
          message: `resource: '${commandOptions.name}' found in multiple providers, use the --provider option`,
        };
      },
      first,
    ]),
    tap((resource) => {
      assert(resource);
      logger.debug(`output resource: ${resource.toString()}`);
    }),
    (resource) => resource.getLive(),
    tap((live) => {
      logger.debug(`output live: ${live}`);
    }),
    get(commandOptions.field),
    tap((result) => {
      logger.info(`output result: ${result}`);
      console.log(result);
    }),
  ]);

exports.output = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    OutputDoOk({ commandOptions, programOptions }),
    DisplayAndThrow({ name: "Output" })
  )(infra);

//Init
const DoCommand = ({ commandOptions, command }) =>
  pipe([
    tap((xxx) => {
      logger.debug(`DoCommand ${command}`);
    }),
    setupProviders({ commandOptions }),
    ({ providersGru }) => providersGru.getProviders(),
    map(
      tryCatch(
        (provider) => provider[command]({ options: commandOptions }),
        (error, provider) => {
          return { error, provider: provider.toString() };
        }
      )
    ),
    (results) => ({
      error: any(get("error"))(results),
      results,
      command,
    }),
    switchCase([
      get("error"),
      (result) => {
        throw result;
      },
      tap((xxx) => {
        logger.debug(`${command} done`);
      }),
    ]),
  ]);

exports.info = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    pipe([
      tap((xxx) => {
        logger.debug(`info`);
      }),
      DoCommand({ commandOptions, programOptions, command: "info" }),
      tap((info) => {
        console.log(YAML.stringify(info.results));
      }),
    ]),
    DisplayAndThrow({ name: "Info" })
  )(infra);

exports.init = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    DoCommand({ commandOptions, programOptions, command: "init" }),
    DisplayAndThrow({ name: "Init" })
  )(infra);

exports.unInit = async ({ infra, commandOptions = {}, programOptions = {} }) =>
  tryCatch(
    DoCommand({ commandOptions, programOptions, command: "unInit" }),
    DisplayAndThrow({ name: "UnInit" })
  )(infra);

//TODO move to ProviderGru
exports.graph = async ({ infra, config, commandOptions = {} }) =>
  tryCatch(
    pipe([
      () => infra,
      setupProviders({ commandOptions }),
      tap((input) => {
        logger.debug(`graph`, config);
        assert(input.providersGru);
      }),
      ({ providersGru }) => providersGru.getProviders(),
      map(
        tryCatch(
          (provider) => provider.graph({ options: commandOptions }),
          (error, provider) => {
            return { error, provider: provider.toString() };
          }
        )
      ),
      tap((result) => {
        logger.debug(`graph done`);
      }),
      // TODO add title from config.projectName
      (results) => `digraph graphname {
rankdir=LR;
${results.join("\n")}
}`,
      tap((result) => fs.writeFileSync(commandOptions.file, result)),
      tap((result) => {
        console.log(`dot file written to: ${commandOptions.file}`);
      }),
      tap((result) => {
        const { type } = commandOptions;
        const output = `${path.parse(commandOptions.file).name}.${type}`;
        const command = `dot  -T${type} ${commandOptions.file} -o ${output}`;

        const { stdout, stderr, code } = shell.exec(command, {
          silent: true,
        });
        if (code !== 0) {
          throw {
            message: `command '${command}' failed`,
            stdout,
            stderr,
            code,
          };
        }
        console.log(`output saved to: ${output}`);
      }),
    ]),
    DisplayAndThrow({ name: "graph" })
  )();
