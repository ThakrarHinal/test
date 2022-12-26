const featuresRoute = require('./features.js')
const productRoute = require('./product.js')
const express = require('express')
const router = express.Router()

router.use(featuresRoute)

router.use(productRoute)

module.exports = router