import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { cutTextIfLonger } from './utils';
import { Link } from 'react-router-dom';

const SongCard = ({songData, key}) => {
  const {header_image_url: img, id, full_title } = songData; 

  return (
    <Grid item key={key} xs={12} sm={6} md={4} lg={3} >
      <Paper sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', 
        height: '15em',
        padding: '0.5em',
        boxSizing: 'border-box',
      }}>
        <Avatar src={img} alt={full_title} sx={{
          width: '5em',
          height: '5em',
          flexShrink: 0, 
        }} />
        <Typography
          sx={{
            marginTop: '1em',
            fontSize: '1em',
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
            flexShrink: 0,
          }}
          gutterBottom={true}
          paragraph
          align={'justify'}
        >
          {cutTextIfLonger(full_title)}
        </Typography>

        <Button variant="contained" sx={{
          width: '100%',
        }}>
          <Link to={`/lyrics/${id}`}>See Lyrics</Link>
        </Button>

      </Paper>
    </Grid>

  );
};

export default SongCard;