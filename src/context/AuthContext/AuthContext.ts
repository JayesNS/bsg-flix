/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {AuthContextApi} from './types';

export const AuthContext = React.createContext<AuthContextApi>({
  signInAnonymous: () => {},
  signIn: (email, password) => Promise.reject(),
  signOut: () => {}
});