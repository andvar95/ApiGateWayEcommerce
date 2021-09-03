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
        updateUser:(parent,{id,user},{dataSources,userIdToken})=>{
            if (userIdToken) return dataSources.usersAPI.updateUser(id,user);
            return null
        },
        updatePassword:(parent,{changePassword},{dataSources, userIdToken})=>{
            if(userIdToken) return dataSources.usersAPI.updatePassword(changePassword);
            return null
        },
        adminUpdate:(_,{user},{dataSources,userIdToken,admin})=>{
            if(admin && userIdToken) return dataSources.usersAPI.adminUpdate(user)
            return null
        }
    },
    Query:{
        getUsers:(_,{},{dataSources,userIdToken,admin})=>{
            if(admin && userIdToken) return dataSources.usersAPI.getUsers();
            return null
        },
        getUserById:(_,{id},{dataSources,userIdToken})=>{
            return dataSources.usersAPI.getUserById(id);
        }
    }
}

module.exports = userResolver;