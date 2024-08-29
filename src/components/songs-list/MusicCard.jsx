import React from 'react'
import tempImg from '../../assets/temp-img.jpeg'
import playButton from '../../assets/play-button.svg'

const MusicCard = () => {

    return (

    <div className="music-card" style={{backgroundImage: `url(${tempImg})`}}>

        <button
            className="play-button"
            aria-label="Play Song"
            style={{ backgroundImage: `url(${playButton})` }}
        />
        <div className="card-info">
            <h2>Hear The Sound</h2>
            <p>Adam Beyer</p>
            <p>Drumcode</p>                        
        </div>
        
    </div>

    )
}

export default MusicCard;