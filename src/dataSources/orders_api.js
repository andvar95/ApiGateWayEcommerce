const { RESTDataSource } = require("apollo-datasource-rest");
const { urlToHttpOptions } = require("url");
const {orders_api_url,product_api_url} = require("../server");
const fetch = require('node-fetch');
const { ERANGE } = require("constants");

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
    async finishOrder(id,order){

        console.log(order.detailProducts);
     
       
       const res =  await fetch(`https://productunalms.herokuapp.com/neworder`,
           {method:'PUT',
           headers: {'Content-type': 'application/json'},
           body:JSON.stringify(order.detailProducts)}
           )

          
       
          let Res = {}
           if(res.status!== 200)
           {
            Res.response = "No hay Stock"
           return {...Res}
           }
         
           const rr=  await this.post(`/orders/finish/${id}`)
           Res.response = "Compra Finalizada"
           return {...Res}
   
    }

    async ordersByUserId(id){
        return await this.get(`/ordersbyuserId/${id}`)
    }

    async orderByUserAndStatus(id,status){
    
        return await this.get(`/orders/${status}/${id}`)
    }

    async addCart(id,inputDetailProducts){
        return await this.post(`/addCart/${id}`,inputDetailProducts)
    }
   
}

module.exports = OrdersAPI;