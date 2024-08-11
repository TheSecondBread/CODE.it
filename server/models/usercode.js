const mongoose = require("mongoose")

const codeSchema = mongoose.Schema({
    language:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    },
    problemId:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    }
})

const CODE = mongoose.model("code",codeSchema)