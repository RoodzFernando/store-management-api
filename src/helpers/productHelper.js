const productModel = require("../models/productModel")
const Customer = require("../models/customerModel")

const readData = async (data) => {
  try{
    const { products, customer } = data
    console.log((data))
    if (phone) {
      const customer = await Customer.findOne({phone})
      console.log(customer)
    }
    const product = await productModel.findOne({ productTag })
    if (quantity > product.quantity) throw new Error('That product ran out of stock')
    product.quantity -= quantity
    product.save()
    const { productName, price } = product
    return {
      productName,
      price,
      quantity,
      total: price * quantity
    }
  } catch(e) {
    throw new Error('Product not found')
  }
}


module.exports = {
  readData
}