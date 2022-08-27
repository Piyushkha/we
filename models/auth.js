const mongoose = require("mongoose")

const userScema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    Userotp:{
        type:String
    }
})

const WePickUser = mongoose.model("WePickUser",userScema);
module.exports = WePickUser;