import {AuthService} from '.';
import { ResponseError } from '../types';

const fetchMock = jest.fn();
describe('AuthService', () => {
  beforeAll(() => {
    global.fetch = fetchMock as jest.Mock;
  });

  describe('signInAnonymous', () => {

    it('should handle signing in anonymous user', async () => {
      const deviceUuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
      const mockResponse = {};
      fetchMock.mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockResponse)}));
  
      expect(await AuthService.signInAnonymous(deviceUuid)).toStrictEqual({});
    });
  });
});
