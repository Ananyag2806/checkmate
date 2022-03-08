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

	const [post, setPost] = useState({});
	const [data, setData] = useState({});
	const [moves, setMoves] = useState([]);
	const [bestMoves, setBestMoves] = useState([]);
	const [flip, setFlip] = useState();
	const [whiteToPlay, setWhiteToPlay] = useState();
	const [upvotes, setUpvotes] = useState([]);
	const [downvotes, setDownvotes] = useState([]);

	const classes = useStyles();
	console.log(moves);
	console.log(post);

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:5000/api/posts/622709fec3864e9049a6ba0a')
	// 		.then((res) => {
	// 			setPost(res.data);
	// 		})
	// 		.catch((e) => {
	// 			console.log(e);
	// 		});
	// }, []);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				'http://localhost:5000/api/posts/622709fec3864e9049a6ba0a'
			);

			setPost(res.data);
			setLoading(false);
		}

		fetchData();
	}, []);

	if (isLoading) {
		return <div className='App'>Loading...</div>;
	}

	return (
		<div className={classes.root}>
			<ChessBoard
				moves={post.moves}
				bestMoves={post.bestMoves}
				flip={post.flip}
				whiteToPlay={post.whiteToPlay}
				upvotes={post.upvotes}
				downvotes={post.downvotes}
			/>

			<ButtonGroup
				color='primary'
				aria-label='outlined primary button group'
				className={classes.btnGrp}>
				<Button>
					<ChevronLeftIcon />
					Back
				</Button>
				<Button>
					Next
					<ChevronRightIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default Best;
