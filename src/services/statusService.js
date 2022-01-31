import * as participantsRepository from '../repositories/participantsRepository.js'
import * as messagesRepository from '../repositories/messagesRepository.js'

import { subtractSecondsTimestamp } from './service.dayjs.js'
import { makeMessage } from '../helpers/messagesHelper.js'

import NoUserError from '../errors/NoUserError.js'


const handleUserStatus = async ({ user }) => {
	const existentUser = await participantsRepository
		.findParticipant({ name: user })

	if (!existentUser) throw new NoUserError(user)
		
	const participant = await participantsRepository
		.updateLastStatus({ name: user, lastStatus: Date.now() })

	return participant
}


const removeParticipants = async () => {
	const timeLimit = subtractSecondsTimestamp(Date.now(), 10)

	const inactiveParticipants = await participantsRepository
		.findParticipantsBelowLastStatus({ timeLimit })
	
	if (!inactiveParticipants[0]) return

	const participantsIds = inactiveParticipants.map(({ _id }) => _id)

	await participantsRepository.deleteParticipantsByIdList({ participantsIds })
	
	const outMessages = inactiveParticipants.map(({ name }) => makeMessage({
		from: name,
		text: 'sai da sala...',
		time: Date.now()
	}))

	await messagesRepository.insertMessages({ messages: outMessages })
}


export {
	handleUserStatus,
	removeParticipants,
}
