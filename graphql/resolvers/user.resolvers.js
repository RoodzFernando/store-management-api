const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const getToken = user => jwt.sign({ user_id: user._id }, SECRET)

module.exports = {
  Query: {
    getUsers: async (_, __, { db }) => {
      const users = await db.collection('users').find({}).toArray()
      return users
    }
  },

  Mutation: {
    register: async (_, { input }, { db, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized!')
      const hashedPassword = await bcrypt.hashSync(input.password, 10)
      const data = {
        ...input,
        password: hashedPassword
      }
      await db.collection('users').insertOne(data)
      return data
    },
    login: async (_, args, { db }) => {
      const { email, password } = args
      const [user] = await db.collection('users').find({ email }).toArray()
      if (!user) throw new Error('Invalid credentials!')
      const comparedPassword = await bcrypt.compareSync(password, user.password)
      if (!comparedPassword) throw new Error('Invalid credentials!')
      const token = getToken(user)
      return {
        ...user,
        token
      }
    }
  }
}