import * as cdk from '@aws-cdk/core'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import * as path from 'path'
import { NodejsServiceFunction } from '../constructs/lambda'

export class AppServices extends cdk.Construct {
  public readonly testFunction: NodejsFunction
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id)

    this.testFunction = new NodejsServiceFunction(this, 'TestFunctionLambda', {
      entry: path.join(__dirname, '../../../services/test-function/dist/index.js'),
    })
  }
}
