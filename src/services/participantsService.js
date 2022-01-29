import * as participantsRepository from '../repositories/participantsRepository.js'
import * as messagesRepository from '../repositories/messagesRepository.js'
import * as participantsValidation from '../validations/participantsValidation.js'

import { validationErrors } from '../validations/handleValidation.js'
import { isReservedWord } from '../utils/reservedWords.js'
import { makeEntryMessage } from '../helpers/messagesHelper.js'

import InputsError from '../errors/InputsError.js'
import ConflictParticipantError from '../errors/ConflictParticipantError.js'
import ReservedWordNameError from '../errors/ReservedWordNameError.js'


const addNewParticipant = async (participantInfo) => {
	const participantErrors = validationErrors({
		objectToValid: participantInfo,
		objectValidation: participantsValidation.participantSchema
	})

	if (participantErrors) throw new InputsError(participantErrors)

	const { name } = participantInfo

	if (isReservedWord(name)) throw new ReservedWordNameError(name)

	const lastStatus = Date.now()
	const existentParticipant = await participantsRepository
		.findParticipant({ name })
	
	if (existentParticipant) throw new ConflictParticipantError(name)

	const participant = await participantsRepository
		.insertParticipant({ name, lastStatus })
	
	await messagesRepository.insertMessage(makeEntryMessage({
		name,
		timestamp: lastStatus
	}))

	return participant
}


const listParticipants = async () => {
	const participants = await participantsRepository.findParticipants()

	return participants
}




export {
	addNewParticipant,
	listParticipants,
}
