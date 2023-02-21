const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const resolvers = require('./resolvers/rootResolvers')
const typeDefs = require('./schemas/rootSchema')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { DB_URL, DB_NAME, SECRET } = process.env
const models = require('../src/models/index')

const getUserFromToken = async (token) => {
  if (!token) return null
  const decoded = jwt.verify(token, SECRET)
  if (!decoded?.user_id) return null
  const user = await models.User.findById(decoded.user_id)
  const { _id, lastName, firstName, email, privilege } = user
  return {
    _id,
    lastName,
    firstName,
    email,
    privilege
  }
}

const startConnection = async () => {
  const app = express()

  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  mongoose.connect(`${DB_URL}/${DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  await server.start()
  console.log('Connected to MongoDB');
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);

  app.use(
    '/api/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const { authorization } = req.headers
        const user = await getUserFromToken(authorization)
        return {
          user,
          models
        }
      }
    }),
  );
}

module.exports = {
  startConnection
}