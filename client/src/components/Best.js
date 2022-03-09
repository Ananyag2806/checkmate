import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Chess from 'chess.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import axios from 'axios';

import bB from './media/bB.png';
// import bK from './media/bK.png';
// import bN from './media/bN.png';
// import bP from './media/bP.png';
// import bQ from './media/bQ.png';
// import bR from './media/bR.png';

// import wB from './media/wB.png';
// import wK from './media/wK.png';
// import wN from './media/wN.png';
// import wP from './media/wP.png';
// import wQ from './media/wQ.png';
// import wR from './media/wR.png';

import { Chessboard } from 'react-chessboard';

const useStyles = makeStyles({
	root: {
		textAlign: 'center',
		display: 'grid',
		justifyContent: 'center',
		marginTop: '40px',
	},
	button: {
		margin: '100px',
		color: 'black',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	arrow: {
		margin: '15px',
		color: '#FFB72B',
	},
	reset: {
		margin: '15px',
		color: '#003F5C',
	},
	btnGrp: {
		justifyContent: 'center',
		marginBottom: '50px',
	},
});

const Best = () => {
	const classes = useStyles();

	const [posts, setPosts] = useState([]);
	const [curPost, setCurPost] = useState(0);
	const [curPostRef, setCurPostRef] = useState({});
	const [curMove, setCurMove] = useState(0);
	const [flip, setFlip] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const chessboardRef = useRef();
	const [game, setGame] = useState(new Chess());

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get('http://localhost:5000/api/posts');

			setPosts(res.data);
			setLoading(false);
		}

		fetchData();
	}, []);

	// console.log(posts);
	console.log(posts[curPost]);
	console.log(flip);
	// console.log(curPostRef);

	const prevPost = (curPost) => {
		setCurMove(0);
		curPost - 1 >= 0 && setCurPost(curPost - 1);
	};
	const nextPost = (curPost) => {
		setCurMove(0);
		curPost + 1 < posts.length && setCurPost(curPost + 1);
	};
	const nextMove = (curMove) => {
		curMove + 1 < posts[curPost].moves.length && setCurMove(curMove + 1);
	};
	const prevMove = (curMove) => {
		curMove - 1 >= 0 && setCurMove(curMove - 1);
	};
	const pieces = [
		'wP',
		'wN',
		'wB',
		'wR',
		'wQ',
		'wK',
		'bP',
		'bN',
		'bB',
		'bR',
		'bQ',
		'bK',
	];

	const customPieces = () => {
		const returnPieces = {};
		pieces.map((p) => {
			returnPieces[p] = ({ squareWidth }) => (
				<img
					style={{ width: squareWidth, height: squareWidth }}
					// src={`/media/${p}.png`}
					src={`https://react-chessboard.com/media/${p}.png`}
					alt={p}
				/>
			);
			return null;
		});
		return returnPieces;
	};
	if (isLoading) {
		return <div className='App'>Loading...</div>;
	}
	game.load(posts[curPost].moves[curMove]);
	return (
		<div className={classes.root}>
			<Chessboard
				id='RandomVsRandom'
				boardWidth={
					window.screen.width < 600 ? 0.9 * window.screen.width : 560
				}
				arePiecesDraggable={false}
				position={game.fen()}
				animationDuration={200}
				customBoardStyle={{
					borderRadius: '4px',
					boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
				}}
				boardOrientation={posts[curPost].flip ? 'black' : 'white'}
				customDarkSquareStyle={{ backgroundColor: '#A1B57D' }}
				// customDarkSquareStyle={{ backgroundColor: '#D6E5FA' }}
				customLightSquareStyle={{ backgroundColor: '#F7F7EE' }}
				customPieces={customPieces()}
				ref={chessboardRef}
			/>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<IconButton>
					<ArrowUpwardOutlinedIcon
						style={{ color: '#00C897', fontSize: '30px' }}
					/>
				</IconButton>
				<h3 style={{ alignSelf: 'center' }}>
					{posts[curPost].upvotes - posts[curPost].downvotes}
				</h3>
				<IconButton>
					<ArrowDownwardOutlinedIcon
						style={{ color: '#D82148', fontSize: '30px' }}
					/>
				</IconButton>
				<IconButton onClick={() => prevMove(curMove)}>
					<ArrowBackIosNewIcon className={classes.arrow} />
				</IconButton>
				<IconButton onClick={() => setCurMove(0)}>
					<ReplayRoundedIcon className={classes.reset} />
				</IconButton>
				<IconButton onClick={() => nextMove(curMove)}>
					<ArrowForwardIosIcon className={classes.arrow} />
				</IconButton>
			</div>
			<ButtonGroup
				color='primary'
				aria-label='outlined primary button group'
				className={classes.btnGrp}>
				<Button
					onClick={() => {
						prevPost(curPost);
					}}>
					<ChevronLeftIcon />
					Back
				</Button>
				<Button
					onClick={() => {
						nextPost(curPost);
					}}>
					Next
					<ChevronRightIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default Best;
