const Category = require('../models/categoryModel')
const Product = require('../models/productModel')

const addProduct = async (req, res) => {
  try {
    const category = await Category.findOne({categoryName: req.body.categoryId})
    const product = new Product({
      ...req.body,
      categoryId: category._id
    })
    product.save()
    res.status(201).send(product)
  } catch (e) {
    res.status(400).send()
  }
}

module.exports = {
  addProduct
}