const userResolver = {
    Mutation:{
        authenticate:(parent,{credentials},{dataSources}) =>{
            return dataSources.usersAPI.authenticate(credentials);
        },
        refreshToken:(parent,{refresh},{dataSources})=>{
            return dataSources.usersAPI.refreshToken(refresh);
        },
        register:(parent,{user},{dataSources})=>{
            return dataSources.usersAPI.register(user);
        },
        updateUser:(parent,{id,user},{dataSources})=>{
            return dataSources.usersAPI.updateUser(id,user);
        },
        updatePassword:(parent,{changePassword},{dataSources})=>{
            return dataSources.usersAPI.updatePassword(changePassword);
        }
    },
    Query:{
        getUsers:(_,{},{dataSources,userIdToken})=>{
            return dataSources.usersAPI.getUsers();
        },
        getUserById:(_,{id},{dataSources,userIdToken})=>{
            return dataSources.usersAPI.getUserById(id);
        }
    }
}

module.exports = userResolver;