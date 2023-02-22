const mongoose= require('mongoose')

const commentschema = mongoose.Schema({
    blogId:{
        type: String,
        required:true,
    },
    username:{
        type: String,
        required: [true, 'Please fill in your name'],
    },
    comment:{
        type: String,
        required: [true, 'Please fill in your email'],
    }
})
const Comments=mongoose.model('comments', commentschema);
module.exports= Comments