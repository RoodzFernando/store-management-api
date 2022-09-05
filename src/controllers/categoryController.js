const Category = require("../models/categoryModel")

const addCategory = async (req, res) => {
  const category = new Category(req.body)
  try {
    category.save()
    res.status(201).send(category)
  } catch (e) {
    res.status(400).send()
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.send({categories})
  } catch (err) {
    res.status(500).send({message: 'Internal error'})
  }
}

module.exports = {
  addCategory,
  getCategories
}