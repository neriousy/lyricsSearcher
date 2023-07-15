import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const LyricsText = ({ lyrics, title }) => {
  return (
    <Box sx={{
      display: 'flex',  
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    
    }}>
      <Paper sx={{ whiteSpace: 'pre-line', width: '50%', height: '80vh', overflow: 'auto',
        padding: '1rem' }}>
        <Typography 
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '1rem'

          }}
        >{title}</Typography>
        <Typography>{lyrics}</Typography>
      </Paper>
    </Box>
  );
};

export default LyricsText;
