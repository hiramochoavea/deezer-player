import { useState, useEffect, useRef } from 'react';

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import tempAudio from '../../assets/temp-audio.mp3'
import pauseButton from '../../assets/pause-btn.svg'
import playButtonSmall from '../../assets/play-btn-small.svg'


const ProgressBar = ({ volume, playerRef }) => {



  return (
    <div id="progress-bar-container">

      <AudioPlayer
        autoPlay
        src={tempAudio}
        ref={playerRef}
        onPlay={e => console.log("onPlay")}
        volume={volume}
        showJumpControls={false}
        autoPlayAfterSrcChange={true}
        layout={"stacked-reverse"}
        customIcons={{
          play: <img src={playButtonSmall} alt="Pause Icon" className="play-btn-small" />,
          pause: <img src={pauseButton} alt="Pause Icon" className="pause-btn-small" />
        }}
        customControlsSection={
          [
            RHAP_UI.MAIN_CONTROLS,
          ]
        }        

      /> 
    </div>
  )
}

export default ProgressBar;