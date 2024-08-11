const express = require("express")
require('dotenv').config()
const connectMongo = require("./connection")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const compilerRouter = require("./routes/compilerRouter")
const problemRouter = require("./routes/problemRouter")

const app = express()

//Connect to MongoDB
connectMongo(process.env.MONGOURI)

//Middlewares
app.use(cors())
app.use(express.json({extended:true}))

//Health check
app.get("/",(req,res)=>{
    res.status(200).send("Health Check")
})


//Routes
app.use("/compile",compilerRouter)
app.use("/users",userRouter)
app.use("/solve",problemRouter)


app.listen(8080,()=>console.log("server started"))
