const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
	},
});

module.exports = Email = mongoose.model('email', EmailSchema);
