import errorsName from '../utils/errorsName.js'


const backMiddlewareError = (err, req, res, next) => {
	const { name: errorName, message, status } = err

	if (errorsName.includes(errorName)) return res.status(status).send(message)
	
	next(err)
}


export default backMiddlewareError
