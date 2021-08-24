const { RESTDataSource } = require("apollo-datasource-rest");
const { urlToHttpOptions } = require("url");
const {users_api_url} = require("../server");


class UsersAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = users_api_url;
    }

    async authenticate(credentials){
        return await  this.post(`/token/`,{...credentials});
    }

    async refreshToken(refresh){
        
        return await this.post('/token/refresh/',{refresh});
    }

    async getUsers(){        
        return await this.get('/users/');
    }

    async getUserById(id){
        return await this.get(`/users/${id}`)
    }

    async register(user){
        return await this.post('/users/',{...user})
    }

    async updateUser(id,user){
        return await this.put(`/users/${id}/`,user)
    }

    async updatePassword(changePassword){
        return await this.post('/password/',changePassword)
    }

}

module.exports = UsersAPI;