const { Router } = require('express')
const { addCategory, getCategories } = require('../controllers/categoryController')

const router = Router()

router.post('/new', addCategory)
router.get('', getCategories)

module.exports = router