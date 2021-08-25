const { gql } = require('apollo-server');

const productsTypeDefs = gql`
    type Product {
        productId: String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
    }

    input CreateProduct {
        productId: String,
        name: String,
        description: String,
        quantity: Int,
        category: String,
        price: Float,
    }

    extend type Query{
        productByProdId(id:String!):Product
        allProducts:[Product]
    }
`;
module.exports = productsTypeDefs;