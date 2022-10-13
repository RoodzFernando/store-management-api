const { Router } = require('express')
const { addProduct, checkout } = require('../controllers/productController')
const auth = require('../middleware/auth')
const router = Router()

router.post('/new', auth, addProduct)

router.post('/checkout', auth, checkout)

module.exports = router