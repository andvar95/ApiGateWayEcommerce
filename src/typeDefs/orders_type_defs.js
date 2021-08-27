const {gql} = require('apollo-server');

const ordersTypeDefs = gql `

    type DetailProducts{
        idProduct:String,
        quantity:Int,
        price:Float,
        subTotal:Float
    }
    input InputDetailProducts{
        idProduct:String,
        quantity:Int,
        price:Float,
        subTotal:Float
    }

    type Order{
        orderId:String,
        date:String,
        total:Float,
        detailProducts:[DetailProducts],
        status:String
    }

    type Response{
        Response:String
    }

    input inputOrder{
        date:String,
        total:Float,
        detailProducts:[InputDetailProducts],
        status:String
    }


    extend type Mutation {
        create(order: inputOrder):Order
        updateOrder(order:inputOrder):Order

    }

    extend type Query {
        getOrders:[Order] 
        getOrder(id:String!):Order
    }
    `;

    //getUsers:[User]   get sin argumentos
module.exports = ordersTypeDefs;