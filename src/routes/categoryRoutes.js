const { Router } = require('express')
const { addCategory, getCategories } = require('../controllers/categoryController')
const auth = require('../middleware/auth')
const router = Router()

router.post('/new', auth, addCategory)
router.get('',auth, getCategories)

module.exports = router