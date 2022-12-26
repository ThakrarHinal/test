const { Joi } = require('celebrate')

const productSchema = {
	body:
	 // Joi.object().keys(
	{
		name: Joi.string().required(),
		price: Joi.string().required(),
		manufacturer: Joi.string().required(),
		date: Joi.date().required(),
		height: Joi.number().allow(null, ''),
		weight: Joi.number().allow(null, ''),
		diameter: Joi.number().allow(null, ''),
		length: Joi.number().allow(null, ''),
		size: Joi.string().allow(null, ''),
		unit: Joi.string().allow(null, '')
	}
	// )
}

module.exports = {
	productSchema
}