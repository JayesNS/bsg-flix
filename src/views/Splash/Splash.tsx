import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context';

import './Splash.css';

const Splash = () => {
  const {token, signInAnonymous} = useAuth();

  useEffect(() => {
    if (!token) {
      signInAnonymous();
    }
  }, []);

  return !token
    ? (
      <div className="Splash">Splash</div>
    )
    : <Navigate to="/home" />;
};

export default Splash;
