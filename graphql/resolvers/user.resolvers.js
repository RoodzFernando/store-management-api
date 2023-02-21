const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env
const getToken = user => jwt.sign({ user_id: user._id }, SECRET)

module.exports = {
  Query: {
    getUsers: async (_, __, { user, models }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized!')
      const users = await models.User.find({})
      return users
    }
  },

  Mutation: {
    register: async (_, { input }, { user, models }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized!')
      const hashedPassword = await bcrypt.hashSync(input.password, 10)
      const data = await models.User.create({
        ...input,
        password: hashedPassword
      })
      return data
    },
    login: async (_, args, { models }) => {
      const { email: loginEmail, password } = args
      const user = await models.User.findOne({ email: loginEmail })
      if (!user) throw new Error('Invalid credentials!')
      const comparedPassword = await bcrypt.compareSync(password, user.password)
      if (!comparedPassword) throw new Error('Invalid credentials!')
      const token = getToken(user)
      const { lastName, firstName, email, privilege } = user
      return {
        lastName,
        firstName,
        email,
        privilege,
        token
      }
    }
  }
}