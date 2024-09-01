import React from 'react';
import { render, screen } from '@testing-library/react';
import SongsList from '../../../components/songs-list/SongsList';

jest.mock('../../../components/songs-list/SearchTitle', () => () => <div>SearchTitle Mock</div>);
jest.mock('../../../components/songs-list/GalleryGrid', () => () => <div>GalleryGrid Mock</div>);

describe('SongsList Component', () => {
  
  test('renders the SongsList component', () => {
    const { container } = render(<SongsList />);

    const containerElement = container.querySelector('#songs-list-container');
    expect(containerElement).toBeInTheDocument();
  });

  test('renders the SearchTitle component', () => {
    render(<SongsList />);

    const searchTitleElement = screen.getByText("SearchTitle Mock");
    expect(searchTitleElement).toBeInTheDocument();
  });

  test('renders the GalleryGrid component', () => {
    render(<SongsList />);

    const galleryGridElement = screen.getByText("GalleryGrid Mock");
    expect(galleryGridElement).toBeInTheDocument();
  });

});