const userResolvers = require("./user.resolvers");
const customerResolvers = require("./customer.resolvers");

const rootResolvers = [userResolvers, customerResolvers]

module.exports = rootResolvers