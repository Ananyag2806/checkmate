import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './media/checkmate.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;

// 	return (
// 		<div
// 			role='tabpanel'
// 			hidden={value !== index}
// 			id={`simple-tabpanel-${index}`}
// 			aria-labelledby={`simple-tab-${index}`}
// 			{...other}>
// 			{value === index && (
// 				<Box sx={{ p: 3 }}>
// 					<Typography>{children}</Typography>
// 				</Box>
// 			)}
// 		</div>
// 	);
// }

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.number.isRequired,
// 	value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
// 	return {
// 		id: `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	};
// }

function Navbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt={'Logo'} />

			{/* <ul className={classes.list}>
				<Link to='/trending' className={classes.link}>
					<li className={classes.listItem}>Trending</li>
				</Link>
				<Link to='/best' className={classes.link}>
					<li className={classes.listItem}>Best</li>
				</Link>
				<Link to='/trending' className={classes.link}>
					<li className={classes.listItem}>Add Your Own Move</li>
				</Link>
			</ul> */}
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label='basic tabs example'>
				<Tab
					className={classes.listItem}
					to='/trending'
					component={Link}
					label='trending'
				/>
				<Tab
					className={classes.listItem}
					to='/best'
					component={Link}
					label='best'
				/>
				<Tab
					className={classes.listItem}
					to='/addYourOwn'
					component={Link}
					label='addYourOwn'
				/>
			</Tabs>

			<AccountCircleOutlinedIcon
				style={{
					fontSize: '45px',
					marginRight: '100px',
					alignSelf: 'center',
				}}
				// className={classes.profile}
			/>
		</div>
	);
}

export default Navbar;
