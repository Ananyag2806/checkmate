import { useRef, useState, useEffect } from 'react';
import Chess from 'chess.js';

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

	// useEffect(() => {
	// 	console.log('useEffect called ' + currMove + ' ' + moves[currMove]);
	// 	const didItLoad = game.load(moves[currMove]);
	// 	console.log(didItLoad);
	// }, [currMove]);

	return (
		<div>
			<Chessboard
				id='RandomVsRandom'
				arePiecesDraggable={false}
				position={game.fen()}
				animationDuration={200}
				ref={chessboardRef}
			/>

			<button onClick={() => prevMove(currMove)}>Previous</button>
			<button onClick={() => setCurrMove(0)}>Reset</button>
			<button onClick={() => nextMove(currMove)}>Next</button>
		</div>
	);
}
