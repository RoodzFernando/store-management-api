const userResolvers = require("./user.resolvers");
const customerResolvers = require("./customer.resolvers");
const productResolvers = require("./product.resolvers");

const rootResolvers = [userResolvers, customerResolvers, productResolvers]

module.exports = rootResolvers