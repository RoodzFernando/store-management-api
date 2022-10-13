const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers/index')
const typeDefs = require('./schemas/index')


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports = {
  server
}