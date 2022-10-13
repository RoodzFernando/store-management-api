require('dotenv').config()
// require('./dbConnection')
// const express = require('express')
// const cors = require('cors')
// const userRouter = require('./routes/userRoutes')
// const customerRouter = require('./routes/customerRoutes')
// const categoryRouter = require('./routes/categoryRoutes')
// const productRouter = require('./routes/productRoutes')
// const { handleDuplicateErrors, handleAuthorization } = require('./middleware/error')


// const app = express()
// const port = process.env.PORT
// app.use(cors())
// app.use(express.json())
// app.use('/users', userRouter)
// app.use('/customers', customerRouter)
// app.use('/categories', categoryRouter)
// app.use('/products', productRouter)

// app.use(handleDuplicateErrors)
// app.use(handleAuthorization)

const {
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const { server } = require('../graphql/index')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: 'bounded',
//   plugins: [
//     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//   ],
// });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })