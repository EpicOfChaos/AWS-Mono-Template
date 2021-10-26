import * as cdk from '@aws-cdk/core'
import { AppServices } from './services'

export class AwsMonoTemplateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new AppServices(this, 'Services')
  }
}
