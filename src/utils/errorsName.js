const errorsName = [
	'InputsError',
	'ConflictParticipantError',
	'ReservedWordNameError',
	'MessageTypeError',
	'NoSenderError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
