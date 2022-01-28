class ConflictParticipantError extends Error {
	constructor(message) {
		super(message)
		this.name = 'ConflictParticipantError'
		this.message = `The name "${message}" is already being used!`
		this.status = 409
	}
}


export default ConflictParticipantError
