import * as messagesRepository from '../repositories/messagesRepository.js'
import * as messagesValidation from '../validations/messagesValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import InputsError from '../errors/InputsError.js'


const getMessagesList = async ({ user, limit }) => {
	if (limit) limit = Number(limit)

	const queryErrors = validationErrors({
		objectToValid: { limit },
		objectValidation: messagesValidation.limitSchema
	})

	if (queryErrors) throw new InputsError(queryErrors)

	const messages = await (await messagesRepository.findMessages({ user, limit }))

	return messages
}


const serviceFunction = async (exampleInfo) => {
	const exampleErrors = validationErrors({
		objectToValid: exampleInfo,
		objectValidation: messagesValidation.messageSchema
	})

	if (exampleErrors) throw new InputsError(exampleErrors)

	const result = await messagesRepository.repositoryFunction(exampleInfo)

	return result
}



export {
	getMessagesList,
	serviceFunction,
}
