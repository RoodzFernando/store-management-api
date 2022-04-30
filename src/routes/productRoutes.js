const { Router } = require('express')
const { addProduct, checkout } = require('../controllers/productController')

const router = Router()

router.post('/new', addProduct)

router.post('/checkout', checkout)

module.exports = router