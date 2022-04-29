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

module.exports = {
  addCategory
}