import React from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from '../../context';
import {Logo} from '../Logo';

import './NavBar.css';

const NavBar = () => {
  const {user, signOut} = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  const renderSignOutButtons = () => (
    <>
      {user?.fullName ? <span className="header__right__user">{user?.fullName}</span> : null}
      <button className="text" onClick={handleSignOut} data-testid="sign-out-button">
        Sign Out
      </button>
    </>
  );

  const renderSignInButtons = () => (
    <Link to="/signIn">
      <button className="flat" data-testid="sign-in-button">
        Sign In
      </button>
    </Link>
  );

  return (
    <header className="NavBar">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        {user ? renderSignOutButtons() : renderSignInButtons()}
      </div>
    </header>
  );
};

export default NavBar;