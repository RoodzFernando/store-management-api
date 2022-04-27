const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    validate (value) {
      if (!isEmail(value)) throw new Error('Invalid Email')
    }
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  privilege: {
    type: String,
    enum: ['seller', 'admin']
  }
})

module.exports = model('User', userSchema)