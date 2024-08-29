import React from 'react'
import volumeIcon from '../../assets/volume-icon.svg'

const VolumeControl = ({ volume, handleVolumeChange }) => {

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newVolume = offsetX / rect.width;
    handleVolumeChange({ target: { value: newVolume } });
  };  

  return (

    <div id="volume-container">

      <div className="custom-volume-control">
        <img src={volumeIcon} alt="Volume Icon" className="" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          onClick={handleClick}          
          className="volume-input"
          style={{ '--volume': `${volume * 100}%` }}
        />
      </div>

    </div>

  )
}

export default VolumeControl;