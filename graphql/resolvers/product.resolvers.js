module.exports = {
  Query: {
    getProducts: async (_, __, { user, models }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const products = await models.Product.find({}).populate("brand category")
      return products
    },

    getBrands: async (_, __, { models, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const brands = await models.Brand.find()
      return brands
    },

    getCategories: async (_, __, { models, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const categories = await models.Category.find()
      return categories
    }
  },
  Mutation: {
    addProduct: async (_, { input }, { models, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const { brandName, categoryName } = input
      const inputCp = input
      delete inputCp.brandName
      delete inputCp.categoryName
      let category = await models.Category.findOne({ categoryName })
      if (!category) category = await models.Category.create({ categoryName })
      let brand = await models.Brand.findOne({ brandName })
      if (!brand) brand = await models.Brand.create({ brandName })
      const product = await models.Product.create({
        ...inputCp,
        brand: {
          _id: brand._id,
          brandName: brand.brandName
        },
        category: {
          _id: category._id
        }
      })
      return product.populate('brand category')
    },

    createCategory: async (_, args, { models, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const category = await models.Category.create({ ...args })
      return category
    },

    createBrand: async (_, args, { models, user }) => {
      const { privilege } = user
      if (privilege !== 'ADMIN') throw new Error('Not Autorized')
      const brand = await models.Brand.create({ ...args })
      return brand
    }
  }
}