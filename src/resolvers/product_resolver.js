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

    }
};

module.exports = productResolver;