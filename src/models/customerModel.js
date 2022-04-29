const { Schema, model } = require('mongoose')

customerSchema = new Schema({
  lastName: {
    type: String,
    minlength: 4,
    required: true
  },
  firstName: {
    type: String,
    minlength: 4,
    required: true
  },
  phone: {
    type: String,
    maxlength: 11,
    minlength: 11,
    required: true
  },
  points: {
    type: Number,
    default: 0
  }
})

module.exports = model('Customer', customerSchema)