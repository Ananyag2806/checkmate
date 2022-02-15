import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import underConstruct from './media/page-under-construction.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
	image: {
		width: '100%',
	},
	heading: {
		textAlign: 'center',
		margin: '40px',
	},
	info: {
		alignSelf: 'center',
	},
	button: {
		margin: '100px',
		color: 'black',
	},
	cantWait: {
		marginBottom: '20px',
	},
});

function ComingSoon() {
	const classes = useStyles();

	return (
		<div>
			<Typography
				className={classes.heading}
				style={{ margin: '40px' }}
				variant='h2'>
				Page Under Construction
			</Typography>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={12} md={6}>
					<img
						className={classes.image}
						src={underConstruct}
						alt={'Page Under Construction'}
					/>
				</Grid>
				<Grid item xs={12} md={6} className={classes.info}>
					<div className={classes.info}>
						<Typography
							className={classes.cantWait}
							style={{ marginBottom: '20px' }}
							variant='h4'>
							Can't wait? Give us your email to be notified
						</Typography>
						<TextField
							id='email'
							label='email'
							variant='outlined'
							color='secondary'
							fullWidth={true}
						/>
						<Button
							style={{
								marginTop: '20px',
								padding: '10px',
								color: 'white',
								backgroundColor: 'black',
								fontSize: '15px',
								width: '120px',
							}}
							variant='contained'>
							Yes Please!
						</Button>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default ComingSoon;
