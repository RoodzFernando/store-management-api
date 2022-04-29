require('dotenv').config()
require('./dbConnection')
const express = require('express')
const userRouter = require('./routes/userRoutes')
const customerRouter = require('./routes/customerRoutes')
const categoryRouter = require('./routes/categoryRoutes')
const productRouter = require('./routes/productRoutes')


const app = express()
const port = process.env.PORT
app.use(express.json())
app.use('/users', userRouter)
app.use('/customers', customerRouter)
app.use('/categories', categoryRouter)
app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})