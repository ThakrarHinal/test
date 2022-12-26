const db = require('../db/dbConfig.js')

// add product

const addProduct = async (productDetails) => {
	
	try {
		const productData = new db.product({
			productName: productDetails.name,
			price: productDetails.price,
			manufacturer: productDetails.manufacturer,
			expiryDate: productDetails.date
		});
	
		await productData.save().then((result) => {
			const meassurementData = new db.meassurement({
				productId: result._id,
				height: productDetails.height,
				weight: productDetails.weight,
				diameter: productDetails.diameter,
				length: productDetails.length,
				size: productDetails.size,
				unit: productDetails.unit 
			});
			meassurementData.save()
		})
	} catch(err) {
		throw err;
	}
		
}	

// get product

const getProduct = async (
	page, size
) => {
	try{
		size = parseInt(size)
		let skip = (parseInt(page) - 1) * parseInt(size) 
		const products = await db.product.find().populate('meassurements').exec()
		
		return products
	}catch(err){
	return err
	}
}

// update product

const updateProduct = async (id, productDetails) => {
	try{
		const productData = await db.product.findOneAndUpdate(
			{_id: id}, 
			{
				$set: {
				productName: productDetails.name,
				price: productDetails.price,
				manufacturer: productDetails.manufacturer,
				expiryDate: productDetails.date
				}
			},
			{new: true},
		).then((result) => {
			return result
		})
		return productData
	}catch(err){
		return err
	}
}

const deleteProduct = async (id) => {
	try{
		const product = await db.product.findOneAndDelete({_id: id}).then((result) => {
			return result
		})
		return product
	}catch(err){
		return err
	}
}


module.exports = {
	addProduct,
	getProduct,
	updateProduct,
	deleteProduct
}