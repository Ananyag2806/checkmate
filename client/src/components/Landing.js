import React from 'react';
import { makeStyles } from '@mui/styles';
import chessImg from './media/chess4.png';
import chessFeat from './media/chess3.png';
import { width } from '@mui/system';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
	heading: {
		textAlign: 'end',
		fontSize: '70px',
		fontWeight: '700',
	},
	hero: {
		display: 'flex',
	},
	grid2: {
		width: '50%',
		alignSelf: 'center',
	},
	image: {
		width: '100%',
	},
	grid4: {
		width: '25%',
		alignSelf: 'center',
	},
	features: {
		display: 'flex',
	},
	featImg: {
		height: '150px',
	},
});

function Landing() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.hero}>
				<div className={classes.grid2}>
					<h2 className={classes.heading}>
						See, Share and Show Off Your Best Games
					</h2>
				</div>
				<div className={classes.grid2}>
					<img className={classes.image} src={chessImg} />
				</div>
			</div>

			<div className={classes.features}>
				<div className={classes.grid4}>
					<img className={classes.featImg} src={chessFeat} />
					<p>
						People can post their games and others can
						upvote/downvote the posts, making the best ones always
						come up at the top.
					</p>
				</div>
				<div className={classes.grid4}>
					<img className={classes.featImg} src={chessFeat} />
					<p>
						People can post their games and others can
						upvote/downvote the posts, making the best ones always
						come up at the top.
					</p>
				</div>
				<div className={classes.grid4}>
					<img className={classes.featImg} src={chessFeat} />
					<p>
						People can post their games and others can
						upvote/downvote the posts, making the best ones always
						come up at the top.
					</p>
				</div>
				<div className={classes.grid4}>
					<img className={classes.featImg} src={chessFeat} />
					<p>
						People can post their games and others can
						upvote/downvote the posts, making the best ones always
						come up at the top.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
