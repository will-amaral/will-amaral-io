import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
      <NavLink className='title' exact to='/' activeClassName='active'>
        Home
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/dev' activeClassName='active'>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to='/dev/chatApp' activeClassName='active'>
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink to='/dev/markdown' activeClassName='active'>
              Editor Markdown
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
