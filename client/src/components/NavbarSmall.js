import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	nav: {
		fontSize: '20px',
		padding: '0px',
	},
	navBar: {
		width: '100%',
		position: 'fixed',
		bottom: '0px',
		zIndex: 999,
		boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
	},
});

function NavbarSmall() {
	const [value, setValue] = React.useState(0);
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.navBar}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}>
					<BottomNavigationAction
						className={classes.nav}
						style={{ padding: '0px', minWidth: '0px' }}
						component={Link}
						to='/'
						label='Home'
						icon={<HomeOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						style={{ padding: '0px', minWidth: '0px' }}
						component={Link}
						to='/trending'
						label='Trending'
						icon={<LocalFireDepartmentOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						style={{ padding: '0px', minWidth: '0px' }}
						component={Link}
						to='/best'
						label='Best'
						icon={<TrendingUpOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						style={{ padding: '0px', minWidth: '0px' }}
						component={Link}
						to='/addYourOwn'
						label='Add Yours'
						icon={<AddCircleOutlineOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						style={{ padding: '0px', minWidth: '0px' }}
						component={Link}
						to='/addYourOwn'
						label='Profile'
						icon={<AccountCircleOutlinedIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</div>
	);
}

export default NavbarSmall;
