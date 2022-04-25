const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

//connect database
connectDB();

//Init Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('API running'));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
	next();
});

// This is for Cors, no need of cors. Delete cors while cleanup

// app.get('/', (req, res) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Allow-Credentials', 'true');
// 	res.setHeader('Access-Control-Max-Age', '1800');
// 	res.setHeader('Access-Control-Allow-Headers', 'content-type');
// 	res.setHeader(
// 		'Access-Control-Allow-Methods',
// 		'PUT, POST, GET, DELETE, PATCH, OPTIONS'
// 	);
// });
//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/emails', require('./routes/api/emails'));
// app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
