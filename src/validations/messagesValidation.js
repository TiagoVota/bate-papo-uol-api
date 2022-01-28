import joi from 'joi'


const messageSchema = joi.object({
	name: joi.string().required()
}).length(1)


export {
	messageSchema,
}
