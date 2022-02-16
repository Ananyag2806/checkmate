import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	nav: {
		fontSize: '20px',
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
						component={Link}
						to='/trending'
						label='Trending'
						icon={<LocalFireDepartmentOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						component={Link}
						to='/best'
						label='Best'
						icon={<TrendingUpOutlinedIcon />}
					/>
					<BottomNavigationAction
						className={classes.nav}
						component={Link}
						to='/addYourOwn'
						label='Add Your Own'
						icon={<AddCircleOutlineOutlinedIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</div>
	);
}

export default NavbarSmall;
