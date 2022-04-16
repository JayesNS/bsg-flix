import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './components';
import {withAuthProvider} from './context';
import {Main, Player, Splash} from './views';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Splash />} />
          <Route
            path="home"
            element={<PrivateRoute component={Main} />}
          />
          <Route
            path="player/:mediaId"
            element={<PrivateRoute component={Player} />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default withAuthProvider(App);
