const USER = require("../models/user")
const bcrypt = require("bcrypt")
require('dotenv').config({path:"../.env"})
const jwt = require("jsonwebtoken")


async function handleUserSignup(req,res){
    const hasedPassword = await bcrypt.hash(req.body.password,10)

    const user = await USER.create({
        username:req.body.username,
        email:req.body.email,
        password:hasedPassword,
        type:req.body.type
    })
    res.json(user)
}

async function handleUserSignin(req,res){
    const user = await USER.findOne({
        email:req.body.email
    })
    if(!user){
        res.json({msg:"user not found"})
    }
    else{
        if(await bcrypt.compare(req.body.password,user.password)){
           const token = await jwt.sign({user},process.env.SECRET)
           res.json(token)
        }
        else{
            res.json({msg:"invalid password"})
        }
        
    }
}

async function handleUserInfo(req,res){

    const token = req.headers.token
    if(token){
    const user = await jwt.verify(token,process.env.SECRET) 
    res.json(user)}
    
}
module.exports= {handleUserSignin,handleUserSignup,handleUserInfo}