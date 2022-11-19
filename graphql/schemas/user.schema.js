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
  input UserInput {
    lastName: String!
    firstName: String!
    password: String!
    email: String!
    privilege: role!
  }

  type loginPayload {
    lastName: String
    firstName: String
    email: String
    privilege: String
    token: String
  }


  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    register(input: UserInput!): User
    login(email: String!, password: String!): loginPayload
  }
`

module.exports = { userDefs }