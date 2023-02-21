const { gql } = require('graphql-tag')

const productDefs = gql`
  type Product {
    productTag: String!
    productName: String!
    description: String!
    quantity: Int!
    price: Float!
    category: Category
    brand: Brand
  }

  type Category {
    categoryId: String!
    categoryName: String!
  }

  # type ProductCategory {
  #   productId: String!
  #   categoryId: String!
  # }

  type Brand {
    _id: ID!
    name: String!
  }

  # type ProductBrand {
  #   productId: String!
  #   brandId: String!
  # }

  # input ProductBrandInput {
  #   productId: String!
  #   brandId: String!
  # }


  # input ProductCategoryInput {
  #   productId: String!
  #   categoryId: String!
  # }

  input CategoryInput {
    categoryId: String!
    categoryName: String!
  }

  input ProductInput {
    productTag: String!
    productName: String!
    description: String!
    quantity: Int!
    price: Float!
  }

  type Query {
    getProducts: [Product!]!
    getCategories: [Category!]!
    getBrands: [Brand!]!
    # getProductCategories: [ProductCategory!]!
  }

  type Mutation {
    addProduct(input: ProductInput): Product!
    createCategory(input: CategoryInput): Category!
    createBrand(brand: String!): Brand!
    # createProductCategory(input: ProductCategoryInput): ProductCategory!
  }
`

module.exports = { productDefs }