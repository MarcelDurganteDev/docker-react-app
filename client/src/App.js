import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as route from './routes';
import Home from './pages/home/Home';
import CreatePost from './pages/createPost/CreatePost';
import ErrorPage from './pages/errorPage/ErrorPage';
import EditPost from './pages/editPost/EditPost';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path={route.HOME} element={<Home />} />
        <Route path={route.CREATE} element={<CreatePost />} />
        <Route path={route.LIST} element={<Home />} />
        <Route path={route.READ} element={<Home />} />
        <Route path={route.UPDATE} element={<EditPost />} />
        <Route path={route.DELETE} element={<Home />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
