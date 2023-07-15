import { Box, Paper, Typography } from '@mui/material';
import { fontGrid } from '@mui/material/styles/cssUtils';
import React from 'react';

const NoSongsFound = () => {
  console.log('no songs found');

  return(
    <Box
      sx={{
        width: '100vw',
        height: '10rem',
        margin: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper sx={{
        width: '100%',
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography component="h2" sx={{
          width:'100%',
          textAlign: 'center',
          fontSize: '2rem', 
        }}>
    No songs found
        </Typography>
      </Paper>
    </Box>
  );
};

export default NoSongsFound;