const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  productTag: {
    type: String,
    index: true,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

module.exports = model('Product', productSchema)