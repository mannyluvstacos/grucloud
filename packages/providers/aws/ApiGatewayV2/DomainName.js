const assert = require("assert");
const { pipe, tap, get, eq, tryCatch, switchCase, pick } = require("rubico");
const { pluck, defaultsDeep, includes } = require("rubico/x");
const logger = require("@grucloud/core/logger")({
  prefix: "DomainNameV2",
});

const { tos } = require("@grucloud/core/tos");
const { buildTagsObject } = require("@grucloud/core/Common");
const { createEndpoint, shouldRetryOnException } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");
const { getField } = require("@grucloud/core/ProviderCommon");

const findId = get("live.DomainName");
const findName = get("live.DomainName");
const pickId = pick(["DomainName"]);

exports.DomainName = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const apiGateway = () =>
    createEndpoint({ endpointName: "ApiGatewayV2" })(config);

  const findDependencies = ({ live, lives }) => [
    {
      type: "Certificate",
      group: "ACM",
      ids: pipe([
        () => live,
        get("DomainNameConfigurations"),
        pluck("CertificateArn"),
        tap((params) => {
          assert(true);
        }),
      ])(),
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getDomainNames-property
  const getList = client.getList({
    method: "getDomainNames",
    getParam: "Items",
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getDomainName-property
  const getById = client.getById({
    pickId,
    method: "getDomainName",
    ignoreErrorCodes: ["NotFoundException"],
  });

  const getByName = ({ name: DomainName }) => getById({ DomainName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createDomainName-property
  const create = client.create({
    method: "createDomainName",
    shouldRetryOnException: ({ error }) =>
      pipe([
        tap(() => {
          logger.error(`create domainName isExpectedException ${tos(error)}`);
        }),
        () => ["UnsupportedCertificate", "BadRequestException"],
        includes(error.code),
      ])(),
    pickCreated:
      ({ payload }) =>
      (result) =>
        pipe([() => result])(),
    pickId,
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#deleteDomainName-property
  const update = client.update({
    pickId,
    method: "deleteDomainName",
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#deleteDomainName-property
  const destroy = client.destroy({
    pickId,
    method: "deleteDomainName",
    getById,
    ignoreError: eq(get("code"), "NotFoundException"),
    config,
  });

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { certificate },
  }) =>
    pipe([
      tap(() => {
        assert(certificate, "missing 'certificate' dependency");
      }),
      () => properties,
      defaultsDeep({
        DomainName: name,
        DomainNameConfigurations: [
          {
            CertificateArn: getField(certificate, "CertificateArn"),
          },
        ],
        Tags: buildTagsObject({ config, namespace, name }),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    create,
    update,
    destroy,
    getByName,
    getById,
    getList,
    configDefault,
    shouldRetryOnException,
    findDependencies,
  };
};
