import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		display: 'flex',
	},
	loading: {
		textAlign: 'center',
		display: 'none',
	},
});

function lodr() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PacmanLoader
				className={classes.loading}
				size={20}
				color={'#A1B57D'}
			/>
		</div>
	);
}

export default lodr;
