require('dotenv').config()
require('./dbConnection')
const express = require('express')


const app = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})