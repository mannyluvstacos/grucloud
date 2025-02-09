const assert = require("assert");
const {
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  eq,
  not,
  or,
  pick,
  map,
  omit,
} = require("rubico");
const {
  defaultsDeep,
  isEmpty,
  size,
  first,
  unless,
  prepend,
  includes,
} = require("rubico/x");

const logger = require("@grucloud/core/logger")({
  prefix: "EC2LaunchTemplate",
});
const { tos } = require("@grucloud/core/tos");
const {
  createEndpoint,
  shouldRetryOnException,
  buildTags,
  findValueInTags,
  findNamespaceInTagsOrEksCluster,
} = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");

const EC2Instance = require("./EC2Instance");

const findId = get("live.LaunchTemplateId");

const findNameEks = pipe([
  tap((params) => {
    assert(true);
  }),
  get("live"),
  findValueInTags({ key: "eks:nodegroup-name" }),
  unless(isEmpty, prepend("lt-")),
]);

const findName = (params) => {
  const fns = [findNameEks, get("live.LaunchTemplateName")];
  for (fn of fns) {
    const name = fn(params);
    if (!isEmpty(name)) {
      return name;
    }
  }
  assert(false, "should have a name");
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html

exports.EC2LaunchTemplate = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const ec2 = () => createEndpoint({ endpointName: "EC2" })(config);

  const managedByOther = pipe([
    get("live.CreatedBy"),
    includes("AWSServiceRoleForAmazonEKSNodegroup"),
  ]);

  const findDependencies = ({ live, lives }) => [
    {
      type: "KeyPair",
      group: "EC2",
      ids: [live.LaunchTemplateData.KeyName],
    },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: pipe([() => live, get("LaunchTemplateData.SecurityGroupIds")])(),
    },
    {
      type: "InstanceProfile",
      group: "IAM",
      ids: [
        pipe([() => live, get("LaunchTemplateData.IamInstanceProfile.Arn")])(),
        pipe([
          () => live,
          get("LaunchTemplateData.IamInstanceProfile.Name"),
          (name) =>
            lives.getByName({
              name,
              type: "InstanceProfile",
              group: "IAM",
              providerName: config.providerName,
            }),
          get("id"),
        ])(),
      ],
    },
  ];

  const findNamespace = findNamespaceInTagsOrEksCluster({
    config,
    key: "eks:cluster-name",
  });

  const notFound = or([
    eq(get("code"), "InvalidLaunchTemplateId.NotFound"),
    eq(get("code"), "InvalidLaunchTemplateName.NotFoundException"),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeLaunchTemplates-property
  const describeLaunchTemplates = pipe([
    tap((params) => {
      assert(true);
    }),
    ec2().describeLaunchTemplates,
    tap((params) => {
      assert(true);
    }),
    get("LaunchTemplates"),
    tap((launchTemplates) => {
      logger.debug(
        `describeLaunchTemplates #launchTemplates ${size(launchTemplates)}`
      );
    }),
    map((launchTemplate) =>
      pipe([
        () => launchTemplate,
        ({ LaunchTemplateId }) => ({
          LaunchTemplateId,
          Versions: ["$Latest"],
        }),
        tap((params) => {
          assert(true);
        }),
        ec2().describeLaunchTemplateVersions,
        tap((params) => {
          assert(true);
        }),
        get("LaunchTemplateVersions"),
        first,
        tap((params) => {
          assert(true);
        }),
        omit(["LaunchTemplateData.TagSpecifications"]),
        defaultsDeep(launchTemplate),
        tap((params) => {
          assert(true);
        }),
      ])()
    ),
  ]);

  const getList = pipe([
    tap((params) => {
      assert(true);
    }),
    () => ({}),
    describeLaunchTemplates,
    tap((params) => {
      assert(true);
    }),
  ]);

  const getByName = ({ name }) =>
    tryCatch(
      pipe([
        tap(() => {
          assert(name);
        }),
        () => ({ LaunchTemplateNames: [name] }),
        describeLaunchTemplates,
        tap((params) => {
          assert(true);
        }),
        first,
      ]),
      switchCase([
        notFound,
        () => undefined,
        (error) => {
          throw error;
        },
      ])
    )();

  const isUpByName = pipe([getByName, not(isEmpty)]);
  const isDownByName = pipe([getByName, isEmpty]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createLaunchTemplate-property
  const create = ({ payload, name, namespace }) =>
    pipe([
      () => payload,
      ec2().createLaunchTemplate,
      // tap(() =>
      //   retryCall({
      //     name: `createCluster isUpByName: ${name}`,
      //     fn: () => isUpByName({ name }),
      //   })
      // ),
    ])();

  // Update https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createLaunchTemplateVersion-property

  //TODO update
  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`update launchTemplate: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      omit(["TagSpecifications"]),
      ec2().createLaunchTemplateVersion,
      tap(() => {
        logger.info(`updated launchTemplate ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deleteLaunchTemplate-property
  const destroy = ({ live }) =>
    pipe([
      () => live,
      pick(["LaunchTemplateId"]),
      tap(({ LaunchTemplateId }) => {
        assert(LaunchTemplateId);
      }),
      tryCatch(pipe([ec2().deleteLaunchTemplate]), (error, params) =>
        pipe([
          tap(() => {
            logger.error(
              `error deleteLaunchTemplate ${tos({ params, error })}`
            );
          }),
          () => error,
          switchCase([
            notFound,
            () => undefined,
            () => {
              throw error;
            },
          ]),
        ])()
      ),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies,
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        LaunchTemplateName: name,
        TagSpecifications: [
          {
            ResourceType: "launch-template",
            Tags: buildTags({ config, namespace, name, UserTags: Tags }),
          },
        ],
      }),
      defaultsDeep({
        LaunchTemplateData: EC2Instance.configDefault({
          config,
          includeTags: false,
        })({
          name,
          namespace,
          properties: {},
          dependencies,
        }),
      }),
      tap((params) => {
        assert(true);
      }),
    ])();

  return {
    spec,
    findId,
    managedByOther,
    findNamespace,
    findDependencies,
    getByName,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};
