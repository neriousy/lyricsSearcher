import { Box, CircularProgress } from '@mui/material';
import React from 'react';


const Loader = () =>  {
  return(
    <Box
      sx={{
        width: '100vw',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
      }}      
    >
      <CircularProgress/>
    </Box>
  );
};

export default Loader;
