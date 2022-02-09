import { useRef, useState, useEffect } from 'react';
import Chess from 'chess.js';
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

export default function ChessBoard({ moves }) {
	const [currMove, setCurrMove] = useState(0);
	// console.log(currMove + ' outer');
	const chessboardRef = useRef();
	const [game, setGame] = useState(new Chess());

	game.load(moves[currMove]);

	function safeGameMutate(modify) {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	}

	const nextMove = (currMove) => {
		currMove + 1 < moves.length && setCurrMove(currMove + 1);
		// console.log(currMove);
	};
	const prevMove = (currMove) => {
		currMove - 1 >= 0 && setCurrMove(currMove - 1);
		// console.log(currMove);
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
	return (
		<div>
			<Chessboard
				id='RandomVsRandom'
				arePiecesDraggable={false}
				position={game.fen()}
				animationDuration={200}
				customBoardStyle={{
					borderRadius: '4px',
					boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
				}}
				customDarkSquareStyle={{ backgroundColor: '#A1B57D' }}
				// customDarkSquareStyle={{ backgroundColor: '#D6E5FA' }}
				customLightSquareStyle={{ backgroundColor: '#F7F7EE' }}
				customPieces={customPieces()}
				ref={chessboardRef}
			/>

			<button onClick={() => prevMove(currMove)}>Previous</button>
			<button onClick={() => setCurrMove(0)}>Reset</button>
			<button onClick={() => nextMove(currMove)}>Next</button>
		</div>
	);
}
