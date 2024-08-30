import { useState, useEffect } from 'react';

import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import useVolumeControl from '../../hooks/useVolumeControl';
import { useSongsContext } from '../../context/SongsContext';


const MusicPlayer = () => {

    const { volume, handleVolumeChange, playerRef } = useVolumeControl();
    const { isMusicPlayerOpen } = useSongsContext();

    return (
        <footer id="music-player-container" className={isMusicPlayerOpen ? 'visible' : 'hidden'}>
            <SongInfo />
            <ProgressBar volume={volume} playerRef={playerRef} />
            <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
        </footer>
    );

};

export default MusicPlayer;