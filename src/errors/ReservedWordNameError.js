class ReservedWordNameError extends Error {
	constructor(message) {
		super(message)
		this.name = 'ReservedWordNameError'
		this.message = `"${message}" is a reserved word!`
		this.status = 422
	}
}


export default ReservedWordNameError
