import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {useAuth} from '../../context';

import NavBar from './NavBar';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Link: ({children}: any) => <>{children}</>
}));

jest.mock('../../context', () => ({
  ...jest.requireActual('../../context'),
  useAuth: jest.fn()
}));

describe('NavBar', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({});
  });

  it('should render component', () => {
    expect(() => render(<NavBar />)).not.toThrow();
  });

  it('should display sign in button when not logged in', () => {
    render(<NavBar />);

    expect(screen.getByTestId('sign-in-button')).not.toBeNull();
  });

  it('should display sign out button and user full name', () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: {
        fullName: 'Test'
      }
    });

    render(<NavBar />);

    expect(screen.getByTestId('sign-out-button')).not.toBeNull();
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
