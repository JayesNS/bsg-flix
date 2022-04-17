import React from 'react';
import {cleanup, render} from '@testing-library/react';

import MediaListWidget from './MediaListWidget';
import {useAuth} from '../../context';
import {MediaService} from '../../services';

jest.mock('../MediaList', () => ({
  MediaList: ({mediaList}: {mediaList: string[]}) => (
    <div>
      {mediaList.map((media, i) => (<div key={i}>media</div>))}
    </div>
  )
}));

jest.mock('../../context', () => ({
  useAuth: jest.fn()
}));

jest.mock('../../services', () => ({
  MediaService: {
    fetchMediaList: jest.fn()
  }
}));

describe('MediaListWidget', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    (useAuth as jest.Mock).mockImplementation(() => ({}));
    (MediaService.fetchMediaList as jest.Mock).mockImplementation(() => Promise.reject({}));
  });

  it('should render basic component', () => {
    expect(() => render(<MediaListWidget listId={1} />)).not.toThrow();
  });
});
