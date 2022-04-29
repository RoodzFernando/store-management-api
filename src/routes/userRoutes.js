const { Router } = require('express')
const { signUp } = require('../controllers/userController')

const router = Router()

router.post('/new', signUp)

module.exports = router