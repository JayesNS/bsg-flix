import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

import {Logo} from '../../components';
import {useAuth} from '../../context';

import './Splash.css';

const Splash = () => {
  const {token, signInAnonymous} = useAuth();

  useEffect(() => {
    signInAnonymous();
  }, [signInAnonymous]);

  return !token
    ? (
      <div className="Splash">
        <Logo style={{width: '100px', height: '100px'}} />
      </div>
    )
    : <Navigate to="/home" />;
};

export default Splash;
