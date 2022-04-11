import React from 'react';
import { makeStyles } from '@mui/styles';
import post from './media/post.png';
import top from './media/top.png';
import best from './media/best.png';
import like from './media/like.png';
import chessImg from './media/chess4.png';
import chessBack from './media/chess11.jpg';
import chessFeat from './media/chess3.png';
import { width } from '@mui/system';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: 'end',
		fontSize: '70px',
		fontWeight: '700',
		[theme.breakpoints.down('900')]: {
			fontSize: '50px',
		},
		[theme.breakpoints.down('600')]: {
			textAlign: 'center',
			width: '100%',
		},
	},
	hero: {
		display: 'flex',
		[theme.breakpoints.down('600')]: {
			display: 'block',
		},
	},
	grid2: {
		width: '50%',
		alignSelf: 'center',
		[theme.breakpoints.down('600')]: {
			width: '100%',
		},
	},
	features: {
		marginTop: '20px',
		marginBottom: '20px',
	},
	image: {
		width: '100%',
	},
	grid4: {
		display: 'grid',
		justifyContent: 'center',
	},

	quoteSec: {
		padding: '9%',
		// backgroundImage: `url(${chessBack})`,
		background: '#000000',
	},
	quote: {
		fontWeight: 400,
		fontStyle: 'italic',
		fontSize: '30px',
		color: '#ffffff',
	},
	author: {
		fontWeight: 400,
		fontSize: '25px',
		fontStyle: 'italic',
		textAlign: 'right',
		color: '#ffffff',
	},
	intro: {
		fontWeight: 300,
		fontSize: '20px',
		color: '#cccccc',
	},
	howItWorks: {
		fontSize: '30px',
		textAlign: 'center',
		margin: '20px',
		fontWeight: 500,
	},

	featImg: {
		height: '150px',
		justifySelf: 'center',
	},
	featText: {
		margin: '10px',
		fontSize: '20px',
		color: '#696969',
		textAlign: 'center',
	},
}));

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

			<div className={classes.quoteSec}>
				<h2 className={classes.quote}>
					"Whenever you play chess, your aim should not be to win, it
					should be to create something beautiful on the chess board."
				</h2>
				<h3 className={classes.author}>- Someone very famous</h3>
				<h4 className={classes.intro}>
					<br />
					Here at Checkmate you can share such brilliant games with
					each other so that we all can experience the satisfaction of
					playing such a game.
				</h4>
			</div>

			<h3 className={classes.howItWorks}>How it Works</h3>
			<div className={classes.features}>
				<Grid container spacing={2}>
					<Grid className={classes.grid4} item xs={12} sm={6} md={3}>
						<img className={classes.featImg} src={post} />
						<p className={classes.featText}>
							Post your favourite games and see what people think
							about it.
							<br />
							Coming Soon!
						</p>
					</Grid>
					<Grid className={classes.grid4} item xs={12} sm={6} md={3}>
						<img className={classes.featImg} src={like} />
						<p className={classes.featText}>
							See what others are posting and upvote / downvote
							the games.
						</p>
					</Grid>
					<Grid className={classes.grid4} item xs={12} sm={6} md={3}>
						<img className={classes.featImg} src={top} />
						<p className={classes.featText}>
							The best games automatically come on top so always
							get the best content.
						</p>
					</Grid>
					<Grid className={classes.grid4} item xs={12} sm={6} md={3}>
						<img className={classes.featImg} src={best} />
						<p className={classes.featText}>
							See the best games of all time played by chess
							legends.
						</p>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Landing;
