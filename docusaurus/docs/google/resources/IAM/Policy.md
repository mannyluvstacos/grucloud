---
id: Policy
title: Policy
---

Provides a IAM Policy for a project.

```js
const iamPolicy = provider.iam.makePolicy({
  name: "iam-policy",
  properties: () => ({
    policy: {
      bindings: [
        {
          role: "roles/editor",
          members: ["user:jane@example.com"],
        },
      ],
    },
  }),
});
```

### Examples

- [basic example](https://github.com/grucloud/grucloud/blob/main/examples/google/iam/iac.js#L7)

### Properties

- [all properties](https://cloud.google.com/compute/docs/reference/rest/v1/addresses/insert#request-body)

### Used By

- [ServiceAccount](./ServiceAccount.md)
