const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    solvedproblems:{
        type:[String],
        required:false
    },
    type:{
        type:String,
        required:false,
        default:"student"
    }
})

const USER = mongoose.model("users",userSchema)

module.exports = USER