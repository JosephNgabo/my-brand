const express = require('express');
const {getAllBlogs, createBlog, deleteBlog, getOneBlog, commentingOnBlog, updateBlog } = require('../controllers/blogController');

const { protect } = require('../middlewares/AuthMiddleWare');
const routes = express.Router();


routes.get('/',getAllBlogs);
routes.post('/add',protect,createBlog)
routes.delete('/:id',protect, deleteBlog)
routes.get('/:id', getOneBlog)
routes.post('/comment/:blog_id',protect, commentingOnBlog)
routes.patch('/update/:id',protect, updateBlog)


module.exports = routes;

