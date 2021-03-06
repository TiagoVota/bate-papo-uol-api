import * as participantsRepository from '../repositories/participantsRepository.js'
import * as messagesRepository from '../repositories/messagesRepository.js'
import * as messagesValidation from '../validations/messagesValidation.js'

import { validationErrors } from '../validations/handleValidation.js'
import { makeMessage } from '../helpers/messagesHelper.js'
import { isValidMessageType } from '../utils/messagesTypes.js'

import InputsError from '../errors/InputsError.js'
import MessageTypeError from '../errors/MessageTypeError.js'
import NoUserError from '../errors/NoUserError.js'


const getMessagesList = async ({ user, limit }) => {
	if (limit) limit = Number(limit)

	const queryErrors = validationErrors({
		objectToValid: { limit },
		objectValidation: messagesValidation.limitSchema
	})

	if (queryErrors) throw new InputsError(queryErrors)

	const messages = await messagesRepository.findLastMessages({ user, limit })

	return messages
}


const postUserMessage = async (messageInfo) => {
	const messageErrors = validationErrors({
		objectToValid: messageInfo,
		objectValidation: messagesValidation.postMessageErrors
	})

	if (messageErrors) throw new InputsError(messageErrors)
	const { user, to, text, type } = messageInfo

	if (!isValidMessageType(type)) throw new MessageTypeError()

	const existentSender = await participantsRepository
		.findParticipant({ name: user })
	
	if (!existentSender) throw new NoUserError(user)

	const message = await messagesRepository.insertMessage(makeMessage({
		from: user,
		to,
		text,
		type,
		timestamp: Date.now()
	}))

	return message
}


export {
	getMessagesList,
	postUserMessage,
}
