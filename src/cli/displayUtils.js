const assert = require("assert");
const Table = require("cli-table3");
const colors = require("colors/safe");
const YAML = require("./json2yaml");
const {
  switchCase,
  pipe,
  tap,
  map,
  reduce,
  filter,
  not,
  get,
  eq,
} = require("rubico");
const { isEmpty, forEach, pluck, size, find } = require("rubico/x");

const { planToResourcesPerType } = require("../providers/Common");

const hasPlan = (plan) => !isEmpty(plan.newOrUpdate) || !isEmpty(plan.destroy);

const displayResource = (item) =>
  item.config != null ? YAML.stringify(item.config) : undefined;

const displayManagedByUs = (resource) =>
  resource.managedByUs ? colors.green("Yes") : colors.red("NO");

// TODO
const displayItem = (table, item) =>
  switchCase([
    () => item.error,
    () => {
      table.push(["Error", item.action, "", item.error.message]);
    },
    () =>
      table.push([
        item.resource?.name,
        item.action,
        item.resource?.type,
        displayResource(item),
      ]),
  ])();

exports.displayListSummary = pipe([
  tap((result) => {
    console.log("List Summary:");
  }),
  forEach(({ provider, result }) => {
    const table = new Table({
      colWidths: tableSummaryDefs.colWidths({
        columns: process.stdout.columns || 80,
      }),
      style: { head: [], border: [] },
    });
    table.push([
      {
        colSpan: 2,
        content: colors.yellow(`${provider.name}`),
      },
    ]);

    return pipe([
      tap((results) => {
        //console.log(`Provider: ${provider.name}`);
      }),
      filter(not(get("error"))),
      forEach(({ type, resources }) => {
        table.push([
          {
            content: type,
          },
          { content: pluck("displayName")(resources).join("\n") },
        ]);
      }),
      tap(() => {
        console.log(table.toString());
      }),
    ])(result.results);
  }),
]);

const displayResourcePerType = ({
  table,
  title,
  providerName,
  plans,
  colorName,
}) =>
  tap.if(
    not(isEmpty),
    pipe([
      tap(() =>
        table.push([
          {
            colSpan: 2,
            content: colors[colorName]["bold"](title),
          },
        ])
      ),
      () =>
        planToResourcesPerType({
          providerName,
          plans,
        }),
      map((resourcesPerType) =>
        table.push([
          {
            content: `${colors[colorName]["bold"](resourcesPerType.type)}`,
          },
          {
            content: pipe([
              pluck("displayName"),
              (names) => names.join(", "),
              (names) => colors[colorName](names),
            ])(resourcesPerType.resources),
          },
        ])
      ),
    ])
  )(plans);

exports.displayPlanSummary = pipe([
  map(({ provider, resultQuery }) =>
    pipe([
      () =>
        new Table({
          colWidths: tableSummaryDefs.colWidths({
            columns: process.stdout.columns || 80,
          }),
          wordWrap: true,
          style: { head: [], border: [] },
        }),
      tap((table) =>
        table.push([
          {
            colSpan: 2,
            content: colors.yellow(
              `Plan summary for provider ${provider.name}`
            ),
          },
        ])
      ),
      tap((table) =>
        displayResourcePerType({
          table,
          providerName: provider.name,
          plans: resultQuery.resultCreate.plans,
          title: "DEPLOY RESOURCES",
          colorName: "brightGreen",
        })
      ),
      tap((table) =>
        displayResourcePerType({
          table,
          providerName: provider.name,
          plans: resultQuery.resultDestroy.plans,
          title: "DESTROY RESOURCES",
          colorName: "brightRed",
        })
      ),
      tap((table) => {
        console.log(table.toString());
      }),
    ])()
  ),
]);

exports.displayPlanDestroySummary = forEach(({ provider, result }) =>
  pipe([
    () =>
      new Table({
        colWidths: tableSummaryDefs.colWidths({
          columns: process.stdout.columns || 80,
        }),
        wordWrap: true,
        style: { head: [], border: [] },
      }),
    tap((table) =>
      displayResourcePerType({
        table,
        providerName: provider.name,
        plans: result.plans,
        title: `Destroy summary for provider ${provider.name}`,
        colorName: "brightRed",
      })
    ),
    tap((table) => {
      console.log(table.toString());
    }),
  ])()
);

const groupByType = (init = {}) =>
  reduce((acc, item) => {
    const type = item.resource?.type;
    if (!type) {
      return acc;
    } else if (acc[type]) {
      return {
        ...acc,
        [type]: [item, ...acc[type]],
      };
    } else {
      return { ...acc, [item.resource.type]: [item] };
    }
  }, init);

const tableSummaryDefs = {
  columns: ["Type", "Resoures"],
  colWidths: ({ columns }) => {
    const typeLength = 20;
    const resourceLength = columns - typeLength - 10;
    return [typeLength, resourceLength];
  },
  fields: [
    //
    (item) => item.resource.type,
    (item) => item.resource.name,
  ],
};

