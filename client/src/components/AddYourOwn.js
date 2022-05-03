import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Divider from './DividerWithText';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StepButton from '@mui/material/StepButton';

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
						<React.Fragment>22222222222222222233</React.Fragment>
					)}
					{activeStep === 2 && (
						<React.Fragment>33333333333333333333</React.Fragment>
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
