const Users = require('../models/users')
const register = async(params) => {
    try{
        const {email,username,firstName,lastName,password}=params;

        const existed = await Users.findOne({email});
            if (existed) {
                throw "User is already existed~";
            }
        const newUser ={
            email,
            username,
            firstName,
            lastName,
            password
        }

        const createUser = await Users.create(newUser);
        return{
            success: true,
            data: createUser
        }

    }catch(err){
        console.log(err);
        return{
            success: false,
            error: JSON.stringify(err) || 'error'
        }

    }
}

module.exports ={
    register
}