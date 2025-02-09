---
id: EC2
title: Instance
---

Manages an EC2 instance resource, a.k.a virtual machine.

```js
const server = provider.EC2.makeInstance({
  name: "myserver",
  properties: () => ({
    InstanceType: "t2.micro",
    ImageId: "ami-0917237b4e71c5759", // Ubuntu 20.04
  }),
  dependencies: () => ({
    keyPair,
    subnet,
    securityGroups: [sg],
    iamInstanceProfile,
    volumes: [volume],
  }),
});
```

### Examples

- [one ec2](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-simple/iac.js)
- [ec2 with elastic ip address, key pair](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2/iac.js)
- [attached an EBS volume](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/volume/iac.js)
- [example with IAM](https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js)
- [full example](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js)

### Properties

- [properties list](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property)

### Dependencies

- [SecurityGroup](./SecurityGroup.md)
- [Subnet](./Subnet.md)
- [KeyPair](./KeyPair.md)
- [ElasticIpAddress](./ElasticIpAddress.md)
- [Volume](./Volume.md)
- [Image](./Image.md)
- [IamInstanceProfile](../IAM/InstanceProfile.md)

### Update

There are 2 kind of update depending on the attribute to modify:

- `Stop and Start`: The instance is stopped, the attribute is changed, the instance is started.
- `Destroy and Create`: The instance is destroyed and created with the new attributes.

| Attribute    |         Description         |      Update Kind |
| ------------ | :-------------------------: | ---------------: |
| ImageId      | The Amazon Managed Image Id | Destroy & Create |
| InstanceType |      The Instance Type      |     Stop & Start |
