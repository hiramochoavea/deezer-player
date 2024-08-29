import { useState } from 'react';

import './styles/sass/index.scss';
import Header from './components/header/Header';
import SongsList from './components/songs-list/SongsList';
import MusicPlayer from './components/music-player/MusicPlayer';


const DeezerPlayer = () => {
    return (
        <div id="deezer-container">
            <Header />
            <SongsList />
            <MusicPlayer />
        </div>
    );
};

export default DeezerPlayer;