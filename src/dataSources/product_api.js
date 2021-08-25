const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;    
  }

  async productByProdId(prodId){
    return await this.get(`/products/${prodId}`);    
  }

  async allProducts(){
    return await this.get(`/allproducts`);    
  }

  async createProduct(product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.post('/neworder', product);    
  }

  async deleteProduct(prodId){
    return await this.delete(`/delproduct/${prodId}`);    
  }

  async nuevaOrden(){
      return await this.put(`/neworder`,)
  }

  async updProductbyId(prodId,product){
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.put(`/updproduct/${prodId}`,product);
    
  }
}

module.exports = ProductAPI;