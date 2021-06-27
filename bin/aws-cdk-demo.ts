#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";

import { NetworkStack } from "../lib/Network-stack";
import { AppleMS } from "../lib/AppleMicroservice-stack";
import { BlueberryMS } from "../lib/BlueberryMicroservice-stack";

import { AwsCdkDemoStack } from "../lib/aws-cdk-demo-stack";

const app = new cdk.App();

// ## DEVELOPMENT ENVIRONMENT STACKS
// ### Infrastructure Network
const Dev_Network = new NetworkStack(app, "BaseDevNetwork", {
  envName: "dev-",
});

// ### APPLE Microservice - Launches EC2 instance in the Base Network VPC
new AppleMS(app, "Dev1-AppleMS", { parent: Dev_Network, envName: "dev1-" });

// ### BLUEBERRY Microservices - Launches EKS Cluster in the Base Network VPC
new BlueberryMS(app, "Dev2-BlueberryMS", {
  parent: Dev_Network,
  envName: "dev2-",
});

new AwsCdkDemoStack(app, "AwsCdkDemoStack", {
  //Blank template
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
