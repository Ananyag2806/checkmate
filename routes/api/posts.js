const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Post = require('../../modules/Post');
const User = require('../../modules/User');

//@route    POST api/posts
//@desc     create a post
//@access   private
router.post(
	'/',
	[
		auth,
		[
			check('moves', 'Moves are required').not().isEmpty(),
			check('bestMoves', 'bestMoves are required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id).select('-password');

			const newPost = new Post({
				user: req.user.id,
				moves: req.body.moves,
				bestMoves: req.body.bestMoves,
				flip: req.body.flip,
				whiteToPlay: req.body.whiteToPlay,
			});
			const post = await newPost.save();
			res.json(post);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error for post');
		}
	}
);

module.exports = router;
