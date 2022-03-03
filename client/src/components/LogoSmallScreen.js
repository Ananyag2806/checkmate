import React from 'react';
import logo from './media/checkmate.png';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '7px',
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
		display: 'flex',
		justifyContent: 'center',
	},

	logo: {
		justifyContent: 'center',
	},
}));

function LogoSmallScreen() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt={'Logo'} />
			{/* <IconButton>
				<AccountCircleOutlinedIcon
					style={{
						fontSize: '25px',
						margin: '5px',
						alignSelf: 'center',
					}}
				/>
			</IconButton> */}
		</div>
	);
}

export default LogoSmallScreen;
