const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	email:{
		type: String,
		required: true,
		unique: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	password: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('User', UserSchema);
