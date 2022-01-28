import * as participantsRepository from '../repositories/participantsRepository.js'
import * as participantsValidation from '../validations/participantsValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import ExampleError from '../errors/ExampleError.js'


const serviceFunction = async (exampleInfo) => {
	const exampleErrors = validationErrors({
		objectToValid: exampleInfo,
		objectValidation: participantsValidation.exampleSchema
	})

	if (exampleErrors) throw new ExampleError(exampleErrors)

	const result = await participantsRepository.repositoryFunction(exampleInfo)

	return result
}



export {
	serviceFunction,
}
