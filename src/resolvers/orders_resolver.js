const orderResolver = {
    Mutation:{

        create:(parent,{order},{dataSources,userIdToken})=>{
            if (userIdToken) return dataSources.ordersAPI.create(order);
            return null;
        },
        updateOrder:(parent,{id,user},{dataSources,userIdToken})=>{
            if (userIdToken) return dataSources.ordersAPI.updateOrder(id,user);
            return null
        },

    },
    Query:{
        getOrders:(_,{},{dataSources,userIdToken})=>{
            if(userIdToken) return dataSources.ordersAPI.getOrders();
            return null
        },
        getOrder:(_,{id},{dataSources,userIdToken})=>{
            return dataSources.ordersAPI.getOrder(id);
        }
    }
}

module.exports = orderResolver;