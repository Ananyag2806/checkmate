import React from 'react';
import signUp from './media/signUp.png';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DividerWithText from './DividerWithText';
import { styled } from '@mui/material/styles';

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
		justifyItems: 'center',
		alignContent: 'center',
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
		width: '90%',
	},
}));

const TextFieldCustom = styled(TextField)({
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'red',
		},
		'&:hover fieldset': {
			borderColor: 'yellow',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
	},
});

function Login() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.main}>
				<div className={classes.half1}>
					<img className={classes.img} src={signUp}></img>
				</div>
				<div className={classes.half2}>
					<h2>Let's get started</h2>
					<p>Alerdy registered? Login</p>
					<Button
						className={classes.google}
						style={{
							backgroundColor: '#92E3A9',
							marginTop: '10px',
						}}
						variant='contained'>
						Sign Up with google
					</Button>

					<DividerWithText>or</DividerWithText>

					<TextFieldCustom
						id='input-with-icon-textfield'
						label='Name'
						className={classes.textField}
						style={{ marginTop: '10px' }}
						required
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AlternateEmailOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<TextFieldCustom
						id='input-with-icon-textfield'
						label='Email Address'
						className={classes.textField}
						required
						style={{ marginTop: '10px' }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<EmailOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<TextFieldCustom
						id='input-with-icon-textfield'
						label='Password'
						className={classes.textField}
						style={{ marginTop: '10px' }}
						required
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<LockOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<TextFieldCustom
						id='input-with-icon-textfield'
						label='Confirm Password'
						className={classes.textField}
						style={{ marginTop: '10px' }}
						required={true}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<LockOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>
					<Button
						style={{
							backgroundColor: '#92E3A9',
							marginTop: '10px',
						}}
						className={classes.login}
						variant='contained'>
						Register
					</Button>
				</div>
			</div>
		</div>
	);
}
export default Login;
