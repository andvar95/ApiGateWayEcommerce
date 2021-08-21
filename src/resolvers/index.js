const lodash = require("lodash");
const userResolver = require("./users_resolver");

const resolvers = lodash.merge(

  userResolver
);

module.exports = resolvers;
