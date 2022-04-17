import {useContext} from 'react';

import {AuthContext} from './AuthContext';
import {AuthContextApi} from './types';

export const useAuth = (): AuthContextApi => {
  const authContext = useContext(AuthContext);

  return authContext;
};
