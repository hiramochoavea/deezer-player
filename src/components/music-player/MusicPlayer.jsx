import { useState, useEffect } from 'react';

import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import useVolumeControl from '../../hooks/useVolumeControl';


const MusicPlayer = ({ musicPlayerOpen }) => {

    const { volume, handleVolumeChange, playerRef } = useVolumeControl();


    return (
        <footer id="music-player-container" className={musicPlayerOpen ? 'visible' : 'hidden'}>
            <SongInfo />
            <ProgressBar volume={volume} playerRef={playerRef} />
            <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
        </footer>
    );

};

export default MusicPlayer;