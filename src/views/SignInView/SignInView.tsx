import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

import {Logo, SignInBox} from '../../components';
import {useAuth} from '../../context';

import './SignInView.css';

const SignInView = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="SignInView">
      <div className="SignInView__logo">
        <Logo style={{width: '100px', height: '100px'}} />
      </div>
      <SignInBox onSignIn={() => navigate('/home')} />
    </div>
  );
};

export default SignInView;
