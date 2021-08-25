const lodash = require("lodash");
const userResolver = require("./users_resolver");
const orderResolver = require("./orders_resolver");

const resolvers = lodash.merge(

  userResolver,
  orderResolver
);

module.exports = resolvers;
