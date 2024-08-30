import { useState } from 'react';

import './styles/sass/index.scss';
import Header from './components/header/Header';
import SongsList from './components/songs-list/SongsList';
import MusicPlayer from './components/music-player/MusicPlayer';
import { SongsProvider } from './context/SongsProvider';



const DeezerPlayer = () => {

    return (
        <SongsProvider>
            <div id="deezer-container">
                <Header />
                <SongsList />
                <MusicPlayer />
            </div>
        </SongsProvider>
    );
};

export default DeezerPlayer;