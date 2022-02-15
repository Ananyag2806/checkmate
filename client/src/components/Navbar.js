import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './media/checkmate.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles({
	root: {
		borderRadius: '7px',
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
		display: 'flex',
		justifyContent: 'space-between',
		indicatorColor: 'black',
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
});

function Navbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt={'Logo'} />

			<Tabs
				value={value}
				onChange={handleChange}
				textColor='inherit'
				TabIndicatorProps={{ style: { background: 'black' } }}
				style={{}}
				className={classes.navTabs}>
				<Tab
					className={classes.tabItem}
					to='/trending'
					component={Link}
					label='Trending'
					disableRipple={true}
					style={{
						margin: '25px',
						marginBottom: '0',
						fontSize: '18px',
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
						margin: '25px',
						marginBottom: '0',
						fontSize: '18px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
				<Tab
					className={classes.tabItem}
					to='/addYourOwn'
					component={Link}
					label='Add Your Own'
					disableRipple={true}
					style={{
						margin: '25px',
						marginBottom: '0',
						fontSize: '18px',
						// fontFamily: 'Ubuntu',
						fontWeight: 550,
					}}
				/>
			</Tabs>

			<IconButton>
				<AccountCircleOutlinedIcon
					style={{
						fontSize: '45px',
						margin: '10px',
						alignSelf: 'center',
					}}
					// className={classes.profile}
				/>
			</IconButton>
		</div>
	);
}

export default Navbar;
