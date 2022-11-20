const { gql } = require('apollo-server')

const productDefs = gql`
  type Product {
    productTag: String!
    productName: String!
    model: String
    size: String
    brand: String
    color: String
    quantity: Int!
    price: Float!
  }
  input ProductInput {
    productTag: String!
    productName: String!
    model: String
    size: String
    brand: String
    color: String
    quantity: Int!
    price: Float!
  }

  # type ReceiptPayload {
    # TODO
  # }

  type Query {
    getProducts: [Product!]!
  }

  type Mutation {
    addProduct(input: ProductInput): Product!
    # addToCart() TODO
    # chechout():
  }
`

module.exports = { productDefs }