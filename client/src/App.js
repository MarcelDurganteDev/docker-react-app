import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as route from './routes';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
