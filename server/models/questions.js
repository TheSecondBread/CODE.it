const mongoose = require("mongoose")

const questionSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    diff:{
        type:String
    },
    question:{
        type:String,
        required:true,
        unique:true
    },
    solstatus:{
        type:String,
        default:"Not Solved"
    },
    boilercode:{
        type:Strung,
        unique:true,
        required:true
    }
})

const QUESTION = mongoose.model("question",questionSchema)

module.exports = QUESTION