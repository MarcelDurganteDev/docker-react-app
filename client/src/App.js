import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as route from './routes';
import Home from './pages/home/Home';
import CreatePost from './pages/createPost/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.HOME} element={<Home />} />
        <Route path={route.CREATE_POST} element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
