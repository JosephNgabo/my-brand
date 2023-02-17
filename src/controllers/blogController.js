const { blogSchema, updateBlogSchema} =require('../helpers/validation_schema')
const Blog = require('../models/blogModel')
const imageUpload = require('../helpers/photoUpload');
const { json } = require('body-parser');

var today = new Date()
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() +1).padStart(2, "0");
var yyyy = today.getFullYear();
today= dd+ "/" + mm + "/" + yyyy;

exports.getAllBlogs = function(req, res){
    Blog.find().then(result=>{
        res.send(result);
    })
}
exports.createBlog = async function(req, res){
    try {
        const {title, body}=req.body
        console.log(title, body)
        const validationResult = await blogSchema.validateAsync(req.body);
        
        if(req.user.role.toString()=='admin')
        {
                const blog= new Blog({
                    title:validationResult.title,
                    body:validationResult.body,
                    postedDate: today,
                    imageUrl: '',
                })
                if(req.files) {
                const image = await imageUpload(req);
                blog.imageUrl = image.url
                }
            blog.save()
            .then(result=>{
                res.json(result)
                
            })
            .catch(error=>console.log(error))
    } 
    else 
    {
        res.json({message:'User Not Authorized'}).status(401)
    }
    }
    catch (err) {
        res.status(500).json(err)
    }
};
exports.deleteBlog = (req, res) =>{
    const {id} = req.params
    {
        Blog.deleteOne({_id:id})
        .then(result=>{
            res.json(result);
            res.send('blog deleted')
        })
        .catch(error=>{
            res.status(401).json({error:'blog doesn\'t exist'})
        })
    }
};
exports.updateBlog = async (req, res)=>{
    const{id} =req.params
    const {title, body} = req.body;
    try{
        const validateResult = await updateBlogSchema.validateAsync({Blog_id:id,title,body});
        if(req.user.role.toString()=='admin');
        {
        Blog.findOne({_id:id})
        .then(Blog=>{
            if(title)
            Blog.title=title;
            if(body)
            Blog.body=body
            Blog.save()
            .then(result=>res.status(200).json(result))
            .catch(error=>console.log(error))
        })
        .catch(error=>{
            res.status(404).json({error:'article doesn\'t exist!'})
        })
    }
    }
    catch(err){
res.json(err)
    }
}
exports.getOneBlog = (req, res)=>{
    const {id} = req.params
    {
 Blog.findOne({_id:id})
    .then(result=>{
        if(result)
        res.json(result)
        else
        res.status(404).json('blog does not exist')
    })
    .catch(error=>{
        res.status(500).json({error:error.message})
    })
    }
}
exports.commentingOnBlog=(req,res)=>{
    const {comment}=req.body
    const { blog_id}=req.params
    const user_id=req.user._id

    const newComment={
        user:user_id,
        username:req.user.username,
        comment,
        postedDate: today
    }

    Blog.findOne({_id:blog_id})
    .then(article=>{
        console.log(article);
        if(article)
        {
            article.comment.push(newComment);
            article.save()
            .then(result=>res.json(result))
            .catch(error=>res.status(500).json({error:error.message}))
        }
        else res.status(404).json({error:"article doesn't exist"})
    })
    .catch(error=>res.status(500).json({error:error.message}))
}

