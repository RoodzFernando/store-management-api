const { Schema, model, ObjectId } = require('mongoose')

const productSchema = new Schema({
  productTag: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  brand: {
    type: ObjectId,
    ref: 'Brand'
  },
  description: {
    type: String,
    required: true,
    minlength: 3
  },
  quantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  }
})

module.exports = model('Product', productSchema)