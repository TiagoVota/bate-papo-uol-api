import * as participantsService from '../services/participantsService.js'


const getParticipants = async (req, res, next) => {
	try {
		const participants = await participantsService.listParticipants()
	
		return res.status(200).send(participants)

	} catch (error) {
		next(error)
	}
}

const addParticipant = async (req, res, next) => {
	const { body: participantInfo } = req

	try {
		const participant = await participantsService
			.addNewParticipant(participantInfo)
		
		return res.status(201).send(participant)

	} catch (error) {
		next(error)
	}
}


export {
	getParticipants,
	addParticipant,
}
