import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './media/checkmate.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles((theme) => ({
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
	tabContainer: {
		display: 'flex',
		textColor: '',
	},
	navTabs: {
		margin: 0,
		padding: 0,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	tabItem: {
		margin: '35px 25px 15px 25px',
		fontSize: '23px',
		// fontFamily: 'Ubuntu',
		fontWeight: 550,
		display: 'flex',
	},
	indicator: {
		backgroundColor: 'black',
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
}));

function Navbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt={'Logo'} />
			{/* <div className={classes.navTabs}> */}
			<Tabs
				value={value}
				onChange={handleChange}
				textColor='inherit'
				TabIndicatorProps={{ style: { background: 'black' } }}
				style={{}}>
				<Tab
					className={classes.tabItem}
					to='/'
					component={Link}
					label='Home'
					disableRipple={true}
					style={{
						margin: '20px',
						marginBottom: '0',
						fontSize: '15px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
				<Tab
					className={classes.tabItem}
					to='/trending'
					component={Link}
					label='Trending'
					disableRipple={true}
					style={{
						margin: '20px',
						marginBottom: '0',
						fontSize: '15px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
				<Tab
					className={classes.tabItem}
					to='/best'
					component={Link}
					label='Best'
					disableRipple={true}
					style={{
						margin: '20px',
						marginBottom: '0',
						fontSize: '15px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
				<Tab
					className={classes.tabItem}
					to='/addYourOwn'
					component={Link}
					label='Add Yours'
					disableRipple={true}
					style={{
						margin: '20px',
						marginBottom: '0',
						fontSize: '15px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
			</Tabs>
			{/* </div> */}
			<IconButton>
				<AccountCircleOutlinedIcon
					style={{
						fontSize: '45px',
						margin: '10px',
						alignSelf: 'center',
					}}
					onClick={handleClick}
					// className={classes.profile}
				/>
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<MenuItem to='/trending' component={Link} onClick={handleClose}>
					Profile
				</MenuItem>
				<MenuItem to='/login' component={Link} onClick={handleClose}>
					Login
				</MenuItem>
				<MenuItem to='/signUp' component={Link} onClick={handleClose}>
					Sign Up
				</MenuItem>
			</Menu>
		</div>
	);
}

export default Navbar;
