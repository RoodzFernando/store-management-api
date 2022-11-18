const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

module.exports = {
  Query: {
    getUsers: async (_, __, { db }) => {
      const users = await db.collection('users').find({}).toArray()
      return users
    }
  },

  Mutation: {
    register: () => { },
    login: async (_, args, { db }) => {
      const { email, password } = args
      const [user] = await db.collection('users').find({ email }).toArray()
      if (!user) throw new Error('Not authorized action!')
      const comparedPassword = await bcrypt.compareSync(password, user.password)
      if (!comparedPassword) throw new Error('Not authorized action!')
      const token = jwt.sign({ user_id: user.id }, SECRET)
      return {
        ...user,
        token
      }
    }
  }
}