const mongoose= require('mongoose')

const schema = mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please fill in your name'],
    },
    email:{
        type: String,
        required: [true, 'Please fill in your email'],
    },
    password:{
        type: String,
        required: [true, 'Inuput your email'],
    },
    role:{
        type: String,
        // required: [true, 'Please add role'],
    }
})
module.exports=mongoose.model('User', schema);