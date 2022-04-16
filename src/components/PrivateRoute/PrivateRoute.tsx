import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../context';

interface PrivateRouteParams {
  component: ComponentType,
  redirectPath?: string
}

const PrivateRoute = ({
  component: Component,
  redirectPath = '/'
}: PrivateRouteParams) => {
  const {token} = useAuth();

  if (!token) {
    return <Navigate to={redirectPath} />;
  }

  return <Component />;
};

export default PrivateRoute;
