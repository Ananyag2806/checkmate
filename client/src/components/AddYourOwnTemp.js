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
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Typography from '@mui/material/Typography';

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

// To Do
// 1. Retrieve comments
// 2. Display comments in the next page
// 3. Come up with instructions
// 4. Backend
// 5. Login and signup page
// 6. Login with google

const useStyles = makeStyles({
	root: {
		// textAlign: 'center',
		display: 'flex',
		// justifyContent: 'center',
		marginTop: '40px',
	},
	half: {
		display: 'grid',
		margin: '20px',
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
	// pgnBox: {
	// 	width: '100%',
	// 	fontFamily: 'monospace',
	// 	fontSize: '20px',
	// },
	stepper: {
		marginBottom: '20px',
	},
	invalid: {
		color: '#EB5353',
		display: 'flex',
		alignItems: 'center',
		margin: '3px',
	},
	valid: {
		color: 'green',
		display: 'flex',
		alignItems: 'center',
		margin: '3px',
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
	const [pgn, setPgn] = useState(
		'[SetUp "1"]\n[FEN "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1"]\n\n'
	);
	const [pgnValid, setPgnValid] = useState(true);
	const [comments, setComments] = useState([]);
	const [startFen, setStartFen] = useState('');
	const [movesFen, setMovesFen] = useState([]);

	const nextMove = (curMove) => {
		curMove + 1 < movesFen.length && setCurMove(curMove + 1);
	};
	const prevMove = (curMove) => {
		curMove - 1 >= 0 && setCurMove(curMove - 1);
	};

	const done = () => {
		setPgn(game.pgn());
		game2.load(startFen); //load fen into game2
		setMovesFen([startFen]); //set it as the first move in the moves array
		const hist = game.history();
		const comms = game.delete_comments();
		setComments(comms);
		hist.map((item) => {
			// console.log(game2.move(item));
			if (console.log(game2.move(item)) === null) {
				setPgnValid(false);
				console.log('pgn incorrect');
			}
			const fen = game2.fen(); // dont be smart and put game2.fen directly in next line. doesnt work
			setMovesFen((oldArray) => [...oldArray, fen]);
		});
		console.log(game2.pgn());
	};

	const reset = () => {
		setPgn(
			'[SetUp "1"]\n[FEN "<Enter Your Starting FEN String Here>"]\n\n'
		);
		setComments([]);
		setStartFen('');
		setMovesFen([]);
		game.reset();
		game2.reset();
	};

	// console.log('PGN' + pgn);
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

	// console.log(game.move('e5'));
	// if (game.move('e5') === null) {
	// 	console.log('works for just null');
	// }

	game.load_pgn(pgn) === false && console.log('pgn invalid');
	activeStep === 1 && movesFen.length > 0 && game.load(movesFen[curMove]);
	console.log(comments);

	return (
		<div className={classes.root}>
			<div className={classes.half}>
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
				{activeStep === 1 && (
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
				)}
			</div>
			<Box sx={{ width: '100%' }}>
				<Stepper activeStep={activeStep} className={classes.stepper}>
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
							inputProps={{
								style: {
									fontSize: '15px',
									fontFamily: 'monospace',
								},
							}}
							id='pgnTxtBox'
							label='PGN'
							multiline
							fullWidth={true}
							onChange={(e) => {
								const p = e.target.value;
								const end = p.indexOf('"', 18);
								const start = 18;
								const fen = p.substring(start, end); //extract fen

								setStartFen(fen);
								//set it as startFen to validate
								// console.log('extracted FEN\n' + fen);

								setPgn(p);
								//set it as pgn for game 1

								// console.log('current fen ' + game.fen());
							}}
							value={pgn}
							minRows={8}
							maxRows={15}
						/>

						{game.validate_fen(startFen).valid === false ? (
							<Typography
								className={classes.invalid}
								variant='subtitle2'
								style={{ marginTop: '5px' }}
								gutterBottom>
								<ReportGmailerrorredOutlinedIcon />
								{game.validate_fen(startFen).error}
							</Typography>
						) : (
							<p className={classes.validString}>
								<Typography
									className={classes.valid}
									style={{ marginTop: '5px' }}
									variant='subtitle2'
									gutterBottom>
									<CheckCircleOutlineOutlinedIcon />
									FEN String Valid
								</Typography>
							</p>
						)}
						<Button variant='outlined' onClick={done}>
							Validate
						</Button>
						<Button variant='outlined' onClick={reset}>
							Reset
						</Button>
					</React.Fragment>
				)}
				{activeStep === 1 && (
					<React.Fragment>
						<Typography variant='h5'> Preview</Typography>
						{/* {comments[0].comment} */}
						{movesFen[curMove] === comments[0].fen &&
							comments[0].comment}
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
