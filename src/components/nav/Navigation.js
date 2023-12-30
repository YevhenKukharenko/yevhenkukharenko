import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './style.css';
import Sidebar from '../sidebar/Sidebar';

const Navigation = () => {
  const activeLink = 'link--active';
  const link = 'link';
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const isTablet = useMediaQuery({ query: '(min-width: 501px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile && <Sidebar />}
      {isDesktopOrLaptop && (
        <DesktopNavigation activeLink={activeLink} link={link} />
      )}
      {isTablet && !isDesktopOrLaptop && (
        <TabletNavigation activeLink={activeLink} link={link} />
      )}
      {/* {isMobile && <MobileNavigation activeLink={activeLink} link={link} />} */}
    </>
  );
};

// Ваш остальной код остается без изменений

const DesktopNavigation = ({ activeLink, link }) => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          GALLERY
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          CONTACTS
        </NavLink>
      </li>
      <li className="nav-list-item">PRICES</li>
    </ul>
    <div className="my-title">
      LET ME CAPTURE <span>MOMENTS</span> OF YOUR LIFE
    </div>
  </nav>
);

const TabletNavigation = ({ activeLink, link }) => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          GALLERY
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          CONTACTS
        </NavLink>
      </li>
      <li className="nav-list-item">PRICES</li>
    </ul>
    <div className="my-title">
      LET ME CAPTURE <span>MOMENTS</span> OF YOUR LIFE
    </div>
  </nav>
);

const MobileNavigation = ({ activeLink, link }) => (
  <nav className="nav">
    <ul className="nav-list__mobile">
      <li className="nav-list-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          GALLERY
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          CONTACTS
        </NavLink>
      </li>
      <li className="nav-list-item">PRICES</li>
    </ul>
    <div className="my-title">
      LET ME CAPTURE <span>MOMENTS</span> OF YOUR LIFE
    </div>
  </nav>
);

export default Navigation;
