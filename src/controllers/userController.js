const User = require('../models/userModel')

const signUp = async (req, res, next) => {
  try {
    const loggedInUser = req.user
    if (loggedInUser.privilege !== 'admin') {
      throw new Error()
    }
    // if (loggedInUser.privilege === 'admin') {
      const user = new User(req.body)
      await user.save()
      res.status(201).send(user)
    // }
    // throw new Error()

  } catch (e) {
    console.error(e)
    next(e)
    res.status(400).send()
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  try {
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    if (!user) res.status(404).send({message: "Unable to login"})
    res.send({user, token})
  } catch (e) {
    res.status(400).send({message: e.message})
  }
}

const findUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) throw new Error()
    res.send(user)
  } catch (err) {
    res.status(404).send({message: 'Error!'})
  }
}

const updateUser = async (req, res) => {
  res.send('UPDATING USER')
}

module.exports = {
  signUp,
  login,
  updateUser,
  findUser
}