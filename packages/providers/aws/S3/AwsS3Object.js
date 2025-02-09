const assert = require("assert");
const fs = require("fs").promises;
const path = require("path");
const {
  map,
  filter,
  pipe,
  not,
  tap,
  tryCatch,
  switchCase,
  fork,
  get,
  any,
  eq,
  pick,
} = require("rubico");
const {
  append,
  defaultsDeep,
  isEmpty,
  callProp,
  includes,
  flatten,
  unless,
} = require("rubico/x");
const logger = require("@grucloud/core/logger")({ prefix: "S3Object" });
const { retryCall } = require("@grucloud/core/Retry");
const {
  S3New,
  shouldRetryOnException,
  findNamespaceInTags,
} = require("../AwsCommon");

const { AwsClient } = require("../AwsClient");

const { tos } = require("@grucloud/core/tos");
const {
  convertError,
  mapPoolSize,
  md5FileBase64,
} = require("@grucloud/core/Common");

const tagsSerialize = pipe([
  map(({ Key, Value }) => `${Key}=${Value}`),
  callProp("join", "&"),
]);

const buildTagsS3Object = ({
  config: {
    managedByKey,
    managedByValue,
    stageTagKey,
    createdByProviderKey,
    providerName,
    stage,
    projectName,
    projectNameKey,
    namespaceKey,
  },
  Tags = [],
  namespace = "",
}) =>
  pipe([
    () =>
      `${managedByKey}=${managedByValue}&${stageTagKey}=${stage}&${createdByProviderKey}=${providerName}&${namespaceKey}=${namespace}&${projectNameKey}=${projectName}`,
    unless(() => isEmpty(Tags), append(`&${tagsSerialize(Tags)}`)),
  ])();

