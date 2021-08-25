const {gql} = require('apollo-server');

const usersTypeDefs = gql `

    type Tokens{
        refresh:String!
        access:String!
    }

    type User{
        first_name:String,
        username:String,
        email:String,
        phone:String,
        address:String,
        is_active:Boolean,
        is_superuser:Boolean
    }

    type Response{
        Response:String
    }

    input UserCreate{
        first_name:String,
        username:String,
        password:String,
        email:String,
        phone:String,
        address:String,
        is_active:Boolean,
        is_superuser:Boolean

    }



    type Access {
        access:String!
    }

    input CredentialsInput{
        username:String
        password:String
    }

    input ChangePassword{
         username:String
         password:String         
         lastPassword:String
    }

    type Mutation {
        authenticate(credentials: CredentialsInput!):Tokens!
        refreshToken(refresh:String!):Access!
        register(user:UserCreate):User!
        updateUser(id:String!,user:UserCreate!):User!
        updatePassword(changePassword:ChangePassword!):Response!

    }

    type Query {
        getUsers:[User] 
        getUserById(id:String!):User!
    }
    `;

    //getUsers:[User]   get sin argumentos
module.exports = usersTypeDefs;