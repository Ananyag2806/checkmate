import React from 'react';
import login from './media/login.png';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Divider from '@mui/material/Divider';
import DividerWithText from './DividerWithText';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#92E3A9',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		height: '100vh',
	},
	main: {
		display: 'flex',
		width: '90%',
		margin: 'auto',
	},
	half1: {
		width: '50%',
		background: '#A4FFBE',
		justifyContent: 'center',
		display: 'grid',
		borderTopLeftRadius: '7px',
		borderBottomLeftRadius: '7px',
	},
	half2: {
		width: '50%',
		padding: '40px',
		background: '#ffffff',
		display: 'grid',
		borderTopRightRadius: '7px',
		borderBottomRightRadius: '7px',
	},
	textField: {
		margin: '15px',
	},
	google: {
		backgroundColor: '#92E3A9',
	},
	login: {},

	img: {
		height: '400px',
	},
}));

function Login() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.main}>
				<div className={classes.half1}>
					<img className={classes.img} src={login}></img>
				</div>
				<div className={classes.half2}>
					<h2>Let's get started</h2>
					<p>First time here? Register</p>
					<Button className={classes.google} variant='contained'>
						Sign up with google
					</Button>

					<DividerWithText>or</DividerWithText>

					<TextField
						id='input-with-icon-textfield'
						label='Email Address'
						className={classes.textField}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<EmailOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<TextField
						id='input-with-icon-textfield'
						label='Password'
						className={classes.textField}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<LockOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<Button className={classes.login} variant='contained'>
						Login
					</Button>
				</div>
			</div>
		</div>
	);
}
export default Login;
