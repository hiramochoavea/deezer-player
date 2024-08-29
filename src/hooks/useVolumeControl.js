import { useState, useRef, useCallback, useEffect } from 'react';

const useVolumeControl = () => {

  const [volume, setVolume] = useState(0.7);
  const playerRef = useRef(null);


  const handleVolumeChange = useCallback((e) => {

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (playerRef.current) {
      playerRef.current.audio.current.volume = newVolume;
    }

  }, []);

  useEffect(() => {

    if (playerRef.current) {

      const audioElement = playerRef.current.audio.current;
      const handleVolumeUpdate = () => setVolume(audioElement.volume);
      audioElement.addEventListener('volumechange', handleVolumeUpdate);

      return () => {
        audioElement.removeEventListener('volumechange', handleVolumeUpdate);
      };
      
    }

  }, []);

  return { volume, handleVolumeChange, playerRef };

};

export default useVolumeControl;