const { gql } = require('apollo-server')

const userDefs = gql`
  enum role {
    SELLER
    ADMIN
  }
  type User {
    lastName: String!
    firstName: String!
    email: String!
    privilege: role!
  }
  type Query {
    getUsers: [User!]!
  }
`

module.exports = { userDefs }