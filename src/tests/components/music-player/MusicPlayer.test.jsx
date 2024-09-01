import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MusicPlayer from '../../../components/music-player/MusicPlayer';
import { useSongsContext } from '../../../context/SongsContext';
import useVolumeControl from '../../../hooks/useVolumeControl';

jest.mock('../../../components/music-player/SongInfo', () => () => <div>SongInfo Mock</div>);
jest.mock('../../../components/music-player/ProgressBar', () => ({ volume, playerRef }) => (
  <div>ProgressBar Mock - Volume: {volume}</div>
));
jest.mock('../../../components/music-player/VolumeControl', () => ({ volume, handleVolumeChange }) => (
  <div>
    VolumeControl Mock - Volume: {volume}
    <button onClick={() => handleVolumeChange({ target: { value: 0.7 } })}>Change Volume</button>
  </div>
));

jest.mock('../../../hooks/useVolumeControl', () => {
  return () => ({
    volume: 0.5,
    handleVolumeChange: jest.fn(),
    playerRef: { current: null },
  });
});

jest.mock('../../../context/SongsContext', () => ({
  useSongsContext: jest.fn(() => ({
    isMusicPlayerOpen: true,
  })),
}));

describe('MusicPlayer Component', () => {
  test('renders the MusicPlayer component', () => {
    render(<MusicPlayer />);

    expect(screen.getByText('SongInfo Mock')).toBeInTheDocument();
    expect(screen.getByText('ProgressBar Mock - Volume: 0.5')).toBeInTheDocument();
    expect(screen.getByText('VolumeControl Mock - Volume: 0.5')).toBeInTheDocument();
  });

  test('shows the music player when isMusicPlayerOpen is true', () => {
    render(<MusicPlayer />);

    expect(screen.getByRole('contentinfo')).toHaveClass('visible');
  });

  test('hides the music player when isMusicPlayerOpen is false', () => {
    useSongsContext.mockReturnValue({
      isMusicPlayerOpen: false,
    });

    render(<MusicPlayer />);

    expect(screen.getByRole('contentinfo')).toHaveClass('hidden');
  });
});