const { users_api_url } = require("../server");
const fetch = require("node-fetch");
const { ApolloError } = require("apollo-server");
const jwt_decode = require('jwt-decode');

const authentication = async ({ req }) => {
 
  try {


  const  token = req.headers.authorization;
  if (!token) return { userIdToken: null };


    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      redirect: "follow",
    };

    let response = await fetch(
      `${users_api_url}/token/verify/`,
      requestOptions
    );


    if (response.status !== 200) throw new ApolloError(`SESION INACTIVA - ${401}`, 401);





    return { 
      userIdToken: (await response.json()).UserId,
      admin: tokenInformation.admin
    };
  } catch (error) {
    throw new ApolloError(`TOKEN  ERROR: ${error}`, 500);
  }
};

module.exports = authentication;
