const productResolver = {
    Query: {
        productByProdId: (_, {product_Id}, { dataSources, userIdToken}) => {
            console.log(product_Id)
            if(userIdToken) return dataSources.productAPI.productByProdId(product_Id)
            return null
        },
        allProducts:(_,{},{ dataSources, userIdToken})=>{
            if(userIdToken) return dataSources.productAPI.allProducts()
            return null
        }

    },
    Mutation: {
        createProduct:(_,{product},{ dataSources, userIdToken, admin}) => {
            if(userIdToken && admin) return dataSources.productAPI.createProduct(product)
            return null
        },
        deleteProduct:(_,{product_Id},{ dataSources, userIdToken, admin})=> {
            if(userIdToken && admin) return dataSources.productAPI.deleteProduct(product_Id)
            return null
        },
        updProductbyId:(_,{product_Id},{product},{ dataSources, userIdToken, admin})=> {
            if(userIdToken && admin) return dataSources.productAPI.updProductbyId(product_Id,product)
            return null
        }
    }
};

module.exports = productResolver;