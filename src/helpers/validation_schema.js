const { ref } = require('joi')
const joi=require('joi')

const blogSchema=joi.object({
    title:joi.string().min(10).required(),
    body:joi.string().min(20).required()
})

const updateBlogSchema=joi.object({
    Blog_id:joi.string().required(),
    title:joi.string().min(10),
    body:joi.string().min(20)
})

const createUserSchema=joi.object({
    username:joi.string().required().min(4),
    email:joi.string().email().required(), 
    password:joi.string().min(6).required(),
    confirm_password:joi.ref('password'),
})
const loginUserSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
})
const messageSchema=joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    message:joi.string().min(6).required(),
    subject:joi.string().min(6).required(),
    phone:joi.string().min(6).required(),

})

module.exports={
    blogSchema,updateBlogSchema,createUserSchema,loginUserSchema, messageSchema
}