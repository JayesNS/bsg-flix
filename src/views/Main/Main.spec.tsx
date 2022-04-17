import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';

import Main from './Main';

jest.mock('../../components', () => ({
  MediaListWidget: () => <div>mediaListWidget</div>,
  NavBar: () => <div>navBar</div>
}));

describe('Main', () => {
  afterAll(cleanup);

  it('should render component', () => {
    expect(() => {
      render(<Main />);
    }).not.toThrow();
  });

  it('should render components on page', () => {
    render(<Main />);

    expect(screen.getByText('navBar')).not.toBeNull();
    expect(screen.getAllByText('mediaListWidget')).toHaveLength(2);
  });
});
