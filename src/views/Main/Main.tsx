import React from 'react';

import {MediaListWidget, NavBar} from '../../components';

import './Main.css';

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <MediaListWidget listId={2} />
      <MediaListWidget listId={5} />
    </div>
  );
};

export default Main;
