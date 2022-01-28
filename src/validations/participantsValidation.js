import joi from 'joi'


const participantSchema = joi.object({
	name: joi.string().required()
}).length(1)


export {
	participantSchema,
}
