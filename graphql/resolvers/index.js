
module.exports = {
  Query: {
    getUsers: async (_, __, { db }) => {
      const users = await db.collection('users').find({}).toArray()
      return users
    }
  }
}