const User = require('../models/userModel')

const signUp = async (req, res, next) => {
  try {
    const loggedInUser = req.user
    if (loggedInUser.privilege === 'admin') {
      const user = new User(req.body)
      await user.save()
      res.status(201).send(user)
    }
    throw new Error()

  } catch (e) {
    console.error(e)
    next(e)
    res.status(400).send()
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    if (!user) res.status(404).send({message: "Unable to login"})
    res.send({user, token})
  } catch (e) {
    console.log(e)
    res.status(400).send()
  }
}

const updateUser = async (req, res) => {
  res.send('UPDATING USER')
}

module.exports = {
  signUp,
  login,
  updateUser
}