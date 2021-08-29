const orderResolver = {
    Mutation:{

        create:(parent,{order},{dataSources,userIdToken})=>{
            if (userIdToken) return dataSources.ordersAPI.create(order);
            return null;
        },
        updateOrder:(parent,{id,order},{dataSources,userIdToken})=>{
            if (userIdToken) return dataSources.ordersAPI.updateOrder(id,order);
            return null
        },
        finishOrder:(parent,{id,order},{dataSources,userIdToken})=>{
            if(userIdToken) return dataSources.ordersAPI.finishOrder(id,order);
            return null
        },
        addCart:(_,{id,inputDetailProducts},{dataSources,userIdToken})=>{
            if(userIdToken) return dataSources.ordersAPI.addCart(id,inputDetailProducts);
            return null
        }

    },
    Query:{
        getOrders:(_,{},{dataSources,userIdToken,admin})=>{
            if(userIdToken && admin) return dataSources.ordersAPI.getOrders();
            return null
        },
        getOrder:(_,{id},{dataSources,userIdToken})=>{
            if(userIdToken)return dataSources.ordersAPI.getOrder(id);
            return null
        },
        ordersByUserId:(_,{id},{dataSources,userIdToken})=>{
           if(userIdToken) return dataSources.ordersAPI.ordersByUserId(id);
           return null
        },
        orderByUserAndStatus:(_,{id,status},{dataSources,userIdToken})=>{
            if(userIdToken) return dataSources.ordersAPI.orderByUserAndStatus(id,status);
            return null
        }
    }
}

module.exports = orderResolver;