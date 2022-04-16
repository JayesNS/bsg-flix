import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

import MediaCard from './MediaCard';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

describe('MediaCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component', () => {
    expect(() => render(<MediaCard mediaId={3} title="test" imageUrl="" />)).not.toThrow();
  });

  it('should contain image', async () => {
    render(<MediaCard mediaId={3} title="test" imageUrl="test" />);

    const image = await screen.findByAltText('test');

    expect(image).not.toBeNull();
  });

  it('should navigate after click on card', async () => {
    render(<MediaCard mediaId={3} title="test" imageUrl="" />);

    fireEvent.click(await screen.findByTestId('media-card-image'));

    expect(mockedNavigate).toBeCalledWith('/player/3');
  });
});
