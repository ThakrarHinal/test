const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/inventory_management'

mongoose.connect(url, { useNewUrlParser: true })
.then(() => {
    console.log('connected')
})

const productScheema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    meassurements: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'meassurement'
    },
    expiryDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
})

const featureScheema = mongoose.Schema({
    featureName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
})

const categoryScheema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    }
})

const meassurementSceema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    diameter: {
        type: Number
    },
    length: {
        type: Number
    },
    size: {
        type: String
    },
    unit: {
        type: String
    }
})

const product = new mongoose.model('Product', productScheema)

const feature = new mongoose.model('Feature', featureScheema)

const category = new mongoose.model('Category', categoryScheema)

const meassurement = new mongoose.model('meassurement', meassurementSceema) 

module.exports = {
    product,
    feature,
    category,
    meassurement
}