const tablePlanPerType = {
  columns: ["Name", "Action", "Data"],
  colWidths: ({ resources, columns }) => {
    const nameLength =
      computeLength({ field: "resource.displayName", maxLength: 40 })(
        resources
      ) + 2;
    const actionLength = 10;
    const dataLength = columns - nameLength - actionLength - 10;
    return [nameLength, actionLength, dataLength];
  },
  fields: [
    get("resource.displayName"),
    get("action"),
    switchCase([
      eq(get("action"), "UPDATE"),
      (item) => {
        const table = new Table({
          style: { head: [], border: [] },
        });
        table.push([
          {
            content: colors.yellow(`NEW`),
          },
        ]);
        table.push([
          {
            content: YAML.stringify(item.config),
          },
        ]);
        table.push([
          {
            content: colors.yellow(`LIVE`),
          },
        ]);
        table.push([
          {
            content: YAML.stringify(item.live),
          },
        ]);
        return table.toString();
      },
      (item) => YAML.stringify(item.config),
    ]),
  ],
};

exports.displayPlan = async (plan) => {
  assert(Array.isArray(plan.destroy, "Array.isArray(plan.destroy"));
  if (!hasPlan(plan)) {
    return plan;
  }

  assert(plan.providerName);
  pipe([
    () => groupByType({})(plan.newOrUpdate),
    (result) => groupByType(result)(plan.destroy),
    (result) =>
      map((type) => {
        const resources = result[type];
        const tableDefinitions = tablePlanPerType;
        const table = new Table({
          colWidths: tableDefinitions.colWidths({
            resources,
            columns: process.stdout.columns || 80,
          }),
          style: { head: [], border: [] },
        });
        table.push([
          {
            colSpan: 3,
            content: colors.yellow(
              `${resources.length} ${type} from ${plan.providerName}`
            ),
          },
        ]);
        table.push(tableDefinitions.columns.map((item) => colors.red(item)));

        resources.forEach((resource) =>
          displayLiveItem({ table, resource, tableDefinitions })
        );

        console.log(table.toString());
        console.log("\n");
      })(Object.keys(result)),
  ])();

  return plan;
};

const computeLength = ({ field, maxLength, minLength = 8 }) =>
  pipe([
    pluck(field),
    filter((name) => name),
    map(size),
    (lengths) => Math.max(...lengths),
    (max) => Math.min(maxLength, max),
    (min) => Math.max(min, minLength),
  ]);

const tablePerTypeDefinitions = [
  {
    type: "ServiceAccount",
    colWidths: ({ resources, columns }) => {
      const emailLength =
        computeLength({ field: "data.email", maxLength: 60 })(resources) + 2;
      const managedByUs = 6;
      const dataLength = columns - emailLength - managedByUs - 10;
      return [emailLength, dataLength, managedByUs];
    },
    columns: ["Email", "Data", "Our"],
    fields: [
      get("data.email"),
      pipe([get("data"), YAML.stringify]),
      displayManagedByUs,
    ],
  },
];

const tablePerTypeDefault = {
  columns: ["Name", "Data", "Our"],
  colWidths: ({ resources, columns }) => {
    const nameLength =
      computeLength({ field: "displayName", maxLength: 40 })(resources) + 2;
    const managedByUs = 6;
    const dataLength = columns - nameLength - managedByUs - 10;
    return [nameLength, dataLength, managedByUs];
  },
  fields: [
    get("displayName"),
    pipe([get("data"), YAML.stringify]),
    displayManagedByUs,
  ],
};

const displayLiveItem = ({ table, resource, tableDefinitions }) => {
  assert(resource);
  assert(tableDefinitions);
  table.push(tableDefinitions.fields.map((field) => field(resource)));
};

const displayTablePerType = ({
  providerName,
  resourcesByType: { type, resources = [], error },
}) => {
  assert(type);
  const tableDefinitions =
    find(eq(get("type")))(tablePerTypeDefinitions) || tablePerTypeDefault;

  const table = new Table({
    colWidths: tableDefinitions.colWidths({
      resources,
      columns: process.stdout.columns || 80,
    }),
    style: { head: [], border: [] },
  });

  table.push([
    {
      colSpan: 3,
      content: colors.yellow(
        `${resources.length} ${type} from ${providerName}`
      ),
    },
  ]);

  table.push(tableDefinitions.columns.map((item) => colors.red(item)));

  error &&
    table.push([
      {
        colSpan: 3,
        content: colors.red(
          `Error: ${error.name}: ${error.message}\n${error.stack}`
        ),
      },
    ]);

  resources.forEach((resource) =>
    displayLiveItem({ table, resource, tableDefinitions })
  );

  console.log(table.toString());
  console.log("\n");
};

exports.displayLive = async ({ providerName, targets }) => {
  assert(providerName);
  assert(targets);
  targets.forEach((resourcesByType) =>
    displayTablePerType({ providerName, resourcesByType })
  );
};
