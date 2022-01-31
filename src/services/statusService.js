import * as participantsRepository from '../repositories/participantsRepository.js'

import NoUserError from '../errors/NoUserError.js'


const handleUserStatus = async ({ user }) => {

	const existentUser = await participantsRepository
		.findParticipant({ name: user })

	if (!existentUser) throw new NoUserError(user)
		
	const participant = await participantsRepository
		.updateLastStatus({ name: user, lastStatus: Date.now() })

	return participant
}



export {
	handleUserStatus,
}
