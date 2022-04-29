const { Router } = require('express')
const { addProduct } = require('../controllers/productController')

const router = Router()

router.post('/new', addProduct)

module.exports = router