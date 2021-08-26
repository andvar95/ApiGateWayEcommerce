const productResolver = {
    Query: {
        productByProdId: (_, {product_Id}, { dataSources, userIdToken}) => {
            console.log(product_Id)
            if(userIdToken) 
                return dataSources.productAPI.productByProdId(product_Id)
            else
                return null
        },
        allProducts:(_,{},{ dataSources, userIdToken})=>{
            if(userIdToken)
                return dataSources.productAPI.allProducts()
            else
                return null
        }

    },
    Mutation: {
        createProduct:(_,{product},{ dataSources, userIdToken, admin}) => {
            if(userIdToken && admin)
                return dataSources.productAPI.createProduct(product)
            else
            return null
        },
        deleteProduct:(_,{product_Id},{ dataSources, userIdToken, admin})=> {
            if(userIdToken && admin)
                return dataSources.productAPI.deleteProduct(product_Id)
            else
                return null
        },
        updProductbyId:(_,{product_Id},{product},{ dataSources, userIdToken, admin})=> {
            if(userIdToken)
                return dataSources.productAPI.updProductbyId(product_Id,product)
            else
                return null
        },
        newOrder:(_,{orderDetails},{ dataSources, userIdToken})=> {
            if(userIdToken)
                return dataSources.productAPI.newOrder(orderDetails)
            else
                return null
        }

    }
};

module.exports = productResolver;