const userResolvers = require("./user.resolvers");

const rootResolvers = {
  ...userResolvers
}

module.exports = rootResolvers