import React from 'react';
import {render, cleanup} from '@testing-library/react';

import Main from './Main';

jest.mock('../../components', () => ({
  MediaListWidget: () => <></>,
  NavBar: () => <></>
}));

describe('Main', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<Main />);
    }).not.toThrow();
  });
});
