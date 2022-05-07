import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Chess from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { makeStyles } from '@mui/styles';
import Divider from './DividerWithText';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
	root: {
		display: 'flex',
	},
	half: {
		display: 'block',
	},
	fenTf: {
		margin: '10px',
		width: '100%',
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
	setPosBtn: {
		color: 'green',
	},
});

const steps = [
	'Set up the starting Position',
	'Add moves and stuff',
	'Post :)',
];

const AddYourOwn = () => {
	const classes = useStyles();
	const chessboardRef = useRef();

	const [game, setGame] = useState(new Chess());
	const [startPos, setStartPos] = useState('');
	const [pgn, setPgn] = useState('');

	const [moveFrom, setMoveFrom] = useState('');

	const [rightClickedSquares, setRightClickedSquares] = useState({});
	const [moveSquares, setMoveSquares] = useState({});
	const [optionSquares, setOptionSquares] = useState({});

	// Chess Board
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

	function safeGameMutate(modify) {
		setGame((g) => {
			const update = { ...g };
			modify(update);
			return update;
		});
	}

	function getMoveOptions(square) {
		const moves = game.moves({
			square,
			verbose: true,
		});
		if (moves.length === 0) {
			return;
		}

		const newSquares = {};
		moves.map((move) => {
			newSquares[move.to] = {
				background:
					game.get(move.to) &&
					game.get(move.to).color !== game.get(square).color
						? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
						: 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
				borderRadius: '50%',
			};
			return move;
		});
		newSquares[square] = {
			background: 'rgba(255, 255, 0, 0.4)',
		};
		setOptionSquares(newSquares);
	}

	function onSquareClick(square) {
		setRightClickedSquares({});

		function resetFirstMove(square) {
			setMoveFrom(square);
			getMoveOptions(square);
		}

		// from square
		if (!moveFrom) {
			resetFirstMove(square);
			return;
		}

		// attempt to make move
		const gameCopy = { ...game };
		console.log(gameCopy);
		const move = gameCopy.move({
			from: moveFrom,
			to: square,
			promotion: 'q', // always promote to a queen for example simplicity
		});
		setGame(gameCopy);

		// if invalid, setMoveFrom and getMoveOptions
		if (move === null) {
			resetFirstMove(square);
			return;
		}

		setMoveFrom('');
		setOptionSquares({});
	}

	function onSquareRightClick(square) {
		const colour = 'rgba(0, 0, 255, 0.4)';
		setRightClickedSquares({
			...rightClickedSquares,
			[square]:
				rightClickedSquares[square] &&
				rightClickedSquares[square].backgroundColor === colour
					? undefined
					: { backgroundColor: colour },
		});
	}
	pgn !== '' && console.log(game.load_pgn(pgn));
	console.log(game.history());
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
	// Table
	function createData(SrNo, White, Black, Caption) {
		return { SrNo, White, Black, Caption };
	}

	const rows = [
		createData(1, 159, 6.0, 'Frozen yoghurt'),
		createData(2, 237, 9.0, 'Ice cream sandwich'),
		createData(3, 262, 16.0, 'Eclair'),
		createData(4, 305, 3.7, 'Eclair'),
		createData(5, 356, 16.0, 'Eclair'),
	];

	// TextField of table
	// const [moves, setMoves] = useState([]);
	// const [captions, setCaptions] = useState([]);

	// game.validate_fen(startPos).valid && game.load(startPos);

	return (
		<div className={classes.root}>
			<Chessboard
				animationDuration={200}
				arePiecesDraggable={false}
				// boardWidth={boardWidth}
				position={game.fen()}
				onSquareClick={onSquareClick}
				onSquareRightClick={onSquareRightClick}
				customBoardStyle={{
					borderRadius: '4px',
					boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
				}}
				// boardOrientation={posts[curPost].flip ? 'black' : 'white'}
				customDarkSquareStyle={{ backgroundColor: '#A1B57D' }}
				customLightSquareStyle={{ backgroundColor: '#F7F7EE' }}
				customPieces={customPieces()}
				customSquareStyles={{
					...moveSquares,
					...optionSquares,
					...rightClickedSquares,
				}}
				ref={chessboardRef}
			/>
			<div className={classes.half}>
				<Box sx={{ width: '100%' }}>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};

							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>
										{label}
									</StepLabel>
								</Step>
							);
						})}
					</Stepper>
					{activeStep === 0 && (
						<React.Fragment>
							<Typography variant='h6' gutterBottom>
								Starting Position in FEN
							</Typography>
							<TextField
								id='outlined-basic'
								label='Enter FEN String'
								variant='outlined'
								className={classes.fenTf}
								onChange={(e) => {
									setStartPos(e.target.value);
								}}
							/>
							{game.validate_fen(startPos).valid === false ? (
								<Typography
									className={classes.invalid}
									variant='subtitle2'
									style={{ marginTop: '5px' }}
									gutterBottom>
									<ReportGmailerrorredOutlinedIcon />
									{game.validate_fen(startPos).error}
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

							<Divider>or</Divider>
							<Button
								variant='outlined'
								className={classes.setPosBtn}
								style={{
									color: 'green',
									border: '1px solid green',
								}}>
								Set Position on the Board
							</Button>
						</React.Fragment>
					)}
					{activeStep === 1 && (
						<React.Fragment>
							<TableContainer component={Paper}>
								<Table
									sx={{ minWidth: 650 }}
									aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Sr. No.</TableCell>
											<TableCell>White</TableCell>
											<TableCell>Black</TableCell>
											<TableCell>Caption</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow
												key={row.White}
												sx={{
													'&:last-child td, &:last-child th':
														{ border: 0 },
												}}>
												<TableCell>
													{row.White}
												</TableCell>
												<TableCell>
													<InputBase
														sx={{ ml: 1, flex: 1 }}
														placeholder='white'
														inputProps={{
															'aria-label':
																'white',
														}}
													/>
												</TableCell>
												<TableCell>
													<InputBase
														sx={{ ml: 1, flex: 1 }}
														placeholder='Black'
														inputProps={{
															'aria-label':
																'Black',
														}}
													/>
												</TableCell>
												<TableCell>
													<InputBase
														sx={{ ml: 1, flex: 1 }}
														placeholder='Caption'
														multiline
														maxRows={4}
														inputProps={{
															'aria-label':
																'Caption',
														}}
													/>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							<Divider>or</Divider>
							<Button variant='outlined'>
								Add Positions on the Board
							</Button>
							<Divider>or</Divider>
							<TextField
								id='outlined-multiline-flexible'
								label='PGN'
								multiline
								onChange={(e) => {
									setPgn(e.target.value);
								}}
								maxRows={4}
							/>
							<Button variant='outlined'>Load PGN</Button>
						</React.Fragment>
					)}
					{activeStep === 2 && (
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
		</div>
	);
};

export default AddYourOwn;
