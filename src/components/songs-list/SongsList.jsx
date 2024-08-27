import { useState } from 'react';
import SearchTitle from './SearchTitle';

const SongsList = () => {

    return (
        <div id="songs-list-container">
            <SearchTitle />
            <span>Cards</span>
        </div>
    );

};

export default SongsList;