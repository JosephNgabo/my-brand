const express=require('express')
const { createNewUser, loginUser, getUserInfo, createNewAdmin} = require('../controllers/userController')
const { protect } = require("../middlewares/AuthMiddleWare");

const router=express.Router()

router.post('/register',createNewUser)
router.post('/register-admin',createNewAdmin)

router.post('/login',loginUser)

router.get('/info',getUserInfo)

module.exports=router