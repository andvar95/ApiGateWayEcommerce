const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');
const jwt_decode = require('jwt-decode')
const {users_api_url} = require('../server');
const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    
    
    if (token == '') return { userIdToken: null }

    
    else {
        try {
            let requestOptions = { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }), redirect: 'follow' };
            let response = await fetch(`${users_api_url}/token/verify/`, requestOptions)
            
            if (response.status != 200) throw new ApolloError(`SESION INACTIVA - ${401}`, 401)
            const tokenInfo = jwt_decode(token)
            
           
            return { userIdToken: tokenInfo.user_id,admin:tokenInfo.admin};
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;
