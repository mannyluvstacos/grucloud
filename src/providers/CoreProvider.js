module.exports = CoreProvider = ({ name, type, engineResources, hooks }) => {
  const list = async () => {
    const lists = await Promise.all(
      engineResources.map(async (resource) => ({
        resource,
        data: await resource.engine.list(),
      }))
    );
    return lists;
  };

  const planFindDestroy = async (resources) => {
    console.log("planFindDestroy ", resources);
    const plans = (
      await Promise.all(
        engineResources.map(async ({ engine }) => {
          const hotResources = await engine.list();
          const resourcesName = resources.map((resource) => resource.name);
          const hasName = (names, nameToFind) =>
            names.some((name) => name === nameToFind);

          const plans = hotResources.filter(
            (hotResource) => !hasName(resourcesName, hotResource.name)
          );
          return plans;
        })
      )
    ).map((data) => ({
      action: "DESTROY",
      data: data,
    }));
    return plans;
  };

  if (hooks && hooks.init) {
    hooks.init();
  }

  return {
    name: () => name,
    type: () => type || name,
    hooks,
    planFindDestroy,
    list,
    engineByType: (type) => {
      const resourceEngine = engineResources.find((r) => r.type === type);
      if (!resourceEngine) {
        throw new Error(`Cannot find engine type: ${type}`);
      }
      return resourceEngine.engine;
    },
  };
};
