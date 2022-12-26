const express = require('express')
const route = express.Router()
const featuresController = require('../controller/featuresController.js')

route.get('/features', featuresController.getFeatures)
route.post('/addFeatures', featuresController.addFeatures)

module.exports = route