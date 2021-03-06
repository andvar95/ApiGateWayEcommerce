const {ApolloServer} = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const UsersAPI = require('./dataSources/users_api');
const OrdersAPI = require('./dataSources/orders_api');
const ProductsAPI = require('./dataSources/product_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context:authentication,
    typeDefs,
    resolvers,
    dataSources:()=>({

        usersAPI:new UsersAPI(),
        ordersAPI: new OrdersAPI(),
        productAPI:new ProductsAPI()

    }),
    introspection:true,
    playground:true
})


server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀  Server ready at ${url}`);

})