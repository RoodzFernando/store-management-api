const { connect } = require('mongoose')

const DB_URL = process.env.DB_URL
connect(DB_URL)