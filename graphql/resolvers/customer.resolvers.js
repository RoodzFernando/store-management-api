module.exports = {
  Query: {
    getCustomers: async (_, __, { db }) => {
      const customers = await db.collection('customers').find({}).toArray()
      return customers
    }
  },

  Mutation: {
    addCustomer: async (_, { input }, { db }) => {
      const data = {
        ...input,
        points: 0
      }
      await db.collection('customers').insertOne(data)
      return data
    }
  }
}