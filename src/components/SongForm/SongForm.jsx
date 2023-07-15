import { Box, Button, CircularProgress, Paper, TextField } from '@mui/material';
import React, { useEffect } from 'react';

const SongForm = ({ getSong, isLoading}) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getSong(inputValue);
    localStorage.setItem('searchValue', inputValue);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem('searchValue');
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit}
      sx={{
        width: '100%',
        marginBottom: '2em'
      }}
    >
      <Paper      
        sx={{
          width: '100%',
        }}
      >
        <Box sx={{
          '& > :not(style)': { m: 1},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          margin: '0 auto'  

        }}>
          <TextField label='Input song title' onChange={(e) => setInputValue(e.target.value)}
            sx={{
              width: '100%',
              marginBottom: '1rem',
              '& input':{
                fontSize: '1rem',
                fontWeight: '300'
              }
            }}
            value={inputValue}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            variant="contained"
            sx={{
              width: '100%',
              height: '2.5rem',
              marginBottom: '1rem'
            }}
          >
            {isLoading ? <CircularProgress /> : 'Search'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SongForm;