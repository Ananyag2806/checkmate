import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import NavbarSmall from './components/NavbarSmall';
import Landing from './components/Landing';
import Trending from './components/Trending';
import Best from './components/Best';
import AddYourOwn from './components/AddYourOwn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// to do
// 1. display navbar according to the size of the screen
// 2. reduce the size of the chess board for small screens
// 3. hook up front end and backend
// 4. loader
//      5. add upvote and downvote button
//      6. pass the whole object insted of just the array

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			'Ubuntu',
		].join(','),
	},
});

function App() {
	return (
		<Router>
			<Fragment>
				<ThemeProvider theme={theme}>
					{/* <Navbar /> */}
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route exact path='/trending' element={<Trending />} />
						<Route exact path='/best' element={<Best />} />
						<Route
							exact
							path='/addYourOwn'
							element={<AddYourOwn />}
						/>
					</Routes>
					<NavbarSmall />
				</ThemeProvider>
			</Fragment>
		</Router>
	);
}

export default App;
