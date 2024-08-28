import { useState } from 'react';
import SearchTitle from './SearchTitle';
import GalleryGrid from './GalleryGrid';

const SongsList = () => {

    return (
        <div id="songs-list-container">
            <SearchTitle />
            <GalleryGrid />
        </div>
    );

};

export default SongsList;