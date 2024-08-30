import { useState, useEffect } from 'react';
import { searchSongsByArtist } from "../../services/songs";

import searchIcon from '../../assets/search-icon.svg'
import useDebounce from '../../hooks/useDebounce';
import { useSongsContext } from '../../context/SongsContext';


const SearchBar = () => {

    const [query, setQuery] = useState('');

    const debouncedQuery = useDebounce(query, 600); // milliseconds

    const { setSearchTitle, setSearchResults } = useSongsContext();
  
    useEffect(() => {

      if (debouncedQuery.trim() === '')
        return;
  
      const fetchSongsResults = async () => {
        const songsByArtist = await searchSongsByArtist( debouncedQuery );

        setSearchTitle( debouncedQuery );
        setSearchResults( songsByArtist );

        console.log('Search results:', songsByArtist);
      };
  
      fetchSongsResults();

    }, [debouncedQuery]);
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    return (

      <div id="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search artists"
          style={{backgroundImage: `url(${searchIcon})`}}
        />
      </div>

    );

  };
  
  export default SearchBar;