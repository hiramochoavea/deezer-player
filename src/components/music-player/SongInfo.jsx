import React from 'react'

import { useSongsContext } from '../../context/SongsContext';

const SongInfo = () => {

  const { playingTrack: song } = useSongsContext();

  return (
    <div id="song-info-container">

      <div className="track-img-area">
        <img src={song?.album?.cover_small} alt="Album Cover" className="track-img" />
      </div>

      <div className="track-info-area">
        <h2>{song?.title}</h2>
        <p>{song?.artist?.name}</p>
      </div>

    </div>
  );

};

export default SongInfo;