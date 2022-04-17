import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import {useAuth} from '../../context';

import SignInView from './SignInView';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Navigate: () => <div>navigate</div>
}));

jest.mock('../../components', () => ({
  SignInBox: () => <div>signInBox</div>
}));

jest.mock('../../context', () => ({
  useAuth: jest.fn()
}));

describe('SignInView', () => {
  afterAll(cleanup);

  beforeEach(() => {
    (useAuth as jest.Mock).mockImplementation(() => ({}));
  });

  it('should render component', () => {
    expect(() => {
      render(<SignInView />);
    }).not.toThrow();
  });

  it('should render SignInBox component when user is not signed in', () => {
    render(<SignInView />);

    expect(screen.getByText('signInBox')).not.toBeNull();
  });

  it('should navigate if user is signed in', () => {
    (useAuth as jest.Mock).mockImplementation(() => ({
      user: {}
    }));
    render(<SignInView />);

    expect(screen.getByText('navigate')).not.toBeNull();
  });
});