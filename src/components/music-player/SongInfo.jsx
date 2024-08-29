import React from 'react'

import tempTrack from '../../assets/temp-track.png'

const SongInfo = () => {
  return (
    <div id="song-info-container">

      <div className="track-img-area">
        <img src={tempTrack} alt="Track Image" className="track-img" />
      </div>

      <div className="track-info-area">
        <h2>Teach Me</h2>
        <p>Adam Beyer</p>
      </div>

    </div>
  )
}

export default SongInfo;