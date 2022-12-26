const services = require('../services/getFeaturesCategories.js')
const productServices = require('../services/productServices.js')

// jest.mock('../db/models', () => () => {
// 	const sequelizeMock = require('sequelize-mock')
// 	const dbMock = new sequelizeMock()
// 	const mockFun = dbMock.define('features', {
// 		id: 4,
// 		featuresName: "storage",
// 		createdAt: "2022-12-16T00:00:00.000Z",
// 		updatedAt: "2022-12-16T00:00:00.000Z"
// 		})
// 	});	

describe("Testing function for get features and categories", () => {
		it('should return data of features', async() => {
			let data
			try{
				data = await services.getData({plain: true})
			}catch(err){
				return err
			}
			expect( data.features.length >= 1).toBe(true)
			expect( data.categories.length >= 1).toBe(true)
			expect( Object.keys(data.features[0])).toEqual([ 'id', 'featuresName', 'createdAt', 'updatedAt' ])
			expect( Object.keys(data.categories[0])).toEqual([ 'id', 'catagoryName', 'createdAt', 'updatedAt' ])
			});

		
		});

describe('Testing function for add product', () => {
	it('should have correct format of data',  async () => {
		const productDetails = {
			name: 'laptop2',
			price: 50000,
			manufacturer: 'bnmbm',
			date: '2020-02-20 00:00:00'
		}
		let productData
		try {
			productData = await productServices.addProduct(productDetails)
			// console.log('productData: ', productData)
		} catch (err) {
		 return err;
		}
		console.log(productData.expiryDate)
			expect(typeof productData.productName === 'string').toBe(true)
			expect(typeof productData.price === 'number').toBe(true)
			expect(typeof productData.manufacturer === 'string').toBe(true)
			// expect(productData.expiryDate).not.toBeNull()
		
		})

	})
