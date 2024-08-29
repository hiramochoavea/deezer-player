import { useState } from 'react';

import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';


const MusicPlayer = () => {

    return (
        <footer id="music-player-container">
            <SongInfo />
            <ProgressBar />
            <VolumeControl />
        </footer>
    );

};

export default MusicPlayer;