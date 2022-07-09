//IMPORTS
import * as React from 'react';
//MUI 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//DEVELOPING
const Spinner = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20, }}>
			<CircularProgress />
		</Box>
	);
};

export default Spinner;