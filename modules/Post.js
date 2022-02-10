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
	upvotes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users',
			},
		},
	],
	downvotes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users',
			},
		},
	],
	// to do - new variable called total points = upvotes.length - downvotes.length
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
