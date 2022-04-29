const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    required: true
  }
})

module.exports = model('Category', categorySchema)