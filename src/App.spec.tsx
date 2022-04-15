import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render component', () => {
    expect(() => {
      render(<App />);
    }).not.toThrow();
  });
});