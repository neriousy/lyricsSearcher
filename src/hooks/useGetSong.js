import { useState } from 'react';
import { API_SONG } from './utils';
import axios from 'axios';

export const useGetSong = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hitsArray, setHitsArray] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(0);

  const getSong = async (songName) => {
    setIsLoading(true);
    try {
      const {
        data: { hits },
        status,
      } = await axios.request(API_SONG(songName));
      setHitsArray(hits);
      setIsLoading(false);
      setStatus(status);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { getSong, isLoading, hitsArray, error, status };
};
