import React from 'react';
import { Link } from 'react-router-dom';
import * as route from '../../routes';

const navBar = () => (
  <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav mr-auto'>
        <li className='navbar-item'>
          <Link to={route.HOME} className='nav-link'>
            Home
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to={route.CREATE} className='nav-link'>
            Create
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default navBar;
