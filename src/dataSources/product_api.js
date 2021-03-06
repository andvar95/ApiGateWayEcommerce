const { RESTDataSource } = require('apollo-datasource-rest');
const {product_api_url} = require("../server");

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = product_api_url;    
  }

  async productByProdId(product_Id){
    return await this.get(`/products/${product_Id}`);    
  }

  async allProducts(){
    return await this.get(`/allproducts`);    
  }

  async createProduct(product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.post('/newproduct', product);    
  }

  async deleteProduct(product_Id){
    return await this.delete(`/delproduct/${product_Id}`);    
  }

  async updProductbyId(product_Id,product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    
    return await this.put(`/updproduct/${product_Id}`,product);
    
  }
  async newOrder(orderDetails){
    orderDetails = new Object(JSON.parse(JSON.stringify(orderDetails)));
    return await this.put(`/neworder`,orderDetails);
  }
}

module.exports = ProductAPI;