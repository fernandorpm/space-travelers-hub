import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './navbarStyle.module.scss';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My Profile',
    },
  ];

  const linksList = links.map((link) => (
    <li key={link.id}>
      <NavLink to={link.path} activeClassName="active-link" exact>
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={style.container}>
        <div className={style.contentHolder}>

          <div>
            <img src="https://image.flaticon.com/icons/png/512/3212/3212567.png" ></img>
            <h1>Space Traveler's Hub</h1>
          </div>

          <div>
            <ul>
              {linksList}
            </ul>
          </div>

      </div>
    </nav>
  )
} 

export default Navbar;