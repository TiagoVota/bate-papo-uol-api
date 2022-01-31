import joi from 'joi'


const limitSchema = joi.object({
	limit: joi.alternatives().try(
		joi.number().integer().min(1),
		joi.string()
	)
}).max(1)

const postMessageErrors = joi.object({
	user: joi.string().required(),
	to: joi.string().required(),
	text: joi.string().required(),
	type: joi.string().required()
}).max(4)


export {
	limitSchema,
	postMessageErrors,
}
