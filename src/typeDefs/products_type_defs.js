const { gql } = require('apollo-server');

const productsTypeDefs = gql`
    type Product{
        url:String,
        product_Id: String!
        name: String
        description: String
        quantity: Int
        category: String
        price: Float
    }

   

    input CreateProduct {
        url:String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
    }

    input UpdateProduct {
        url:String,
        product_Id: String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
    }

    input newOrden{
        idProduct: String
        quantity: Int
        price: Float
        subTotal: Float
    }

    extend type Query{
        productByProdId(product_Id:String!):Product
        allProducts:[Product]
    }

    extend type Mutation{
        createProduct(product: CreateProduct!): Product
        deleteProduct(product_Id:String!):[Product]
        updProductbyId(product_Id:String!,product:UpdateProduct): Product
    
    }
`;
module.exports = productsTypeDefs;