import {MediaService} from '.';

const fetchMock = jest.fn();
describe('MediaService', () => {
  beforeAll(() => {
    global.fetch = fetchMock as jest.Mock;
  });

  describe('fetchMediaList', () => {
    it('should fetch media list', async () => {
      const mockResponse = {};
      fetchMock.mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockResponse)}));
  
      expect(await MediaService.fetchMediaList(1, {token: ''})).toStrictEqual({});
    });
  });

  describe('fetchMediaPlayInfo', () => {
    it('should fetch media play info, async', async () => {
      const mockResponse = {};
      fetchMock.mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockResponse)}));
  
      expect(await MediaService.fetchMediaPlayInfo(1, false, {token: ''})).toStrictEqual({});
    });
  });
});
