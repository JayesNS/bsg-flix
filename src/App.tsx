import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './components';
import {withAuthProvider} from './context';
import {Main, Player, SignInView, Splash} from './views';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="signIn" element={<SignInView />} />
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
  );
};

export default withAuthProvider(App);
