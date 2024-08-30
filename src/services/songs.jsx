const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;


export const searchSongsByArtist = async ( artist ) => {

  const url = `https://${RAPIDAPI_HOST}/search?q=${encodeURIComponent(artist)}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST
    }
  };
  
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const result = await response.json();
    //console.log(result);

    const filteredTracks = result.data.filter(item => item.type === 'track');

    return filteredTracks;
  } catch (error) {
    console.error('Error fetching the data', error);
  }

};