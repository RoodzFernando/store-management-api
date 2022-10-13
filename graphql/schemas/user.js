const { gql } = require('apollo-server')

const userDefs = gql`
  type User {
    name: String
  }
  type Query {
    greet: String
  }
`

module.exports = {userDefs}