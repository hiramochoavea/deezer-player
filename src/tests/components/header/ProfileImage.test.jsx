import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileImage from '../../../components/header/ProfileImage';

const imageName = "profile-img.svg";

jest.mock(`../../../assets/${imageName}`, () => imageName);

describe('ProfileImage Component', () => {

  test('renders the ProfileImage component', () => {
    const { container } = render(<ProfileImage />);
    const containerElement = container.querySelector('#profile-img-container');
    expect(containerElement).toBeInTheDocument();
  });

  test('renders the image with the correct src and alt attributes', () => {
    render(<ProfileImage />);
    const imgElement = screen.getByRole('img', { name: /profile image/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', expect.stringContaining('profile-img.svg'));
    expect(imgElement).toHaveAttribute('alt', 'Profile Image');
  });

  test('the container div has the correct id', () => {
    const { container } = render(<ProfileImage />);
    const containerElement = container.querySelector('#profile-img-container');
    expect(containerElement).toHaveAttribute('id', 'profile-img-container');
  });
});