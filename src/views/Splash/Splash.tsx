import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../context';

import './Splash.css';

const Splash = () => {
  const {token} = useAuth();

  return !token
    ? (
      <div className="Splash">Splash</div>
    )
    : <Navigate to="/home" />;
};

export default Splash;
