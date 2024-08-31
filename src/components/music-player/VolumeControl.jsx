import React, { useState } from 'react';
import volumeIcon from '../../assets/volume-icon.svg';

const VolumeControl = ({ volume, handleVolumeChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateVolume(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateVolume(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateVolume = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newVolume = Math.min(Math.max(offsetX / rect.width, 0), 1);
    handleVolumeChange({ target: { value: newVolume } });
  };

  return (
    <div
      id="volume-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="custom-volume-control">
        <img src={volumeIcon} alt="Volume Icon" className="" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onMouseDown={handleMouseDown}
          onChange={(e) => handleVolumeChange(e)}
          className="volume-input"
          style={{ '--volume': `${volume * 100}%` }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;