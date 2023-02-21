const { gql } = require('graphql-tag')

const customerDefs = gql`
  type Customer {
    lastName: String!
    firstName: String!
    phone: String!
    points: Float
  }

  input CustomerInput {
    lastName: String!
    firstName: String!
    phone: String!
    points: Float
  }

  type Query {
    getCustomers: [Customer!]!
  }

  type Mutation {
    addCustomer(input: CustomerInput): Customer! # Add index and unique constraints to phone number
  }
`

module.exports = { customerDefs }