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
		user_id:{
			type: mongoose.Schema.Types.ObjectId,
			// required:true,
			ref:"User",
		},
		username:{
			type:String,
			// required:true
		},
		comment:{
			type:String,
			// required:[true,'Please add a comment'],
		},
		postedDate:{
			type:String,
			// required:true
		}
	}
	],
})
module.exports = mongoose.model("blog", schema);