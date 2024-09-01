import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../../components/header/NavBar';

describe('NavBar Component', () => {

  test('renders the NavBar component', () => {
    render(<NavBar />);
    const navElement = screen.getByRole('navigation', { hidden: true });
    expect(navElement).toBeInTheDocument();
  });

  test('renders all the links with correct text and attributes', () => {
    render(<NavBar />);
    
    const homeLink = screen.getByRole('link', { name: /go to home page/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '#');
    expect(homeLink).toHaveAttribute('tabIndex', '0');
    expect(homeLink).toHaveAttribute('aria-label', 'Go to Home page');

    const discoverLink = screen.getByRole('link', { name: /go to discover page/i });
    expect(discoverLink).toBeInTheDocument();
    expect(discoverLink).toHaveAttribute('href', '#');
    expect(discoverLink).toHaveAttribute('tabIndex', '0');
    expect(discoverLink).toHaveAttribute('aria-label', 'Go to Discover page');
    expect(discoverLink).toHaveClass('active');
    expect(discoverLink).toHaveAttribute('aria-current', 'page');

    const recentsLink = screen.getByRole('link', { name: /go to recents page/i });
    expect(recentsLink).toBeInTheDocument();
    expect(recentsLink).toHaveAttribute('href', '#');
    expect(recentsLink).toHaveAttribute('tabIndex', '0');
    expect(recentsLink).toHaveAttribute('aria-label', 'Go to Recents page');

    const libraryLink = screen.getByRole('link', { name: /go to library page/i });
    expect(libraryLink).toBeInTheDocument();
    expect(libraryLink).toHaveAttribute('href', '#');
    expect(libraryLink).toHaveAttribute('tabIndex', '0');
    expect(libraryLink).toHaveAttribute('aria-label', 'Go to Library page');
  });

  test('only the Discover link has the active class and aria-current attribute', () => {
    render(<NavBar />);

    const discoverLink = screen.getByRole('link', { name: /go to discover page/i });
    expect(discoverLink).toHaveClass('active');
    expect(discoverLink).toHaveAttribute('aria-current', 'page');

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link !== discoverLink) {
        expect(link).not.toHaveClass('active');
        expect(link).not.toHaveAttribute('aria-current');
      }
    });
  });

  test('all links should be focusable and have a tabIndex of 0', () => {
    render(<NavBar />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('tabIndex', '0');
    });
  });
});