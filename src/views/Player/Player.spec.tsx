import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Player from './Player';

describe('Player', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<Player />);
    }).not.toThrow();
  });
});