import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { css } from '@emotion/react';
import Chess from 'chess.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

const override = css`
	position: fixed;
	top: 50%;
	left: 45%;
	transform: translate(-50%, -50%);
`;

const useStyles = makeStyles({
	root: {
		// textAlign: 'center',
		display: 'flex',
		// justifyContent: 'center',
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
	pgnBox: {
		width: '100%',
	},
});

const steps = [
	// 'Set up the starting Position',
	'Copy PGN',
	'Review and Post :)',
];

const AddYourOwnTemp = () => {
	const classes = useStyles();

	const [curMove, setCurMove] = useState(0);
	const [flip, setFlip] = useState(false);
	const chessboardRef = useRef();
	const [game, setGame] = useState(new Chess()); //this game is visible on the screen
	const [game2, setGame2] = useState(new Chess()); //this game is not visible and is here for adding moves in array
	const [pgn, setPgn] = useState('');
	const movesPgn = [];
	const [movesFen, setMovesFen] = useState([]);
	// console.log(posts);
	// console.log(posts[curPost]);
	// console.log(flip);
	// console.log(curPostRef);

	// console.log(game.load_pgn(pgn));
	game.load_pgn(pgn);
	// console.log(game.history());
	// console.log(pgn);

	// useEffect(() => {
	// 	setMovesFen([...movesFen, game.fen()]);
	// }, [pgn]);

	console.log(movesFen);
	// console.log(movesPgn);
	// console.log(movesFen);
	// console.log(game.fen());

	const nextMove = (curMove) => {
		curMove + 1 < movesFen.length && setCurMove(curMove + 1);
		//                      2 - 0, 1
		console.log(curMove);
	};
	const prevMove = (curMove) => {
		curMove - 1 >= 0 && setCurMove(curMove - 1);
		console.log(curMove);
	};

	const done = () => {
		const hist = game.history();
		hist.map((item) => {
			console.log(game2.move(item));
			const fen = game2.fen();

			setMovesFen((oldArray) => [...oldArray, fen]);
			console.log(fen);
			console.log(item);
		});
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

	// Stepper
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const displayActiveStep = () => {
		if (activeStep === 0) {
			return <div>Active step 1</div>;
		} else if (activeStep === 1) {
			return <div>Active step 2</div>;
		} else {
			return <div>Active step 3</div>;
		}
	};

	console.log(activeStep);
	activeStep === 1 && movesFen.length > 0 && game.load(movesFen[curMove]);

	return (
		<div className={classes.root}>
			<Chessboard
				boardWidth={
					// window.screen.width < 600 ? 0.9 * window.screen.width : 560
					450
				}
				arePiecesDraggable={false}
				animationDuration={200}
				position={game.fen()}
				customBoardStyle={{
					borderRadius: '4px',
					boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
				}}
				// boardOrientation={posts[curPost].flip ? 'black' : 'white'}
				customDarkSquareStyle={{ backgroundColor: '#A1B57D' }}
				customLightSquareStyle={{ backgroundColor: '#F7F7EE' }}
				customPieces={customPieces()}
				ref={chessboardRef}
			/>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
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

			<Box sx={{ width: '100%' }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				{activeStep === 0 && (
					<React.Fragment>
						<TextField
							id='outlined-multiline-flexible'
							label='PGN'
							multiline
							className={classes.pgnBox}
							onChange={(e) => {
								setPgn(e.target.value);
							}}
							minRows={8}
							maxRows={15}
						/>
						<Button variant='outlined' onClick={done}>
							Done
						</Button>
					</React.Fragment>
				)}
				{activeStep === 1 && (
					<React.Fragment>
						<Button variant='outlined'>Preview</Button>
					</React.Fragment>
				)}
				{activeStep === steps.length ? (
					<React.Fragment></React.Fragment>
				) : (
					<React.Fragment>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								pt: 2,
							}}>
							<Button
								color='inherit'
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />

							<Button onClick={handleNext}>
								{activeStep === steps.length - 1
									? 'Finish'
									: 'Next'}
							</Button>
						</Box>
					</React.Fragment>
				)}
			</Box>
		</div>
	);
};

export default AddYourOwnTemp;
