const errorsName = [
	'InputsError',
	'ConflictParticipantError',
	'ReservedWordNameError',
	'MessageTypeError',
	'NoUserError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
