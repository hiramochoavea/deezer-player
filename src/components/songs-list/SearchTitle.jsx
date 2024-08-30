import { useState } from 'react';
import { useSongsContext } from '../../context/SongsContext';

const SearchTitle = () => {

    const { searchTitle } = useSongsContext();

    return (
        <div id="search-title-container">
            <p>
                Search results for:
                <b> {searchTitle}</b>
            </p>
        </div>
    );

};

export default SearchTitle;