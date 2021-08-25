const { gql } = require('apollo-server');

const productsTypeDefs = gql`
    type Product {
        product_Id: String!
        name: String
        description: String
        quantity: Int
        category: String
        price: Float
    }

    input CreateProduct {
        product_Id: String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
    }

    input UpdateProduct {
        product_Id: String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
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