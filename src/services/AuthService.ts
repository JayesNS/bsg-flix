import { ResponseError, SignInResponse } from '../types';

export const signInAnonymous = async (deviceUuid: string): Promise<SignInResponse> => {
  const response = await fetch('https://thebetter.bsgroup.eu/Authorization/SignIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Device: {
        PlatformCode: 'WEB',
        Name: deviceUuid
      }
    })
  });
  const data = await response.json();
  if ((data as ResponseError).ErrorDetail) {
    return Promise.reject(data);
  }
  return Promise.resolve(data);
};
