const { Schema, model } = require('mongoose')

const brandSchema = new Schema({
  brandName: {
    type: String,
    minlength: 2,
    required: true,
    unique: true
  }
})
const Brand = model('Brand', brandSchema)

module.exports = Brand