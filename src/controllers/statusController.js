import * as statusService from '../services/statusService.js'


const keepUserAlive = async (req, res, next) => {
	const { headers: { user } } = req

	try {
		const participant = await statusService.handleUserStatus({ user })
		
		return res.status(200).send(participant)

	} catch (error) {		
		next(error)
	}
}

const disconnectParticipants = async () => {
	try {
		await statusService.removeParticipants()

	} catch (error) {
		console.log(`Disconnect participants error:\n  ${error}`)
	}
}


export {
	keepUserAlive,
	disconnectParticipants,
}
