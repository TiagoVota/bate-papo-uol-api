class NoUserError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoUserError'
		this.message = `No existent "${message}" participant name!`
		this.status = 404
	}
}


export default NoUserError
