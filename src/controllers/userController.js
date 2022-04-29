const User = require('../models/userModel')

const signUp = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send({message: 'Something went wrong'})
  }
}

module.exports = {
  signUp
}