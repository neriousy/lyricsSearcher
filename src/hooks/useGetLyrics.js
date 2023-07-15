import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_LYRICS } from './utils';

export const useGetLyrics = (songId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const getLyrics = async (songId) => {
      try {
        const {
          data: { lyrics },
        } = await axios.request(API_LYRICS(songId));
        const {
          lyrics: {
            body: { plain },
          },
          tracking_data: { title },
        } = lyrics;

        setLyrics(plain);
        console.log(plain);
        setTitle(title);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getLyrics(songId);
  }, [songId]);

  return { isLoading, lyrics, error, title };
};
