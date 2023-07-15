/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" >
      <Paper sx={styles.container}>
        <Typography variant="h3" gutterBottom>
        Welcome to LyricSearcher!
        </Typography>
        <Typography variant="body1" paragraph>
        Are you a music enthusiast, searching for the perfect song lyrics to express your emotions? Look no further! LyricSearcher is your one-stop destination to explore an extensive collection of song lyrics from all genres and eras.
        </Typography>
        <Typography variant="body1" paragraph>
        Unleash the power of words and dive into the rich world of music with ease. Our user-friendly interface allows you to browse, search, and discover the lyrics to your favorite tunes effortlessly. Whether you're looking for heartfelt ballads, catchy pop anthems, or soul-stirring melodies, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
        No more frantically typing lines into search engines. With LyricSearcher, finding the right words to sing along or share with friends has never been simpler. Our curated library ensures that you'll find accurate and up-to-date lyrics for every song you love.
        </Typography>
        <Typography variant="body1" paragraph>
        Get started today and experience the joy of discovering the hidden meanings behind your beloved tracks. LyricSearcher is a haven for lyric enthusiasts, a place where music and emotions intertwine.
        </Typography>
        <Typography variant="body1" paragraph>
        Join our community of passionate music lovers, and let the magic of lyrics touch your heart. Start exploring now and let the melodies guide your soul!
        </Typography>
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginBottom: '30px',
  },
};

export default Home;