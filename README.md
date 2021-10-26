# AWS-Mono-Template
## Description
This project is a can be used as a template for bootstrapping a [yarn workspace monorepo](https://classic.yarnpkg.com/en/docs/workspaces/) using [Typescript](https://www.typescriptlang.org/) and [AWS CDK](https://aws.amazon.com/cdk/). It contains a single AWS Lambda function *test-function* which contains a dependency on the *common* package.

## Project Organization

- **/AWS-Mono-Template** (Top-level)
    - **/infrastructure** (Workspace for the CDK infrastructure as code)
    - **/services** (Folder structure to add more services/functions. Each function will be treated as a seperate workspace.)
      - **/common** (Workspace for a common package to be used by your other services)
      - **/test-function** (Workspace for the test-function which is a "Hello World" function.)

## Getting Started
### Environment Setup
This project leans heavily on the AWS CDK and therefore pulls many of its dependencies from it. You need the following tools/services installed/setup.
1. Set up your [Amazon Web Service (AWS) account](https://aws.amazon.com/).
2. Create an [Administrator IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html), capture the CLI access tokens.
3. Install the [AWS CLI](https://aws.amazon.com/cli/) tool.
   1. > aws --version
4. Install [Node/NPM](https://nodejs.org/en/download/).
   1. > node --version
   2. > npm --version
5. Install [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install).
   1. > cdk --version
6. Install [AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) (SAM).
   1. > sam --version
7. Install [Docker](https://www.docker.com/get-started).
   1. > docker --version
8. Configure you AWS CLI with your stored Administrator token
   1. > aws configure
9. Install yarn globally
   1. > npm install yarn -g

### Setup Project
After you have your environment setup we need to install our projects dependencies.
> yarn install

After the dependencies are installed we are ready to deploy our AWS Lambda function using AWS CDK
> yarn deploy

This step will clean, build and deploy our application stack. Once complete you can log into your AWS account and browse the [CloudFormation stack](https://us-west-2.console.aws.amazon.com/cloudformation/home).

Once you are done testing you and remove the deployed resources from AWS by running the destory command.
> yarn destroy

## Using this project as a template
This project can be a starting point for new projects.
1. Copy project into new repo
2. Find and replace "aws-mono-template" throughout the project.