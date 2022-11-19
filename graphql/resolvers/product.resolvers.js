module.exports = {
  Query: {
    getProducts: async (_, __, { db }) => {
      const products = await db.collection('products').find({}).toArray()
      return products
    }
  },
  Mutation: {
    addProduct: async (_, { input }, { db }) => {
      const data = { ...input }
      await db.collection('products').insertOne(data)
      return data
    }
  }
}