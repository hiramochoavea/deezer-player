import { useState } from 'react';
import SearchTitle from './SearchTitle';
import GalleryGrid from './GalleryGrid';

// style={{ paddingBottom: musicPlayerOpen ? '38px' : '158px' }}>

const SongsList = ({ musicPlayerOpen }) => {

    return (
        <div id="songs-list-container">
            <SearchTitle />
            <GalleryGrid />
        </div>
    );

};

export default SongsList;