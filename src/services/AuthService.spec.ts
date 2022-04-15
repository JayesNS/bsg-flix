import { AuthService } from '.';

const fetchMock = jest.fn();
describe('AuthService', () => {
  beforeAll(() => {
    global.fetch = fetchMock as jest.Mock;
  });

  it('should handle signing in anonymous user with invalid device UUID', async () => {
    const deviceUuid = '';
    const expectedResponse = {};
    fetchMock.mockImplementation(() => Promise.resolve({json: Promise.resolve({})}));

    expect(await AuthService.signInAnonymous(deviceUuid)).toStrictEqual(expectedResponse);
  });
});
