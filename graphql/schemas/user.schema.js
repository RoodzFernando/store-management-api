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


  type loginPayload {
    lastName: String
    firstName: String
    email: String
    privilege: String
    token: String
  }

  type Mutation {
    register: User
    login(email: String!, password: String!): loginPayload
  }
`

module.exports = { userDefs }