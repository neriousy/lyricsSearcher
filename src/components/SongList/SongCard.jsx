import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { cutTextIfLonger } from './utils';
import { Link } from 'react-router-dom';

const SongCard = ({songData, key}) => {
  const {header_image_url: img, id, full_title } = songData; 

  return (
    <Grid
      item key={key} xs={4} 
    >
      <Paper sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
        padding: '0.5em'
      }}>
        <Avatar src={img} alt={full_title} sx={{
          width: '5em',
          height: '5em'
        }}/>
        <Typography
          sx={{
            marginTop: '1em',
            fontSize: '1em',
            fontWeight: 'bold',
            width: '50%',
            textAlign: 'center' 
          }}
          gutterBottom={true}
          paragraph
          align={'justify'}
        >{cutTextIfLonger(full_title)}</Typography>

        <Button variant="contained" sx={{
          marginTop: 'auto',
        }}>
          <Link to={`/lyrics/${id}`}>See Lyrics</Link>
        </Button>

      </Paper>
    </Grid>
  );
};

export default SongCard;