import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import PrivateRoute from './PrivateRoute';
import {useAuth} from '../../context';

jest.mock('react-router-dom', () => ({
  Navigate: () => <div>navigate</div>
}));

jest.mock('../../context', () => ({
  ...jest.requireActual('../../context'),
  useAuth: jest.fn()
}));

const MockRoute = () => {
  return <div>mock</div>;
};

describe('PrivateRoute', () => {
  afterEach(cleanup);

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({});
  });

  it('should render component', () => {
    expect(() => render(<PrivateRoute component={MockRoute} />)).not.toThrow();
  });

  it('should navigate when token is not present', async () => {
    render(<PrivateRoute component={MockRoute} />);

    const navigateComponent = screen.queryByText('navigate');

    expect(navigateComponent).not.toBeNull();
  });

  it('should render route', async () => {
    (useAuth as jest.Mock).mockReturnValue({token: 'token'});

    render(<PrivateRoute component={MockRoute} />);

    const mockRoute = screen.queryByText('mock');

    expect(mockRoute).not.toBeNull();
  });
});
