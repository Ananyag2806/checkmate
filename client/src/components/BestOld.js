import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChessBoard from './ChessBoard';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const useStyles = makeStyles({
	root: {
		margin: '30px',
		display: 'grid',
		justifyContent: 'center',
		textAlign: 'center',
	},
	btnGrp: {
		justifyContent: 'center',
		marginBottom: '50px',
	},
});

function Best() {
	const [isLoading, setLoading] = useState(true);

	const [posts, setPosts] = useState([]);
	const [curPost, setCurPost] = useState(0);
	const [curMove, setCurMove] = useState(0);

	const prevPost = (curPost) => {
		curPost - 1 >= 0 && setCurPost(curPost - 1);
	};
	const nextPost = (curPost) => {
		curPost + 1 < posts.length && setCurPost(curPost + 1);
	};

	const classes = useStyles();

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get('http://localhost:5000/api/posts');

			setPosts(res.data);
			setLoading(false);
		}

		fetchData();
	}, []);

	if (isLoading) {
		return <div className='App'>Loading...</div>;
	}

	// console.log(posts[curPost].moves);

	return (
		<div className={classes.root}>
			<ChessBoard
				currentMove={curMove}
				currentPost={curPost}
				moves={posts[curPost].moves}
				bestMoves={posts[curPost].bestMoves}
				flip={posts[curPost].flip}
				whiteToPlay={posts[curPost].whiteToPlay}
				upvotes={posts[curPost].upvotes}
				downvotes={posts[curPost].downvotes}
			/>

			<ButtonGroup
				color='primary'
				aria-label='outlined primary button group'
				className={classes.btnGrp}>
				<Button
					onClick={() => {
						setCurMove(0);
						prevPost(curPost);
					}}>
					<ChevronLeftIcon />
					Back
				</Button>
				<Button
					onClick={() => {
						setCurMove(0);
						nextPost(curPost);
					}}>
					Next
					<ChevronRightIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default Best;
