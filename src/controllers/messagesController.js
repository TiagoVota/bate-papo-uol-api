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


const postMessage = async (req, res, next) => {
	const {
		body: messageInfo,
		headers: { user }
	} = req

	try {
		const message = await messagesService.postUserMessage({ ...messageInfo, user })
		
		return res.status(201).send(message)

	} catch (error) {
		next(error)
	}
}


export {
	getMessages,
	postMessage,
}
