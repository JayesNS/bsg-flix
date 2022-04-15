/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentType, useContext, useMemo } from 'react';
import {v4 as uuid} from 'uuid';

import { AuthService } from '../services';

interface AuthContextApi {
  token?: string;
  signInAnonymous: () => void;
}

const AuthContext = React.createContext<AuthContextApi>({
  signInAnonymous: () => {}
});

function withAuthProvider<T>(Component: ComponentType<T>) {
  return function AuthProvider(props: T) {

    const cookies = useMemo<Record<string, string>>(() => {
      const decoded = decodeURIComponent(document.cookie);
      const cookies = decoded.split('; ');
      return cookies.reduce((cookieMap, cookieString) => {
        const [name, value] = cookieString.split('=');
        return {
          ...cookieMap,
          [name]: value
        };
      }, {});
    }, [document.cookie]);
    
    
    const authContextApi = useMemo<AuthContextApi>(() => ({
      token: cookies['token'],
      signInAnonymous
    }), [cookies]);
    
    function signInAnonymous() {
      AuthService.signInAnonymous(uuid())
        .then((response) => {
          const {Token, TokenExpires} = response.AuthorizationToken;
          setCookie('token', Token, TokenExpires);
        }).catch(console.error);
    }

    function setCookie(name: string, value: string, tokenExpires: string): void {
      const expires = 'expires=' + new Date(tokenExpires).toUTCString();
      document.cookie = `${name}=${value}"; "${expires}"; path=/`;
    }

    return (
      <AuthContext.Provider value={authContextApi}>
        <Component {...props} />
      </AuthContext.Provider>
    );
  };
}

const useAuth = (): AuthContextApi => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export {
  useAuth,
  withAuthProvider
};
