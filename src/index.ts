import dotenv from 'dotenv'
dotenv.config()

import { ListFunctionsCommand } from '@aws-sdk/client-lambda'
import { lambdaClient } from './AWSClients/lambdaClient'
import { log } from 'ads-mylog'
;(async () => {
	try {
		log.debug('trying get lambda functions')
		const cmd = new ListFunctionsCommand({})
		const res = await lambdaClient.send(cmd)
		res.Functions?.map((lf) =>
			log.debug(JSON.stringify(lf.Environment?.Variables, null, 4))
		)
	} catch (err) {
		log.error(err)
	}
})()
