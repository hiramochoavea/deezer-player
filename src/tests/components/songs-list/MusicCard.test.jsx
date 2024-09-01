import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MusicCard from '../../../components/songs-list/MusicCard';
import { useSongsContext } from '../../../context/SongsContext';

const iconName = "Play-Button-Icon";
jest.mock("../../../assets/play-button.svg", () => iconName);

jest.mock('../../../context/SongsContext');

describe('MusicCard', () => {
  const mockOnPlayingTrack = jest.fn();
  const mockSetIsMusicPlayerOpen = jest.fn();

  const mockContextValue = {
    onPlayingTrack: mockOnPlayingTrack,
    setIsMusicPlayerOpen: mockSetIsMusicPlayerOpen,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useSongsContext.mockReturnValue(mockContextValue);
  });

  const defaultProps = {
    songId: '1',
    songTitle: 'Test Song',
    artistName: 'Test Artist',
    labelText: 'Test Label',
    albumCover: 'test-cover-url.jpg',
  };

  it('renders correctly with given props', () => {
    render(<MusicCard {...defaultProps} />);

    expect(screen.getByRole('button', { name: /play song/i })).toBeInTheDocument();
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();

    const card = screen.getByRole('button', { name: /play song/i }).closest('div');
    expect(card).toHaveStyle(`background-image: url(${defaultProps.albumCover})`);
  });

  it('calls onPlayingTrack and setIsMusicPlayerOpen when clicked', () => {
    render(<MusicCard {...defaultProps} />);

    const card = screen.getByRole('button', { name: /play song/i }).closest('div');
    fireEvent.click(card);

    expect(mockOnPlayingTrack).toHaveBeenCalledWith('1');
    expect(mockSetIsMusicPlayerOpen).toHaveBeenCalledWith(true);
  });
});