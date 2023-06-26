const mongoose = require('mongoose');
module.exports = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/tp12',{
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log("Mongoose is connected");
    }catch(err){
        console.log("Mongoose: ",err);
    }
}