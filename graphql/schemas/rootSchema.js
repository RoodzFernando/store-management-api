const { customerDefs } = require("./customer.schema");
const { userDefs } = require("./user.schema");

const rootDefs = [userDefs, customerDefs]

module.exports = rootDefs