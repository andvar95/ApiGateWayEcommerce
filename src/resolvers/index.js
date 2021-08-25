const lodash = require("lodash");
const userResolver = require("./users_resolver");
const productResolver = require("./product_resolver")

const resolvers = lodash.merge(

  userResolver, productResolver
);

module.exports = resolvers;
