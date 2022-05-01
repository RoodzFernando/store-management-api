const Product = require("../models/productModel")
const Customer = require("../models/customerModel")

const readProductData = async (data) => {
  try{
    const { productTag, quantity } = data
    const product = await Product.findOne({ productTag })
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

const readCustomerDetail = async (phone, points) => {
  try {
    const customer = await Customer.findOne({phone})
    customer.points += points
    customer.save()
    return customer
  } catch(e) {
    throw new Error('Something went wrong')
  }
}


module.exports = {
  readProductData,
  readCustomerDetail
}