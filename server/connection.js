const mongoose = require("mongoose")
async function connectMongo(url){
    await mongoose.connect(url)
    .then(console.log("Mongo Connected"))
}

module.exports = connectMongo