const { customerDefs } = require("./customer.schema");
const { productDefs } = require("./product.schema");
const { userDefs } = require("./user.schema");

const rootDefs = [userDefs, customerDefs, productDefs]

module.exports = rootDefs