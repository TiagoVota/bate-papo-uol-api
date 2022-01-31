class NoSenderError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoSenderError'
		this.message = `No existent "${message}" participant name!`
		this.status = 404
	}
}


export default NoSenderError
