const express = require('express')
const { celebrate } = require('celebrate')
const route = express.Router()
const productController = require('../controller/productController.js')
const productValidation = require('../validations/productValidations.js')

route.post('/addProduct', celebrate(productValidation.productSchema), productController.addProduct)
route.get('/productDetails', productController.getProductData)
route.put('/updateProduct/:id', productController.updateProductData)
route.delete('/deleteProduct/:id', productController.deleteProduct)

module.exports = route