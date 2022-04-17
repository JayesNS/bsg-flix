import {AuthService} from '.';
import {SignInResponse} from '../types';

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

  describe('signIn', () => {
    const mockResponse: SignInResponse = {
      User: {
        Products: [],
        Id: 0,
        FullName: 'Test',
        UserName: 'test',
        Email: 'test@mock.com',
        Initials: 'T',
        ClientRoles: []
      },
      AuthorizationToken: {
        Token: 'token',
        TokenExpires: '2022-04-17T10:58:01.6087725+00:00',
        RefreshToken: 'refreshToken'
      }
    };
    
    it('should handle signing in', async () => {
      const username = 'test';
      const password = 'test123#';
      const deviceUuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
      fetchMock.mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockResponse)}));
  
      expect(await AuthService.signIn(username, password, deviceUuid)).toStrictEqual(mockResponse);
    });
  });
});
