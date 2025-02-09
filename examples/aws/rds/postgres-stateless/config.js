const pkg = require("./package.json");
module.exports = ({ stage, region }) => ({
  projectName: pkg.name,
  RDS: {
    vpc: {
      name: "vpc-postgres-stateless",
    },
    subnet1: {
      name: "subnetA",
    },
    subnets: [
      {
        name: "subnet-1",
        properties: {
          CidrBlock: "192.168.0.0/19",
          AvailabilityZone: `${region}a`,
        },
      },
      {
        name: "subnet-2",
        properties: {
          CidrBlock: "192.168.32.0/19",
          AvailabilityZone: `${region}b`,
        },
      },
    ],
    subnetGroup: {
      name: "subnet-group-postgres-stateless",
      properties: {},
    },
    cluster: {
      name: "cluster-postgres-stateless",
      properties: {
        DatabaseName: "dev",
        Engine: "aurora-postgresql",
        EngineVersion: "10.14",
        EngineMode: "serverless",
        ScalingConfiguration: {
          MinCapacity: 2,
          MaxCapacity: 4,
        },
        MasterUsername: process.env.MASTER_USERNAME,
        MasterUserPassword: process.env.MASTER_USER_PASSWORD,
        PreferredBackupWindow: "01:39-02:09",
        PreferredMaintenanceWindow: "sun:00:47-sun:01:17",
      },
    },
    eip: { name: "eip-bastion" },
    ec2Instance: {
      name: "bastion",
      properties: () => ({
        InstanceType: "t2.micro",
      }),
    },
  },
  keyPair: { name: "kp-postgres-stateless" },
});
