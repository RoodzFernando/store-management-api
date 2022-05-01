const async = require('async')
const { readProductData, readCustomerDetail } = require('../helpers/productHelper')
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
    const { details:{products, phone} } = req.body
    async.map(products, readProductData, async (err, results) => {
      const {lastName, firstName, points} = await readCustomerDetail(phone, 5) //Add 5 points for now on each purchase
      res.send({
        results,
        lastName,
        firstName,
        points,
        phone
      })
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