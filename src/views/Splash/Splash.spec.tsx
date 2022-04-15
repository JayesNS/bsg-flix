import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Splash from './Splash';

describe('Splash', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<Splash />);
    }).not.toThrow();
  });
});