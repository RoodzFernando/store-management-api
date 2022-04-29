const Customer = require('../models/customerModel')

const createCustomer = async (req, res) => {
  const customer = new Customer(req.body)
  try {
    customer.save()
    res.status(201).send(customer)
  } catch (e) {
    res.status(400).send()
  }
}

module.exports = {
  createCustomer
}