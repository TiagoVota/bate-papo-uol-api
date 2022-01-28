import * as statusRepository from '../repositories/statusRepository.js'


const serviceFunction = async (exampleInfo) => {

	const result = await statusRepository.repositoryFunction(exampleInfo)

	return result
}



export {
	serviceFunction,
}
