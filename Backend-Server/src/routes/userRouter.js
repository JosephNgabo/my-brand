const express=require('express')
const { createNewUser, loginUser, getUserInfo} = require('../controllers/userController')
const { protect } = require("../middlewares/AuthMiddleWare");

const router=express.Router()

router.post('/register',createNewUser)

router.post('/login',loginUser)

router.get('/info',getUserInfo)

module.exports=router