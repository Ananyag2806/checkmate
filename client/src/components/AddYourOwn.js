import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { makeStyles } from '@mui/styles';
import Divider from './DividerWithText';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StepButton from '@mui/material/StepButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
	root: {
		display: 'flex',
	},
	half: {
		display: 'block',
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

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0),
		createData('Ice cream sandwich', 237, 9.0),
		createData('Eclair', 262, 16.0),
		createData('Cupcake', 305, 3.7),
		createData('Gingerbread', 356, 16.0),
	];

	// TextField
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Chessboard
				className={classes.board}
				boardWidth={
					window.screen.width < 600 ? 0.9 * window.screen.width : 560
				}
				arePiecesDraggable={true}
				// position={'start'}
				animationDuration={200}
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
							<h3>Starting Position in FEN</h3>
							<TextField
								id='outlined-basic'
								label='Outlined'
								variant='outlined'
							/>
							<Divider>or</Divider>
							<Button variant='outlined'>
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
											<TableCell>Caption</TableCell>
											<TableCell>White</TableCell>
											<TableCell>Black</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow
												key={row.name}
												sx={{
													'&:last-child td, &:last-child th':
														{ border: 0 },
												}}>
												<TableCell>
													{row.name}
												</TableCell>
												<TableCell>
													{row.calories}
												</TableCell>
												<TableCell>{row.fat}</TableCell>
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
								label='Multiline'
								multiline
								maxRows={4}
								value={value}
								onChange={handleChange}
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

				{/* <div className={classes.half}>
				<h3>Starting Position in FEN</h3>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
				/>
				<Divider>or</Divider>
				<Button variant='outlined'>Set Position on the Board</Button> */}
			</div>
		</div>
	);
};

export default AddYourOwn;
