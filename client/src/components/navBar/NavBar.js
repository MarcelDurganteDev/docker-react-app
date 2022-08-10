import React from 'react';
import { Link } from 'react-router-dom';
import * as route from '../../routes';

const navBar = () => (
  <div className='d-flex justify-content-between align-items-center'>
    <nav className='navbar navbar-light navbar-expand-xl'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active mx-5'>
          <Link to={route.HOME} className='nav-link fs-1'>
            Home
          </Link>
        </li>
        <li className='nav-item active mx-5'>
          <Link to={route.CREATE} className='nav-link fs-1'>
            Create
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default navBar;
