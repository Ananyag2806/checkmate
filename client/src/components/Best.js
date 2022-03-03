import React from 'react';
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
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ChessBoard
				moves={[
					'r1b1kbnr/pppp1ppp/2n2q2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
					'r1b1kbnr/pppp1ppp/2n2q2/3Np3/4P3/5N2/PPPP1PPP/R1BQKB1R b KQkq - 5 4',
					'r1b1kbnr/pppp1ppp/2nq4/3Np3/4P3/5N2/PPPP1PPP/R1BQKB1R w KQkq - 6 5',
					'r1b1kbnr/pppp1ppp/2nq4/3Np3/2B1P3/5N2/PPPP1PPP/R1BQK2R b KQkq - 7 5',
					'r1b1kbnr/pppp1pp1/2nq3p/3Np3/2B1P3/5N2/PPPP1PPP/R1BQK2R w KQkq - 0 6',
				]}
				bestMoves={[3, 4]}
				flip={true}
				whiteToPlay={true}
				upvotes={2}
				downvotes={0}
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
