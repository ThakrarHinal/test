const { httpStatusConstants, messageConstants } = require('../constants')
const productService = require('../services/productServices.js')

// add product

const addProduct = async (req, res) => {
	try{
	const productData = {
	name: req.body.name,
	price: req.body.price,
	manufacturer: req.body.manufacturer,
	date: req.body.date,
	height: req.body.height,
	weight: req.body.weight,
	diameter:req.body.diameter,
	length: req.body.length,
	size: req.body.size,
	unit: req.body.unit
	}

	const product = await productService.addProduct(productData)

	return res.status(httpStatusConstants.OK).json({
		message: messageConstants.success,
		data: product
		})

	}catch(err){
	res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}

// get product

const getProductData = async (req, res) => {
	try{
		const {	page, size } = req.query
		const products = await productService.getProduct(page, size)
		if(!products){
		return res.status(httpStatusConstants.NOT_FOUND).json({
			message: messageConstants.productsNotFound
		})
	}

	return res.status(httpStatusConstants.OK).json({
		message: messageConstants.success,
		data: products
		})
	}catch(err){
	res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}

// update product

const updateProductData = async (req, res) => {
	try{
		const id = req.params.id
		const product = {
			name: req.body.name,
			price: req.body.price,
			manufacturer: req.body.manufacturer,
			date: req.body.date
			}

		const productData = await productService.updateProduct(id, product)
		if(!productData){
			return res.status(httpStatusConstants.NOT_FOUND).json({
				message: messageConstants.productsNotFound
			})
		}
		return res.status(httpStatusConstants.OK).json({
			message: messageConstants.success,
			data: productData
			})
	}catch(err){
		res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}

const deleteProduct = async (req, res) => {
	try{
		const id = req.params.id
		const deleteProduct = await productService.deleteProduct(id)
		if(!deleteProduct){
			return res.status(httpStatusConstants.NOT_FOUND).json({
				message: messageConstants.productsNotFound
			})
		}
		return res.status(httpStatusConstants.OK).json({
			message: messageConstants.success
			})
	}catch(err){
		res.status(httpStatusConstants.INTERNAL_SERVER_ERROR).json({message: messageConstants.fail})
	}
}

module.exports = {
	addProduct,
	getProductData,
	updateProductData,
	deleteProduct
}