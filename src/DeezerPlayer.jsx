import { useState } from 'react';

import './styles/sass/index.scss';
import Header from './components/header/Header';
import SongsList from './components/songs-list/SongsList';
import MusicPlayer from './components/music-player/MusicPlayer';


const DeezerPlayer = () => {

    const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);

    return (
        // Quitar el siguiente onClick.
        <div id="deezer-container" onClick={() => setIsMusicPlayerOpen(!isMusicPlayerOpen)}>
            <Header />
            <SongsList musicPlayerOpen={isMusicPlayerOpen} />
            <MusicPlayer musicPlayerOpen={isMusicPlayerOpen} />
        </div>
    );
};

export default DeezerPlayer;