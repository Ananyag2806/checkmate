import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<Tabs value={value} onChange={handleChange} centered>
				<Link to='/trending'>
					<Tab disableRipple={true} label='Trending' />
				</Link>
				<Link to='/best'>
					<Tab disableRipple={true} label='Best' />
				</Link>
				<Link to='/addYourOwn'>
					<Tab disableRipple={true} label='Add Your Own Move' />
				</Link>
			</Tabs>
		</Box>
	);
}

export default Navbar;
