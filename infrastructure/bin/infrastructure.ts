import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {AwsMonoTemplateStack} from '../lib/core/index'

const app = new cdk.App();
new AwsMonoTemplateStack(app, 'AwsMonoTemplateStack');