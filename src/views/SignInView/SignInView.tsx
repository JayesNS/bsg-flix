import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

import {SignInBox} from '../../components';
import {useAuth} from '../../context';

import './SignInView.css';

const SignInView = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/home" />;
  }

  return <SignInBox onSignIn={() => navigate('/home')} />;
};

export default SignInView;
