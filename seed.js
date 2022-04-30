require('dotenv').config()
require('./src/dbConnection')
const mongoose = require('mongoose')
const async = require('async')
const Category = require('./src/models/categoryModel')
const Product = require('./src/models/productModel')
// mongoose.Promise = global.Promise

// Add 5 Categories

const categories = [
  {
    _id: "626c7fa2fc13ae63c500093d",
    categoryName: "Shoes",
    description: "eget vulputate ut ultrices vel"
  },

  {
    _id: "626c7fa2fc13ae63c500093e",
    categoryName: "Baby",
    description: "tempus semper est quam pharetra magna"
  },

  {
    _id: "626c7fa2fc13ae63c500093f",
    categoryName: "Jewelry",
    description: "est congue elementum in hac habitasse platea dictumst"
  },

  {
    _id: "626c7fa2fc13ae63c5000940",
    categoryName: "Appliances",
    description: "consectetuer adipiscing elit proin interdum"
  }
]

const createCategory = (obj) => {
  const category = new Category(obj)
  category.save()
  console.log(`New category added: ${category}`)
}

const products = [
  {
    productTag: "a9f09484-7368",
    productName: "Curtains",
    quantity: 21,
    price: 78,
    categoryId: "626c7fa2fc13ae63c5000940",
  },
  {
    productTag: "a9f07984-7368",
    productName: "Calvin Klein",
    quantity: 47,
    price: 150.98,
    categoryId: "626c7fa2fc13ae63c500093d",
  },
  {
    productTag: "a9f09284-7368",
    productName: "Walkin Baby",
    quantity: 6,
    price: 135,
    categoryId: "626c7fa2fc13ae63c500093e",
  }
]

const createProduct = (obj) => {
  const product = new Product(obj)
  product.save()
  console.log('New Product added ' + product)
}


const createCategoryInstances = (cb) => {
  async.parallel([
    () => createCategory(categories[0]),
    () => createCategory(categories[1]),
    () => createCategory(categories[2]),
    () => createCategory(categories[3])
  ], cb)
}

const createProductInstances = (cb) => {
  async.parallel([
    () => createProduct(products[0]),
    () => createProduct(products[1]),
    () => createProduct(products[2])
  ], cb)
}
async.series(
  [
    createCategoryInstances,
    createProductInstances
  ],
  function(err, results) {
    if (err) console.log('FINALE ERR ' + err)
    console.log('DONE ' + results)
    mongoose.connection.close()
  }
)

