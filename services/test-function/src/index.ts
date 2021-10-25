import { log } from '@aws-mono-template/services-common'

export async function handler(event: { name: string }) {
  log('Received event:', JSON.stringify(event, null, 2))
  return `Hello World ${event.name}`
}
