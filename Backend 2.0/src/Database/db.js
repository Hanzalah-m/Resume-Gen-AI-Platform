const mongoose = require("mongoose")
require("dotenv").config();


async function connectDB(){
    try{
    await mongoose.connect(process.env.DB_URI)
    console.log("Database connected")
    }
    catch (err){
        console.log(err)
    }
}

module.exports = connectDB