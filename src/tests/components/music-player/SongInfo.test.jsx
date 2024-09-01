import React from 'react';
import { render, screen } from '@testing-library/react';
import SongInfo from '../../../components/music-player/SongInfo';
import { useSongsContext } from '../../../context/SongsContext';

jest.mock('../../../context/SongsContext', () => ({
  useSongsContext: jest.fn(),
}));

describe('SongInfo Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders song information correctly when song data is available', () => {
    useSongsContext.mockReturnValue({
      playingTrack: {
        album: { cover_small: 'cover_small.jpg' },
        title: 'Test Song Title',
        artist: { name: 'Test Artist Name' }
      }
    });

    render(<SongInfo />);

    expect(screen.getByAltText('Album Cover')).toHaveAttribute('src', 'cover_small.jpg');
    expect(screen.getByText('Test Song Title')).toBeInTheDocument();
    expect(screen.getByText('Test Artist Name')).toBeInTheDocument();
  });

  test('handles missing song data gracefully', () => {
    useSongsContext.mockReturnValue({
      playingTrack: {}
    });

    render(<SongInfo />);

    expect(screen.queryByText('Test Song Title')).toBeNull();
    expect(screen.queryByText('Test Artist Name')).toBeNull();
  });

});