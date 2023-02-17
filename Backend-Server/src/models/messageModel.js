const mongoose = require("mongoose")
const schema = mongoose.Schema({
	name: {
		type:String,
		required:[true,'Please add a title'],
	},
	email: {
		type:String,
		// required:[true,'Please add a content'],
	},
    phone: {
        type: String,
        // required:[true, 'Please add your phone number'],
    },
    subject: {
        type: String,
        // required: [true, 'Please add subject']
    },
	message: {
		type:String,
		// required:[true,'Please add a content'],
	},
}
)

module.exports = mongoose.model("message", schema)