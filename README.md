# Welcome to your CDK TypeScript project!

This is a demo project for TypeScript development with CDK.

Entrypoint is in bin
It has 3 stacks in lib - 
Network stack : Creates the base networking infrastructure
Apple Microservice : Creates simple EC2 into the VPC (created by network stack)
Blueberry Microservice : Create EKS cluster on with EC2 and ELB. This is then used by the AWS-CDK8s-demo. 

aws-cdk-demo-stack : It is a blank template.

You can find the PPT of my session at https://www.slideshare.net/rohinigaonkar/infrastructure-as-code-with-aws-cloud-development-kit-cdk


The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
