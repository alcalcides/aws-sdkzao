import { LambdaClient } from '@aws-sdk/client-lambda'
import { AWSProfile } from '../AWSProfile'

export const lambdaClient = new LambdaClient({ region: AWSProfile.AWS_REGION })
