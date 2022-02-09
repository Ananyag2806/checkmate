import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Trending from './components/Trending';
import Best from './components/Best';
import AddYourOwn from './components/AddYourOwn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route exact path='/trending' element={<Trending />} />
					<Route exact path='/best' element={<Best />} />
					<Route exact path='/addYourOwn' element={<AddYourOwn />} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
