const { Router } = require('express')
const { signUp, login, updateUser, findUser } = require('../controllers/userController')
const auth = require('../middleware/auth')

const router = Router()

router.post('/new', auth, signUp)
router.post('/login', login)
router.patch('/:id', auth, updateUser)
router.get('/:id', findUser)

module.exports = router