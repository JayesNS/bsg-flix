import React from 'react';
import {render, cleanup} from '@testing-library/react';

import SignInView from './SignInView';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('SignInView', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<SignInView />);
    }).not.toThrow();
  });
});