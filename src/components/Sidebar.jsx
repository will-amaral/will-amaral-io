import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <div className='inner'>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' className='scrolly' activeClassName='active'>
                Olá
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/habilidades'
                className='scrolly'
                activeClassName='active'
              >
                O que eu faço
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/projetos' className='scrolly' activeClassName='active'>
                Meus projetos
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/contato' className='scrolly' activeClassName='active'>
                Deixa um alô
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
