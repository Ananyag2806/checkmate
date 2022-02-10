const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	karma: {
		type: Number,
	},
	rating: {
		type: String,
	},
	avatar: {
		type: String,
	},
});

module.exports = User = mongoose.model('user', UserSchema);
