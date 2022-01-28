import * as messagesRepository from '../repositories/messagesRepository.js'
import * as messagesValidation from '../validations/messagesValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import ExampleError from '../errors/ExampleError.js'


const serviceFunction = async (exampleInfo) => {
	const exampleErrors = validationErrors({
		objectToValid: exampleInfo,
		objectValidation: messagesValidation.messageSchema
	})

	if (exampleErrors) throw new ExampleError(exampleErrors)

	const result = await messagesRepository.repositoryFunction(exampleInfo)

	return result
}



export {
	serviceFunction,
}
