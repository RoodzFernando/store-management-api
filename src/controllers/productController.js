const async = require('async')
const { readData } = require('../helpers/productHelper')
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

const checkout = async (req, res) => {
  try{
    const { customer, products } = req.body
    async.map(req.body, readData, (err, results) => {
      const respData = (results)
      res.send(respData)
    })
    console.log('Done running!')
  } catch(e) {
    console.log(e)
    res.status(400).send({message: "Something went wrong!"})
  }
}

module.exports = {
  addProduct,
  checkout
}