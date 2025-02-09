const assert = require("assert");
const { pipe, fork, tap, get, map, not } = require("rubico");
const { defaultsDeep, flatten, values, includes } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { createEndpoint, shouldRetryOnException } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");

const findName = () => "default";
const findId = findName;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
exports.Account = ({ spec, config }) => {
  const client = AwsClient({ spec, config });

  const apiGateway = () =>
    createEndpoint({ endpointName: "APIGateway" })(config);

  const findDependencies = ({ live }) => [
    { type: "Role", group: "IAM", ids: [live.cloudwatchRoleArn] },
  ];
  const isDefault = pipe([not(get("live.cloudwatchRoleArn"))]);
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getAccount-property
  const getAccount = () => pipe([() => ({}), apiGateway().getAccount])();

  const getList = () => pipe([getAccount, (account) => [account]])();
  const getByName = getAccount;
  const getById = getAccount;

  const create = pipe([
    tap((params) => {
      assert(false, "create should not be called");
    }),
  ]);

  const diffToPatch = ({ diff }) =>
    pipe([
      () => diff,
      fork({
        add: pipe([
          get("liveDiff.added", {}),
          map.entries(([key, value]) => [
            key,
            { op: "replace", path: `/${key}`, value },
          ]),
          values,
        ]),
        replace: pipe([
          get("liveDiff.updated", {}),
          map.entries(([key, value]) => [
            key,
            { op: "replace", path: `/${key}`, value: `${value.toString()}` },
          ]),
          values,
        ]),
      }),
      values,
      flatten,
      tap((params) => {
        assert(true);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#updateAccount-property
  const update = client.update({
    pickId: () => ({}),
    filterParams: ({ payload, live, diff }) =>
      pipe([
        tap((params) => {
          assert(diff);
        }),
        () => ({
          patchOperations: diffToPatch({ diff, live, payload }),
        }),
      ])(),
    method: "updateAccount",
    shouldRetryOnException: ({ error }) =>
      pipe([
        () => error,
        get("message"),
        includes(
          "The role ARN does not have required permissions configured. Please grant trust permission for API Gateway and add the required role policy."
        ),
      ])(),
    config,
    getById,
  });

  const destroy = pipe([
    () => ({
      patchOperations: [
        { op: "replace", path: "/cloudwatchRoleArn", value: "" },
      ],
    }),
    apiGateway().updateAccount,
  ]);

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { cloudwatchRole },
  }) =>
    pipe([
      () => properties,
      defaultsDeep({
        ...(cloudwatchRole && {
          cloudwatchRoleArn: getField(cloudwatchRole, "Arn"),
        }),
      }),
    ])();

  return {
    spec,
    findId,
    findDependencies,
    getByName,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
    isDefault,
    managedByOther: isDefault,
  };
};
