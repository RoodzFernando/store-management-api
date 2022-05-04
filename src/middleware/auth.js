const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decoded._id)
    if (!user) throw new Error()
    req.user = user
    req.token = token
    next()
  } catch (e) {
    res.status(401).send({message: 'Not authorized. Please authenticate'})
  }
}

module.exports = auth