import React from 'react'
import tempImg from '../../assets/temp-img.jpeg'

const MusicCard = () => {
    console.log(tempImg);
    return (
    <div className="music-card" style={{backgroundImage: `url(${tempImg})`}}>
        <div className="card-info">
            <h2>Hear The Sound</h2>
            <p>Adam Beyer</p>
            <p>Drumcode</p>                        
        </div>
    </div>
    )
}

export default MusicCard;