import * as participantsService from '../services/participantsService.js'

import errorsName from '../utils/errorsName.js'


// const getParticipants = async (req, res, next) => {
// 	const { body: participantInfo } = req

// 	try {
// 		const participant = await participantsService.serviceFunction(participantInfo)
		
// 		return res.status(201).send(participant)

// 	} catch (error) {
// 		const { name: errorName, message, status } = error

// 		if (errorName === 'InputsError') return res.status(status).send(message)
		
// 		next(error)
// 	}
// }

const addParticipant = async (req, res, next) => {
	const { body: participantInfo } = req

	try {
		const participant = await participantsService
			.serviceFunction(participantInfo)
		
		return res.status(201).send(participant)

	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorsName.includes(errorName)) return res.status(status).send(message)
		
		next(error)
	}
}


export {
	// getParticipants,
	addParticipant,
}
