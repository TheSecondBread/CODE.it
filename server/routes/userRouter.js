const express = require("express")
const {handleUserSignin,handleUserSignup,handleUserInfo} = require("../controllers/userController")
const userRouter = express.Router()

userRouter.post("/signup",handleUserSignup)

userRouter.post("/signin",handleUserSignin)

userRouter.get("/user",handleUserInfo)

module.exports = userRouter