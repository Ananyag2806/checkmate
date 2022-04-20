const express = require('express');
const router = express.Router();
const Email = require('../../modules/Email');
const { check, validationResult } = require('express-validator');

//@route    POST api/email
//@desc     post the email of user
//@access   public
router.post(
	'/',
	[check('email', 'Please include a valid email').isEmail()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const { email } = req.body;

			let emailIsPresent = await Email.findOne({ email });

			if (emailIsPresent) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Email already saved' }] });
			}

			const newEmail = new Email({
				email: req.body.email,
			});

			await newEmail.save();
			res.json(newEmail);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
