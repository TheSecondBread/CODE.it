const express = require("express")
const {handleCompile}=require("../controllers/compilerController")
const compilerRouter = express.Router()

compilerRouter.post("/",handleCompile)

module.exports = compilerRouter