import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {withAuthProvider} from './context';

import {Main, Player, Splash} from './views';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Splash />} />
          <Route path="home" element={<Main />} />
          <Route path="player/:mediaId" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default withAuthProvider(App);
