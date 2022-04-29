require('dotenv').config()
require('./dbConnection')
const express = require('express')
const userRouter = require('./routes/userRoutes')
const customerRouter = require('./routes/customerRoutes')


const app = express()
const port = process.env.PORT
app.use(express.json())
app.use('/users', userRouter)
app.use('/customers', customerRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})