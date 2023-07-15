import React from 'react';
import { useGetLyrics } from '../hooks/useGetLyrics';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import LyricsText from '../components/LyricsText/LyricsText';

const Lyrics = () => {
  const {id} = useParams();
  const { isLoading, lyrics, title,  error }= useGetLyrics(id);

  if (isLoading) {
    return <Loader/>;
  }

  if(error){
    return {error};
  }


  return <LyricsText lyrics={lyrics} title={title}/>;
};

export default Lyrics;