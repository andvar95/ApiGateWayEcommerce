const { users_api_url } = require("../server");
const fetch = require("node-fetch");
const { ApolloError } = require("apollo-server");

const authentication = async ({ req }) => {
  let token = "";

  if (req) token = req.headers.authorization;
  if (!token) return { userIdToken: null };

  try {
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

    if (response.status !== 200)
      throw new ApolloError(`SESION INACTIVA - ${401}`, 401);

    return { userIdToken: (await response.json()).UserId };
  } catch (error) {
    throw new ApolloError(`TOKEN  ERROR: ${error}`, 500);
  }
};

module.exports = authentication;
