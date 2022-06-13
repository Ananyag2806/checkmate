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
			check('heading', 'Heading is required').not().isEmpty(),
			check('caption', 'Caption is required').not().isEmpty(),
			check('moves', 'Moves are required').not().isEmpty(),
			check('bestMoves', 'Best Moves are required').not().isEmpty(),
			check('comments', 'Comments are required').not().isEmpty(),
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
				heading: req.body.heading,
				caption: req.body.caption,
				moves: req.body.moves,
				bestMoves: req.body.bestMoves,
				comments: req.body.comments,
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
//@desc     get all posts
//@access   private
// removed auth from request

router.get('/', async (req, res) => {
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
// removed auth from request

router.get('/:id', async (req, res) => {
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

//@route    PUT api/posts/upvotes/:id
//@desc     upvote a post;
//@access   private

router.put('/upvotes/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		// check if the post has alredy been upvoted
		if (
			post.upvotes.filter(
				(upvote) => upvote.user.toString() === req.user.id
			).length > 0
		) {
			post.upvotes.shift({ user: req.user.id });
		} else {
			post.upvotes.unshift({ user: req.user.id });
		}
		await post.save();
		res.json(post.upvotes.length);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error for upvote');
	}
});

//@route    PUT api/posts/downvotes/:id
//@desc     downvote a post;
//@access   private
// To do - a user can upvote and downvote a post at the same time
router.put('/downvotes/:id', auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		// // check if the post has been upvoted
		// if (
		// 	post.upvotes.filter(
		// 		(upvote) => upvote.user.toString() === req.user.id
		// 	).length > 0
		// ) {
		// 	post.upvotes.shift({ user: req.user.id });
		// }

		// check if the post has alredy been downvoted
		if (
			post.downvotes.filter(
				(downvote) => downvote.user.toString() === req.user.id
			).length > 0
		) {
			post.downvotes.shift({ user: req.user.id });
		} else {
			post.downvotes.unshift({ user: req.user.id });
		}
		await post.save();
		res.json(post.downvotes.length);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error for downvote');
	}
});

module.exports = router;
