const assert = require("assert");
const { tap, pipe, assign, eq, get } = require("rubico");
const { defaultsDeep, find, when, isEmpty } = require("rubico/x");
const { detailedDiff } = require("deep-object-diff");
const { ResourceMaker } = require("./CoreResource");

const SpecDefault = ({ providerName }) => ({
  compare: detailedDiff,
  providerName,
  listOnly: false,
  isOurMinion: () => false,
  propertiesDefault: {},
  makeResource:
    ({ provider, spec, programOptions }) =>
    ({
      name,
      meta,
      namespace,
      config: configUser = {},
      dependencies,
      properties,
      attributes,
      filterLives,
    }) =>
      pipe([
        () =>
          ResourceMaker({
            name,
            meta,
            namespace,
            filterLives,
            properties,
            attributes,
            dependencies,
            spec,
            provider,
            config: defaultsDeep(provider.config)(configUser),
            programOptions,
          }),
        tap((resource) => provider.targetResourcesAdd(resource)),
      ])(),
  useResource:
    ({ provider, spec, programOptions }) =>
    ({
      name,
      meta,
      namespace,
      config: configUser = {},
      dependencies,
      properties,
      attributes,
      filterLives,
    }) =>
      pipe([
        () =>
          ResourceMaker({
            name,
            meta,
            namespace,
            filterLives,
            properties,
            attributes,
            dependencies,
            readOnly: true,
            spec: assign({ listOnly: () => true })(spec),
            provider,
            config: defaultsDeep(provider.config)(configUser),
            programOptions,
          }),
        tap((resource) => provider.targetResourcesAdd(resource)),
      ])(),
  useDefaultResource:
    ({ provider, spec, programOptions }) =>
    ({
      name,
      meta,
      namespace,
      config: configUser = {},
      dependencies,
      properties,
      attributes,
    }) =>
      pipe([
        () =>
          ResourceMaker({
            name,
            meta,
            namespace,
            filterLives: ({ resources }) =>
              pipe([
                () => resources,
                find(eq(get("isDefault"), true)),
                tap((live) => {
                  assert(live, `Cannot find default resource ${spec.type}`);
                }),
              ])(),
            properties,
            attributes,
            dependencies,
            readOnly: true,
            spec: assign({ listOnly: () => true })(spec),
            provider,
            config: defaultsDeep(provider.config)(configUser),
            programOptions,
          }),
        tap((resource) => provider.targetResourcesAdd(resource)),
      ])(),
});

exports.createSpec =
  ({ config, defaultOptions = { group: "" } }) =>
  (spec) =>
    pipe([
      () => spec,
      defaultsDeep(defaultOptions),
      assign({
        groupType: ({ group, type }) => `${group}::${type}`,
      }),
      defaultsDeep(SpecDefault(config)),
      tap((params) => {
        assert(true);
      }),
    ])();
