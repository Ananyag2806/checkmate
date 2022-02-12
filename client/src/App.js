import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Trending from './components/Trending';
import Best from './components/Best';
import AddYourOwn from './components/AddYourOwn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
					<Navbar />
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
				</ThemeProvider>
			</Fragment>
		</Router>
	);
}

export default App;
