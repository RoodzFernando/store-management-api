const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const handleErrors = require('../middleware/error')
const signature = process.env.SECRET

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
    unique: true,
    validate(value) {
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
    enum: ['SELLER', 'ADMIN']
  }
})

/* userSchema.methods.toJSON = function () {
  const user = this
  const userObj = user.toObject()
  delete userObj.password
  delete userObj._id
  return userObj
}

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({email})
  if (!user) throw new Error('Unable to login')
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error('Username or password is invalid!')
  return user
}

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({_id: user._id.toString()}, signature, {'expiresIn': '8 hours'})
  return token
}

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
    next()
  }
}) */

module.exports = model('User', userSchema)