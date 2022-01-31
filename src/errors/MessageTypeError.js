class MessageTypeError extends Error {
	constructor(message) {
		super(message)
		this.name = 'MessageTypeError'
		this.message = 'Only "message" and "private_messa" are acceptable type!'
		this.status = 422
	}
}


export default MessageTypeError
