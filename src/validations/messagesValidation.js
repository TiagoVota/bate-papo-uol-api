import joi from 'joi'


const limitSchema = joi.object({
	limit: joi.alternatives().try(
		joi.number().integer().min(1),
		joi.string()
	)
}).max(1)


export {
	limitSchema,
}
