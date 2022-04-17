import React from 'react';
import {cleanup, render} from '@testing-library/react';

import MediaList from './MediaList';
import {ImageTypeCode, Media} from '../../types';

jest.mock('../MediaCard', () => ({
  MediaCard: () => (<div>media</div>)
}));

const mockMedia: Media = {
  Id: -1,
  Guid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  MediaTypeCode: 'VOD',
  MediaTypeDisplayName: 'VOD',
  MediaAgeRestrictionValueMin: 16,
  MediaAgeRestrictionImageUrl: '',
  Title: '',
  Description: '',
  Year: 2015,
  Duration: 5040000,
  IsTrialContentAvailable: false,
  AvailableFrom: '2021-02-01T21:19:48+00:00',
  Images: [
    {
      Id: -1,
      MediaId: 15,
      PlatformCode: 'ANY',
      ImageTypeCode: ImageTypeCode.FRAME,
      Url: '',
      Width: 0,
      Height: 0
    },
  ],
  Products: []
};

describe('MediaList', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render basic component', () => {
    expect(() => render(<MediaList mediaList={[]} />)).not.toThrow();
  });

  it('should render component with media list', () => {
    expect(() => render(<MediaList mediaList={[mockMedia]} />)).not.toThrow();
  });
});
