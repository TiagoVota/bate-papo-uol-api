const messagesTypes = [
	'message',
	'private_message'
]

const isValidMessageType = type => messagesTypes.includes(type)


export {
	isValidMessageType,
}
