const {gql} = require('apollo-server');

const ordersTypeDefs = gql `

    type DetailProducts{
        url:String,
        idProduct:String,
        name:String,
        quantity:Int,
        price:Float,
        subTotal:Float
    }
    input InputDetailProducts{
        url:String,
        idProduct:String,
        name:String,
        quantity:Int,
        price:Float,
        subTotal:Float
    }

    type Order{
        userId:String,
        orderId:String,
        date:String,
        total:Float,
        detailProducts:[DetailProducts],
        status:String,
        finishDate:String
    }

    type Res{
        response:String!
    }

    input inputOrder{
        userId:String,
        date:String,
        total:Float,
        detailProducts:[InputDetailProducts],
        status:String
    }

    input UpdateOrder{
        userId:String,
        orderId:String,
        date:String,
        total:Float,
        detailProducts:[InputDetailProducts!]!,
        status:String
    }

    union finishResponse = Order | Res

    extend type Mutation {
        create(order: inputOrder):Order
        updateOrder(id:String,order:UpdateOrder):Order
        finishOrder(id:String!,order:UpdateOrder):Res!
        addCart(id:String!,inputDetailProducts:InputDetailProducts!):Order!
    }

    extend type Query {
        getOrders:[Order] 
        getOrder(id:String!):Order
        ordersByUserId(id:String!):[Order]
        orderByUserAndStatus(id:String,status:String):[Order]
    }
    `;

    //getUsers:[User]   get sin argumentos
module.exports = ordersTypeDefs;