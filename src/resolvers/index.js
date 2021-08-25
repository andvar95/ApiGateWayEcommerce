const lodash = require("lodash");
const userResolver = require("./users_resolver");
const orderResolver = require("./orders_resolver");
const productResolver = require("./product_resolver");

const resolvers = lodash.merge(

  userResolver,
  orderResolver, 
  productResolver
);

module.exports = resolvers;