exports.buildTagsS3Object = buildTagsS3Object;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
exports.AwsS3Object = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const clientConfig = { ...config, retryDelay: 2000, repeatCount: 5 };

  const s3 = S3New(config);

  const findName = get("live.Key");
  const findId = findName;

  const findNamespace = findNamespaceInTags(config);

  const findDependencies = ({ live }) => [
    {
      type: "Bucket",
      group: "S3",
      ids: pipe([() => live, get("Bucket"), (bucket) => [bucket]])(),
    },
  ];

  const getBucket = ({ name, dependencies }) => {
    assert(name);
    assert(dependencies, "missing dependencies");
    const { bucket } = dependencies();
    if (!bucket) {
      throw {
        code: 422,
        message: `s3 object '${name}' is missing the bucket dependency'`,
      };
    }
    return bucket;
  };

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjects-property
  const getList = ({ resources = [], lives } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList s3 #resources ${resources.length}`);
        assert(lives);
      }),
      () =>
        lives.getByType({
          type: "Bucket",
          group: "S3",
          providerName: config.providerName,
        }),
      map.pool(mapPoolSize, (bucket) =>
        pipe([
          () =>
            s3().listObjectsV2({
              Bucket: bucket.name,
              MaxKeys: 1e3,
            }),
          get("Contents"),
          map.pool(mapPoolSize, ({ Key }) =>
            getByKey({ Key, Bucket: bucket.name })
          ),
        ])()
      ),
      flatten,
      filter(not(isEmpty)),
      tap.if(any(get("error")), (objects) => {
        throw { code: 500, errors: objects };
      }),
    ])();

  const getByKey = ({ Key, Bucket }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${JSON.stringify({ Key, Bucket })}`);
        assert(Key);
        assert(Bucket);
      }),
      () => ({ Key, Bucket }),
      tryCatch(
        pipe([
          fork({
            ACL: pipe([s3().getObjectAcl, pick(["Grants", "Owner"])]),
            signedUrl: pipe([
              (params) => s3().getSignedUrl("getObject", params),
            ]),
            content: pipe([s3().headObject]),
            Tags: pipe([
              //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObjectTagging-property
              s3().getObjectTagging,
              get("TagSet"),
            ]),
          }),
          ({ content, ...others }) => ({
            Bucket,
            Key,
            ...content,
            ...others,
          }),
          tap((params) => {
            assert(true);
          }),
        ]),
        (error) =>
          pipe([
            () => ["NoSuchBucket", "NoSuchKey", "NotFound"],
            switchCase([
              includes(error.code),
              () => null,
              () =>
                pipe([
                  tap(() => {
                    logger.debug(
                      `getByName error ${Bucket}/${Key}: ${tos(error)}`
                    );
                  }),
                  () => ({
                    Bucket,
                    Key,
                    error: convertError({ error }),
                  }),
                ])(),
            ]),
          ])()
      ),
      tap((result) => {
        logger.debug(`getByName result: ${tos(result)}`);
      }),
    ])();

  const getByName = ({ name, dependencies }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${name}`);
      }),
      () => getBucket({ dependencies, name }),
      (bucket) => ({
        Bucket: bucket.name,
        Key: name,
      }),
      getByKey,
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#headObject-property
  const headObject = ({ Bucket, Key }) =>
    pipe([
      tap(() => {
        assert(Bucket, "headObject Bucket");
        assert(Key, "headObject Key");
      }),
      () => ({ Bucket, Key }),
      tryCatch(
        pipe([s3().headObject, () => true]),
        switchCase([
          eq(get("statusCode"), 404),
          () => false,
          () => {
            logger.error(`headObject ${JSON.stringify({ Bucket, Key })}`);
            logger.error(error);
            throw error;
          },
        ])
      ),
    ])();

  const isUpById = pipe([headObject, not(isEmpty)]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  const create = ({
    name,
    namespace,
    payload: { source, ...otherProperties },
    dependencies,
    programOptions,
  }) =>
    pipe([
      tap(() => {
        logger.info(`create ${tos(name)}`);
        assert(name);
        assert(dependencies);
        assert(programOptions);
      }),
      () => getBucket({ dependencies, name }),
      (bucket) =>
        pipe([
          () => path.resolve(programOptions.workingDirectory, source),
          tap((fullPath) => {
            logger.debug(`create s3 object from file: '${fullPath}'`);
          }),
          fork({
            Body: fs.readFile,
            ContentMD5: md5FileBase64,
          }),
          pipe([
            ({ Body, ContentMD5 }) => ({
              ...otherProperties,
              Body,
              ContentMD5,
              Metadata: {
                md5hash: ContentMD5,
              },
            }),
            (params) =>
              retryCall({
                name: `s3 putObject: ${name}`,
                fn: () => s3().putObject(params),
                shouldRetryOnException,
                config,
              }),
            tap(() =>
              retryCall({
                name: `s3 isUpById: ${bucket.name}/${name}`,
                fn: () => isUpById({ Bucket: bucket.name, Key: name }),
                config: clientConfig,
              })
            ),
            tap((result) => {
              logger.info(`created object: ${tos(result)}`);
            }),
          ]),
        ])(),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
  const destroy = ({ live }) =>
    pipe([
      () => live,
      pick(["Bucket", "Key"]),
      tap((params) => {
        logger.info(`destroy s3 object ${JSON.stringify(params)}`);
      }),
      tryCatch(
        s3().deleteObject,
        switchCase([
          eq(get("code"), "NoSuchBucket"),
          () => undefined,
          (error) => {
            throw error;
          },
        ])
      ),
    ])();

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { bucket },
  }) =>
    pipe([
      tap(() => {
        assert(bucket, `missing bucket dependency on S3Object '${name}'`);
        assert(
          otherProps.source,
          `missing source attribute on S3Object '${name}'`
        );
      }),
      () => otherProps,
      defaultsDeep({
        Bucket: bucket.config.Bucket,
        Key: name,
        Tagging: buildTagsS3Object({ config, namespace, Tags }),
      }),
    ])();

  return {
    spec,
    config: clientConfig,
    findNamespace,
    findId,
    findDependencies,
    getByName,
    findName,
    create,
    update: create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};

exports.compareS3Object = pipe([
  tap((params) => {
    assert(true);
  }),
  fork({
    liveHash: pipe([
      get("live.Metadata.md5hash"),
      tap((liveHash) => {
        assert(liveHash);
      }),
    ]),
    targetHash: ({ target, programOptions }) =>
      pipe([
        tap(() => {
          assert(programOptions.workingDirectory);
          assert(target.source, "missing source");
        }),
        () => path.resolve(programOptions.workingDirectory, target.source),
        md5FileBase64,
        tap((targetHash) => {
          assert(targetHash);
        }),
      ])(),
  }),
  switchCase([
    ({ liveHash, targetHash }) => liveHash != targetHash,
    ({ liveHash, targetHash }) => ({
      liveDiff: { updated: { md5: liveHash } },
      targetDiff: { updated: { md5: targetHash } },
    }),
    () => ({}),
  ]),
  tap((params) => {
    assert(true);
  }),
]);
