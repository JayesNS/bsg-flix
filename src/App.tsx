import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Main, Player, Splash } from './views';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="splash" element={<Splash />} />
          <Route path="player" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
