export const API_SONG = (songName) => {
  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
    params: {
      q: songName,
      per_page: '6',
      page: '1',
    },
    headers: {
      'X-RapidAPI-Key': '337d977d8cmshf34c3362a6ffce6p1c90bcjsnac6a8383c713',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  };
  return options;
};

export const API_LYRICS = (songId) => {
  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
    params: {
      id: songId,
      text_format: 'plain',
    },
    headers: {
      'X-RapidAPI-Key': '337d977d8cmshf34c3362a6ffce6p1c90bcjsnac6a8383c713',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
  };

  return options;
};
