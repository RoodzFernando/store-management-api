const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers/rootResolvers')
const typeDefs = require('./schemas/rootSchema')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')
const { DB_URL, DB_NAME, SECRET } = process.env

const getUserFromToken = async (token, db) => {
  if (!token) return null
  const decoded = jwt.verify(token, SECRET)
  if (!decoded?.user_id) return null
  const [user] = await db.collection('users').find({ _id: ObjectId(decoded.user_id) }).toArray()
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
  const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  await client.connect()
  const db = client.db(DB_NAME)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const { authorization } = req.headers
      const user = await getUserFromToken(authorization, db)
      return {
        db,
        user
      }
    }
  })
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

module.exports = {
  startConnection
}