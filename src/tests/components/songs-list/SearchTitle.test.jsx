import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchTitle from '../../../components/songs-list/SearchTitle';
import { useSongsContext } from '../../../context/SongsContext';

jest.mock('../../../context/SongsContext');

describe('SearchTitle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders welcome message when searchTitle is empty', () => {
    useSongsContext.mockReturnValue({
      searchTitle: '',
    });

    render(<SearchTitle />);

    expect(screen.getByText(/welcome!/i)).toBeInTheDocument();
    expect(screen.getByText(/try searching for artists using the search bar/i)).toBeInTheDocument();
    expect(screen.queryByText(/search results for:/i)).not.toBeInTheDocument();
  });

  it('renders search results message when searchTitle is provided', () => {
    const mockSearchTitle = 'Test Artist';

    useSongsContext.mockReturnValue({
      searchTitle: mockSearchTitle,
    });

    render(<SearchTitle />);

    expect(screen.getByText(/search results for:/i)).toBeInTheDocument();
    expect(screen.getByText(mockSearchTitle)).toBeInTheDocument();
    expect(screen.queryByText(/welcome!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/try searching for artists using the search bar/i)).not.toBeInTheDocument();
  });
});