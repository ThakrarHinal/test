const express = require('express')
const router = require('./routes')
const database = require('./db/dbConfig.js')
const errorHandler = require('./apiResponseMiddleware/joiResponse.middleware.js')
const { errors } =require('celebrate')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorHandler)
app.use(errors())

app.listen(3000, () => {
	console.log('server is running on port 3000')
	})
