import * as messagesService from '../services/messagesService.js'


const getMessages = async (req, res, next) => {
	const {
		query: { limit },
		headers: { user }
	} = req

	try {
		const messages = await messagesService.getMessagesList({ user, limit })
		
		return res.status(200).send(messages)

	} catch (error) {
		next(error)
	}
}


const controllerFunction = async (req, res, next) => {
	const { body: exampleInfo } = req

	try {
		const result = await messagesService.serviceFunction(exampleInfo)
		
		return res.status(201).send(result)

	} catch (error) {
		next(error)
	}
}


export {
	getMessages,
	controllerFunction,
}
