const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	moves: {
		type: Array,
		required: true,
	},
	upvotes: {
		type: Number,
	},
	bestMoves: {
		type: Array,
		required: true,
	},
	flip: {
		type: Boolean,
		required: true,
	},
	whiteToPlay: {
		type: Boolean,
		required: true,
	},
});

module.exports = Posts = mongoose.model('post', PostSchema);
