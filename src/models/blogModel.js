// const { String } = require('joi');

const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please add title'],
    },
    body: {
        type: String,
        required: [true, 'Please add content']
    },
    postedDate: String,
    imageUrl: {
        type: String,
    },
    comment:[{
			type: mongoose.Schema.Types.ObjectId,
			ref:"comments"
	}],
})
module.exports = mongoose.model("blog", schema);