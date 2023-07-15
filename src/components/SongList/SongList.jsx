import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import NoSongsFound from './NoSongsFound';
import SongCard from './SongCard';

const SongList = ({hitsArray, status})  => {

  if(hitsArray.length == 0 && status == 200) return(
    <NoSongsFound/>
  );

  return (
    <Grid container 
      spacing={{ xs: 2, md: 10
      }}
      sx={{
        maxWidth: '100%',
        marginBottom: '1em',
      }}
    >
      {
        hitsArray.map(({result}, index) => {
          return (
            <SongCard key={index} songData={result}/> 
          );
        }
        )

      }
    </Grid>
  );
};

export default SongList;