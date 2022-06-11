require('dotenv').config()
require('./src/dbConnection')
const mongoose = require('mongoose')
const async = require('async')
const Category = require('./src/models/categoryModel')
const Product = require('./src/models/productModel')
const User = require('./src/models/userModel')
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
    categoryName: "Clothes",
    description: "tempus semper est quam pharetra magna"
  },

  {
    _id: "626c7fa2fc13ae63c500093f",
    categoryName: "Women Spray",
    description: "est congue elementum in hac habitasse platea dictumst"
  },

  {
    _id: "626c7fa2fc13ae63c5000940",
    categoryName: "Appliances",
    description: "consectetuer adipiscing elit proin interdum"
  }
]



const products = [
  {
    productTag: "a9f09484-7368",
    productName: "Adidas",
    model: "Adilette Comfort",
    size: 8,
    color: 'Grey',
    quantity: 21,
    price: 78,
    categoryId: "626c7fa2fc13ae63c500093d",
  },
  {
    productTag: "a9f07984-7368",
    productName: "Adidas",
    model: "Adidassage",
    size: "M6/W7",
    color: 'Black Gold',
    quantity: 47,
    price: 150.98,
    categoryId: "626c7fa2fc13ae63c500093d",
  },
  {
    productTag: "a9f09284-7368",
    productName: "Adidas",
    model: "Adilette Comfort",
    size: 8,
    color: 'Pink & White',
    quantity: 6,
    price: 135,
    categoryId: "626c7fa2fc13ae63c500093d",
  },
  {
    productTag: "a9f09284-7368",
    productName: "Adidas",
    model: "Adilette Comfort",
    size: "M10/W11",
    color: 'Green & Grey',
    quantity: 6,
    price: 135,
    categoryId: "626c7fa2fc13ae63c500093d",
  },
  {
    productTag: "a9f09284-7368",
    productName: "Buterfly",
    size: "8 fl oz/ 236 ml",
    quantity: 6,
    price: 35,
    categoryId: "626c7fa2fc13ae63c500093f",
  },
  {
    productTag: "a9f09284-7368",
    productName: "Belt",
    size: "36",
    color: 'Black & Brown',
    brand: "Guess",
    quantity: 6,
    price: 135,
    categoryId: "626c7fa2fc13ae63c500093e",
  },
  {
    productTag: "a9f09284-7368",
    productName: "T-Shirts",
    size: "L",
    color: 'Blue',
    brand: "Calvin Klein",
    quantity: 6,
    price: 25,
    categoryId: "626c7fa2fc13ae63c500093e",
  }
]

const createCategory = (obj) => {
  const category = new Category(obj)
  category.save()
  console.log(`New category added: ${category}`)
}

const createProduct = (obj) => {
  const product = new Product(obj)
  product.save()
  console.log('New Product added ' + product)
}

const addDefaultUser = () => {
  const user = new User({
    lastName: "Roodz Fernando",
    firstName: "Fleurant",
    email: "fernando@example.com",
    password: "hello@1234",
    privilege: 'admin'
  })
  user.save()
  console.log('New Product added ' + user)
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
    () => createProduct(products[2]),
    () => createProduct(products[3]),
    () => createProduct(products[4]),
    () => createProduct(products[5]),
    () => createProduct(products[6]),
  ], cb)
}

const createDefaultUserInstance = (cb) => {
  async.series([
    () => addDefaultUser()
  ], cb)
}
async.waterfall(
  [
    createDefaultUserInstance,
    // createCategoryInstances,
    // createProductInstances
  ],
  function(err, results) {
    if (err) console.log('FINALE ERR ' + err)
    console.log('DONE ' + results)
    mongoose.connection.close()
  }
)

