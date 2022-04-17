/* eslint-disable @typescript-eslint/no-empty-function */
import React, {ComponentType, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

import {AuthService} from '../services';

interface AuthUser {
  fullName: string;
}

interface AuthContextApi {
  token?: string;
  user?: AuthUser;
  signInAnonymous: () => void;
  signIn: (username: string, password: string) => void;
}

const AuthContext = React.createContext<AuthContextApi>({
  signInAnonymous: () => {},
  signIn: (email, password) => {}
});

function withAuthProvider<T>(Component: ComponentType<T>) {
  return function AuthProvider(props: T) {
    const [token, setToken] = useState<string>();
    const [user, setUser] = useState<AuthUser>();
    
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

    const signInAnonymous = useCallback(() => {
      AuthService.signInAnonymous(uuid())
        .then((response) => {
          const {Token, TokenExpires} = response.AuthorizationToken;
          setCookie('token', Token, TokenExpires);
          setToken(Token);
        }).catch(console.error);
    }, [setToken]);

    const signIn = useCallback((email: string, password: string) => {
      AuthService.signIn(email, password, uuid())
        .then((response) => {
          const {Token: token, TokenExpires: tokenExpires} = response.AuthorizationToken;
          const {FullName: fullName} = response.User;
          setCookie('token', token, tokenExpires);
          setToken(token);
          setUser({fullName});
        }).catch(console.error);
    }, [setToken]);

    useEffect(() => {
      const cookie = cookies['token'];
      if (cookie) {
        setToken(cookies['token']);
        return;
      }
      // signInAnonymous();
      signIn('test@bsgroup.eu', 'Test12!@');
    }, [cookies, signInAnonymous, signIn]);

    function setCookie(name: string, value: string, tokenExpires: string): void {
      const expires = 'expires=' + new Date(tokenExpires).toUTCString();
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    return (
      <AuthContext.Provider value={{
        token,
        signInAnonymous,
        signIn,
        user
      }}>
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
