import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VolumeControl from '../../../components/music-player/VolumeControl';

jest.mock("../../../assets/volume-icon.svg", () => "volume-icon");

describe('VolumeControl Component', () => {
    const mockHandleVolumeChange = jest.fn();
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('renders the VolumeControl component', () => {
      const { container } = render(<VolumeControl volume={0.5} handleVolumeChange={mockHandleVolumeChange} />);
  
      expect(container.querySelector('img[alt="Volume Icon"]')).toBeInTheDocument();
  
      expect(container.querySelector('input[type="range"]')).toBeInTheDocument();
    });
  
  
    test('does not update volume when mouse is not dragging', () => {
      const { container } = render(<VolumeControl volume={0.5} handleVolumeChange={mockHandleVolumeChange} />);
  
      const volumeContainer = container.querySelector('#volume-container');
      
      fireEvent.mouseMove(volumeContainer, { clientX: 200 });
  
      expect(mockHandleVolumeChange).not.toHaveBeenCalled();
    });
  });