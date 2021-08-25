const { RESTDataSource } = require("apollo-datasource-rest");
const { urlToHttpOptions } = require("url");
const {orders_api_url} = require("../server");


class OrdersAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = orders_api_url;
    }

    async getOrder(id){        
        return await this.get(`/orders/${id}`);
    }

    async getOrders(){
        return await this.get(`/orders/`);
    }

    async create(order){
        return await this.post('/orders/',{...order})
    }

    async updateOrder(id,order){
        return await this.put(`/orders/${id}/`,order)
    }

   
}

module.exports = OrdersAPI;