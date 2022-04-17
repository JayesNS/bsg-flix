import {SignInResponse} from '../../types';

export interface AuthUser {
  fullName: string;
}

export interface AuthContextApi {
  token?: string;
  user?: AuthUser;
  signInAnonymous: () => void;
  signIn: (username: string, password: string) => Promise<SignInResponse | undefined>;
  signOut: () => void
}
