// const models = require('../db/models')
const { httpStatusConstants, messageConstants } = require('../constants')
const services = require('../services/getFeaturesCategories.js')

// get features

const getFeatures = async (req, res) => {
try{
	const data = await services.getData()
	if(!data){
		return res.status(httpStatusConstants.NOT_FOUND).json({
			message: messageConstants.categoriesFeaturesNotFound
		})
	}

	return res.status(httpStatusConstants.OK).json({
		message: messageConstants.success,
		data: data
		})
		

}catch(err){
res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
}
	
}

//  add features

const addFeatures = async (req, res) => {
	try{
	const featureData = {
	name: req.body.name
	}

	const feature = await services.addFeature(featureData)

	return res.status(httpStatusConstants.OK).json({
		message: messageConstants.success,
		data: feature
		})

	}catch(err){
	res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}

// add category

const addCateories = async (req, res) => {
	try{
	const categoryData = {
	name: req.body.name
	}

	const category = await services.addCategory(categoryData)

	return res.status(httpStatusConstants.OK).json({
		message: messageConstants.success,
		data: category
		})

	}catch(err){
	res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}


module.exports = {
getFeatures,
addFeatures,
addCateories
}