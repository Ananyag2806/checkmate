import React from 'react';
import ChessBoard from './ChessBoard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	board: {
		margin: '30px',
		display: 'flex',
		justifyContent: 'center',
	},
});

function Best() {
	const classes = useStyles();
	return (
		<div className={classes.board}>
			<ChessBoard
				moves={[
					'r1b1kbnr/pppp1ppp/2n2q2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
					'r1b1kbnr/pppp1ppp/2n2q2/3Np3/4P3/5N2/PPPP1PPP/R1BQKB1R b KQkq - 5 4',
					'r1b1kbnr/pppp1ppp/2nq4/3Np3/4P3/5N2/PPPP1PPP/R1BQKB1R w KQkq - 6 5',
					'r1b1kbnr/pppp1ppp/2nq4/3Np3/2B1P3/5N2/PPPP1PPP/R1BQK2R b KQkq - 7 5',
					'r1b1kbnr/pppp1pp1/2nq3p/3Np3/2B1P3/5N2/PPPP1PPP/R1BQK2R w KQkq - 0 6',
				]}
			/>
		</div>
	);
}

export default Best;
