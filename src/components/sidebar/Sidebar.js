import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'; // Подключите свой файл стилей для бокового меню

const MobileNavigation = ({ activeLink, link }) => (
  <nav className="nav">
    <ul className="nav-list__mobile">
      <li className="nav-list-item">
        <NavLink exact to="/" activeClassName={activeLink} className={link}>
          HOME
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink to="/gallery" activeClassName={activeLink} className={link}>
          GALLERY
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink to="/contacts" activeClassName={activeLink} className={link}>
          CONTACTS
        </NavLink>
      </li>
      <li className="nav-list-item">PRICES</li>
    </ul>
    {/* <div className="my-title">
      LET ME CAPTURE <span>MOMENTS</span> OF YOUR LIFE
    </div> */}
  </nav>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <MobileNavigation activeLink="link--active" link="link" />
      </div>
    </div>
  );
};

export default Sidebar;
