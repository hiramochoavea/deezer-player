import React from 'react'
import tempImg from '../../assets/temp-img.jpeg'
import playButton from '../../assets/play-button.svg'
import { useSongsContext } from '../../context/SongsContext';

const MusicCard = (props) => {

    const { songId, songTitle, artistName, labelText, albumCover } = props;
    const { isMusicPlayerOpen, setIsMusicPlayerOpen, onPlayingTrack } = useSongsContext();

    const handleClick = (songId) => {
        onPlayingTrack(songId);        
        setIsMusicPlayerOpen(true);
    };

    return (

    <div
        role="button"
        className="music-card"
        onClick={() => handleClick(songId)}        
        style={{backgroundImage: `url(${albumCover})`}}
    >

        <button
            className="play-button"
            aria-label="Play Song"
            style={{ backgroundImage: `url(${playButton})` }}
        />
        <div className="card-info">
            <h2>{songTitle}</h2>
            <p>{artistName}</p>
            <p>{labelText}</p>                        
        </div>
        
    </div>

    )
}

export default MusicCard;