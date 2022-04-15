import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  afterEach(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<App />);
    }).not.toThrow();
  });
});