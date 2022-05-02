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
});

export default function ChessBoard({
	currentMove = 0,
	currentPost,
	moves,
	bestMoves,
	flip,
	whiteToPlay,
	upvotes,
	downvotes,
}) {
	const classes = useStyles();

	const color = flip ? 'black' : 'white';

	const [currMove, setCurrMove] = useState(0);
	// console.log(currMove + ' outer');
	const chessboardRef = useRef();
	const [game, setGame] = useState(new Chess());

	const refreshGame = () => {
		setCurrMove(0);
		game.load(moves[currMove]);
	};

	useEffect(() => {
		refreshGame();
	}, [currentPost]);

	function safeGameMutate(modify) {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	}
	console.log(currMove);

	const nextMove = (currMove) => {
		currMove + 1 < moves.length && setCurrMove(currMove + 1);
	};
	const prevMove = (currMove) => {
		currMove - 1 >= 0 && setCurrMove(currMove - 1);
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
	game.load(moves[currMove]);
	return (
		<div>
			<Chessboard
				style={{ textAlign: 'center' }}
				className={classes.root}
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
				boardOrientation={flip ? 'black' : 'white'}
				customDarkSquareStyle={{ backgroundColor: '#112B3C' }}
				// customDarkSquareStyle={{ backgroundColor: '#D6E5FA' }}
				customLightSquareStyle={{ backgroundColor: '#000000' }}
				customPieces={customPieces()}
				ref={chessboardRef}
			/>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<IconButton>
					<ArrowUpwardOutlinedIcon
						style={{ color: '#00C897', fontSize: '30px' }}
					/>
				</IconButton>
				<h3 style={{ alignSelf: 'center' }}>{upvotes - downvotes}</h3>
				<IconButton>
					<ArrowDownwardOutlinedIcon
						style={{ color: '#D82148', fontSize: '30px' }}
					/>
				</IconButton>
				<IconButton onClick={() => prevMove(currMove)}>
					<ArrowBackIosNewIcon className={classes.arrow} />
				</IconButton>
				<IconButton onClick={() => setCurrMove(0)}>
					<ReplayRoundedIcon className={classes.reset} />
				</IconButton>
				<IconButton onClick={() => nextMove(currMove)}>
					<ArrowForwardIosIcon className={classes.arrow} />
				</IconButton>
			</div>
		</div>
	);
}
