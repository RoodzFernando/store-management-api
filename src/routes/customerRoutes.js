const { Router } = require('express')
const { createCustomer } = require('../controllers/customerController')

const router = Router()

router.post('/new', createCustomer)

module.exports = router

