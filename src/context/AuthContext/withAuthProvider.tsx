import React, {ComponentType, useCallback, useEffect, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

import {AuthService} from '../../services';
import {AuthContext} from './AuthContext';
import {AuthUser} from './types';

export function withAuthProvider<T>(Component: ComponentType<T>) {
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
          setUser(undefined);
        }).catch(console.error);
    }, [setToken, setUser]);

    const signIn = useCallback(async (email: string, password: string) => {
      try {
        const response = await AuthService.signIn(email, password, uuid());
        const {Token: token, TokenExpires: tokenExpires} = response.AuthorizationToken;
        const {FullName: fullName} = response.User;
        setCookie('token', token, tokenExpires);
        setToken(token);
        setUser({fullName});
        return response;
      } catch(e) {
        console.error(e);
      }
    }, [setToken, setUser]);

    const signOut = useCallback(() => {
      setToken(undefined);
      setUser(undefined);
    }, [setToken, setUser]);

    useEffect(() => {
      const cookie = cookies['token'];
      if (cookie) {
        setToken(cookies['token']);
        return;
      }
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
        signOut,
        user
      }}>
        <Component {...props} />
      </AuthContext.Provider>
    );
  };
}
