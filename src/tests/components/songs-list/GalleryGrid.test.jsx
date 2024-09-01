import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GalleryGrid from '../../../components/songs-list/GalleryGrid';
import { useSongsContext } from '../../../context/SongsContext';
import MusicCard from '../../../components/songs-list/MusicCard';

jest.mock('../../../context/SongsContext');

jest.mock('../../../components/songs-list/MusicCard', () => {
  return jest.fn(() => <div data-testid="music-card"></div>);
});

describe('GalleryGrid', () => {
  const mockSetIsMusicPlayerOpen = jest.fn();

  const mockContextValue = {
    searchResults: [],
    searchTitle: '',
    setIsMusicPlayerOpen: mockSetIsMusicPlayerOpen,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useSongsContext.mockReturnValue(mockContextValue);
  });

  it('renders no results message when searchResults is empty and searchTitle is present', () => {
    useSongsContext.mockReturnValue({
      ...mockContextValue,
      searchTitle: 'Test Artist',
    });

    render(<GalleryGrid />);

    expect(screen.getByText(/no results found for this search/i)).toBeInTheDocument();
    expect(screen.queryByTestId('music-card')).not.toBeInTheDocument();
  });

  it('renders MusicCard components when searchResults are available', () => {
    const mockSearchResults = [
      {
        id: '1',
        title: 'Test Song 1',
        artist: { name: 'Artist 1' },
        album: { title: 'Album 1', cover_big: 'cover1.jpg' },
      },
      {
        id: '2',
        title: 'Test Song 2',
        artist: { name: 'Artist 2' },
        album: { title: 'Album 2', cover_big: 'cover2.jpg' },
      },
    ];

    useSongsContext.mockReturnValue({
      ...mockContextValue,
      searchResults: mockSearchResults,
    });

    render(<GalleryGrid />);

    expect(screen.queryByText(/no results found/i)).not.toBeInTheDocument();
    expect(screen.getAllByTestId('music-card')).toHaveLength(2);

    expect(MusicCard).toHaveBeenCalledWith(
      expect.objectContaining({
        songId: '1',
        songTitle: 'Test Song 1',
        artistName: 'Artist 1',
        labelText: 'Album 1',
        albumCover: 'cover1.jpg',
      }),
      {}
    );

    expect(MusicCard).toHaveBeenCalledWith(
      expect.objectContaining({
        songId: '2',
        songTitle: 'Test Song 2',
        artistName: 'Artist 2',
        labelText: 'Album 2',
        albumCover: 'cover2.jpg',
      }),
      {}
    );
  });

  it('calls setIsMusicPlayerOpen(false) when clicking outside of gallery grid and music player', () => {
    const { container } = render(<GalleryGrid />);
    
    fireEvent.click(document.body);

    expect(mockSetIsMusicPlayerOpen).toHaveBeenCalledWith(false);
  });

  it('does not call setIsMusicPlayerOpen(false) when clicking inside gallery grid', () => {
    const { container } = render(<GalleryGrid />);
    
    fireEvent.click(container.querySelector('#gallery-grid-container'));

    expect(mockSetIsMusicPlayerOpen).not.toHaveBeenCalled();
  });
});