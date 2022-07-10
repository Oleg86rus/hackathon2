import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar bg-light mb-3'>
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <NavLink exact className='nav-link' to='/'>Главная</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className='nav-link' to='/users'>Состав команды</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className='nav-link' to='/users'>Избранные</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
