const { isCelebrateError } = require('celebrate')

const errorHandler = (error, req, res, next) => {
	if (isCelebrateError(error)){
		const { details } = error.details.get('body')
			const message = details.map((result) => {
				return result.message
				})
	if(details){
		res.send(message)
		}
	}
	if(!isCelebrateError(error)){
			next(error)
		}
}

module.exports = errorHandler