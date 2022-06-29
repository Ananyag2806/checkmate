const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// Get token from header
	let token;

	// Check if token is valid
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
		try {
			const decoded = jwt.verify(token, config.get('jwtSecret'));
			req.user = decoded.user;

			next();
		} catch (err) {
			res.status(401).json({ msg: 'Token is not valid' });
		}
	}

	// Verify token
};
