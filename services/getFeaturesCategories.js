// const db = require('../db/models')
const db = require('../db/dbConfig.js')

const addFeature = async (featureDetails) => {
	
	try {
		const featureData = new db.feature({
			featureName: featureDetails.name
		});
		await featureData.save()
	} catch(err) {
		throw err;
	}
		
}	

const addCategory = async (categoryDetails) => {
	
	try {
		const categoryData = new db.category({
			categoryName: categoryDetails.name
		});
		await categoryData.save()
	} catch(err) {
		throw err;
	}
		
}	

// get features and categories

const getData = () => {
	return new Promise(async (resolve, reject) => {
			try{
			const features = await db.feature.find({})
			const categories = await db.category.find()


			const data = {
			features,
			categories
			}

			resolve(data)

			}catch(err){
			reject(err)
			}
	
		})
}


module.exports = {
	getData,
	addFeature,
	addCategory
}