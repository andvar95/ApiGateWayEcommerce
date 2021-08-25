const productResolver = {
    Query: {
        productByProdId: (_, {prodId}, { dataSources, userIdToken}) => {
            if(userIdToken) 
                return dataSources.product_api.productByProdId(prodId)
            else
                return null
        },
        allProducts:(_,{},{ dataSources, userIdToken})=>{
            if(userIdToken)
                return dataSources.product_api.allProducts()
            else
                return null
        }

    },
    Mutation: {

    }
};

module.exports = productResolver;