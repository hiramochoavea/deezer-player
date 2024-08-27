import { useState } from 'react';

import searchIcon from '../../assets/search-icon.svg'

const SearchBar = () => {

    return (
        <div id="search-bar-container">
            <input
                type="text"
                placeholder="Search artists"
                style={{backgroundImage: `url(${searchIcon})`}}
            />
        </div>
    );

};

export default SearchBar;