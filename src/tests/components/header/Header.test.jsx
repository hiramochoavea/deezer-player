import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/header/Header';


jest.mock("../../../components/header/AppLogo", () => () => <div>AppLogo Mock</div>);
jest.mock("../../../components/header/SearchBar", () => () => <div>SearchBar Mock</div>);
jest.mock("../../../components/header/NavBar", () => () => <div>NavBar Mock</div>);
jest.mock("../../../components/header/ProfileImage", () => () => <div>ProfileImage Mock</div>);

describe('Header Component', () => {
  
  test('renders the Header component', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the AppLogo component', () => {
    render(<Header />);
    
    const appLogoElement = screen.getByText("AppLogo Mock");
    expect(appLogoElement).toBeInTheDocument();
  });

  test('renders the SearchBar component', () => {
    render(<Header />);

    const containerElement = screen.getByText("SearchBar Mock");
    expect(containerElement).toBeInTheDocument();
  });

  test('renders the NavBar component', () => {
    render(<Header />);

    const containerElement = screen.getByText("NavBar Mock");
    expect(containerElement).toBeInTheDocument();
  });

  test('renders the ProfileImage component', () => {
    render(<Header />);

    const containerElement = screen.getByText("ProfileImage Mock");
    expect(containerElement).toBeInTheDocument();
  });

});