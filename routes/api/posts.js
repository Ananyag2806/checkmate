const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
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

//@route    GET api/posts
//@desc     create a post
//@access   private

router.get('/', auth, async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error for post');
	}
});

//@route    GET api/posts/:id
//@desc     get posts by ID
//@access   private

router.get('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.json(post);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.status(500).send('Server Error for post by id');
	}
});

//@route    DELETE api/posts/:id
//@desc     get posts by ID
//@access   private

router.delete('/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ msg: 'Post not found' });
		}

		// check for user
		if (req.user.id !== post.user.toString()) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await post.remove();
		res.json({ msg: 'Post removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Post not found' });
		}
		res.status(500).send('Server Error for delete by id');
	}
});

module.exports = router;
