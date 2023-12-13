const express = require('express')
const adminRouter = express.Router()
const productControllers = require('../controllers/productController')
const upload = require('../utils/fileUpload')

adminRouter.post('/productSubmit',upload.array('productImage',5),productControllers.addProduct)

adminRouter.get('/add-product',productControllers.addProductPage)



module.exports = adminRouter;