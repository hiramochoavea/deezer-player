import { useState } from 'react';
import { useSongsContext } from '../../context/SongsContext';

const SearchTitle = () => {

    const { searchTitle } = useSongsContext();

    return (
        <div id="search-title-container">
            {searchTitle ? (
                <p>
                    <span>Search results for:</span>
                    <b> {searchTitle}</b>
                </p>
            ) : (
                <p style={{textAlign: 'center'}}>
                    <b>Welcome! </b>
                    <span>Try searching for artists using the search bar.</span>
                </p>
            )}
        </div>
    );

};

export default SearchTitle;