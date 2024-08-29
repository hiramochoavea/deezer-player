import React from 'react'

import tempAudio from '../../assets/temp-audio.mp3'

const ProgressBar = () => {
  return (
    <div id="progress-bar-container">

      <audio controls>
        <source src={tempAudio} type="audio/mpeg" />
      </audio>

    </div>
  )
}

export default ProgressBar;