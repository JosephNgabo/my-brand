const { createUserSchema, loginUserSchema   } = require("../helpers/validation_schema");
const User=require('../models/userModel');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');
const { json } = require("express");


const createNewUser= async(req, res)=>{
    try {
    const validationResult = await createUserSchema.validateAsync(req.body);
    const {username, email, password} = req.body
        const userExist=await User.findOne({email:email})
        if(userExist)
        
       return res.status(400).json({"success":false,message:"user email already exist"})
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,salt)
       
       const newUser= await User.create({
            username:validationResult.username,
            email:validationResult.email,
            password:hashedPassword,
            role:'visitor'   
            
        })  
        
         res.status(201).json({success:true,
            user:newUser 
        })
        User.save()
        .then(user=>res.status(201).json({"success":true,
        "user":{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)
        }}))
        console.log(err)
    }
catch (error) {
        res.status(400).json({"success":false,message:error.message})
    }
}

const createNewAdmin= async(req, res)=>{
    try {
    const validationResult = await createUserSchema.validateAsync(req.body);
    const {username, email, password} = req.body
        const userExist=await User.findOne({email:email})
        if(userExist)
        
       return res.status(400).json({"success":false,message:"user email already exist"})
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,salt)
       
       const newUser= await User.create({
            username:validationResult.username,
            email:validationResult.email,
            password:hashedPassword,
            role:'admin'   
            
        })  
        
         res.status(201).json({success:true,
            user:newUser 
        })
        User.save()
        .then(user=>res.status(201).json({"success":true,
        "user":{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)
        }}))
        console.log(err)
    }
catch (error) {
        res.status(400).json({"success":false,message:error.message})
    }
}






const loginUser=async (req, res)=>{
    try {
      const valationResult = await loginUserSchema.validateAsync(req.body);
      const {email,password}=valationResult
      const user=await User.findOne({email:email})
       if(user && (await bcrypt.compare(password,user.password)))
       {
         return res.json({"success":true,user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)
        }})
       }
       else return res.json({"success":false,message:"Invalid credation"}).status(400)

    } catch (error) {
        res.json({"success":false,message:error}).status(400)
       
    }
}

const getUserInfo=(req,res)=>{
res.json({"user":req.user})
}

// generate token 
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

module.exports={
     createNewUser, createNewAdmin, loginUser, getUserInfo
}
  