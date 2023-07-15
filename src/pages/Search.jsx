import React from 'react';
import SongForm from '../components/SongForm/SongForm';
import { Box } from '@mui/material';
import SongList from '../components/SongList/SongList';
import { useGetSong } from '../hooks/useGetSong';

const Search = () => {
  const {getSong, isLoading, hitsArray, status} = useGetSong(); 

  return (
    <Box component="main" 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}> 
      <SongForm getSong={getSong} isLoading={isLoading}/>
      <SongList hitsArray={hitsArray} status={status}/>
    </Box>
  );


};


export default Search;