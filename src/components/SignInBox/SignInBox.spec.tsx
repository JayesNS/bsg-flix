/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render} from '@testing-library/react';

import SignInBox from './SignInBox';

jest.mock('../../context', () => ({
  useAuth: () => ({
    signIn: jest.fn()
  })
}));

describe('SignInBox', () => {
  it('should render component', () => {
    expect(() => {
      render(<SignInBox />);
    }).not.toThrow();
  });
});
