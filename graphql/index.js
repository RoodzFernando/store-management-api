const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers/index')
const typeDefs = require('./schemas/index')
const { connect, connection } = require('mongoose')
const { DB_URL } = process.env


const startConnection = async () => {
  const result = await connect(DB_URL)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db: connection.db
    }
  })
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

module.exports = {
  startConnection
}