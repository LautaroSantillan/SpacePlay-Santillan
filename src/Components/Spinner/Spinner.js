//IMPORTS
import * as React from 'react';
//Material UI 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20, }}>
			<CircularProgress />
		</Box>
	);
};

export default Spinner;