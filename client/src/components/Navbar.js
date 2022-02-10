import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './media/checkmate.png';

const useStyles = makeStyles({
	root: {
		borderRadius: '7px',
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
		display: 'flex',
		justifyContent: 'space-between',
	},
	logo: {
		height: '85px',
		alignSelf: 'center',
		marginLeft: '10px',
	},
	list: {
		display: 'flex',
		justifyContent: 'center',
		listStyleType: 'none',
	},
	listItem: {
		margin: '35px 25px 15px 25px',
		fontSize: '23px',
		// fontFamily: 'Ubuntu',
		fontWeight: 550,
	},
	link: {
		textDecoration: 'none',
	},
	profile: {
		fontSize: '30px',
		marginRight: '171px',
		alignSelf: 'center',
		height: '30px',
	},
});

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt={'Logo'} />
			<ul className={classes.list}>
				<Link to='/trending' className={classes.link}>
					<li className={classes.listItem}>Trending</li>
				</Link>
				<Link to='/best' className={classes.link}>
					<li className={classes.listItem}>Best</li>
				</Link>
				<Link to='/trending' className={classes.link}>
					<li className={classes.listItem}>Add Your Own Move</li>
				</Link>
			</ul>
			<AccountCircleOutlinedIcon className={classes.profile} />
		</div>
	);
}

export default Navbar;
