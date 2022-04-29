const { Router } = require('express')
const { addCategory } = require('../controllers/categoryController')

const router = Router()

router.post('/new', addCategory)

module.exports = router