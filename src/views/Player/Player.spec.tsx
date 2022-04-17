import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Player from './Player';

jest.mock('react-router-dom', () => ({
  useParams: () => jest.fn().mockReturnValue({}),
  Link: ({children}: any) => <>{children}</>
}));

describe('Player', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<Player />);
    }).not.toThrow();
  });
});