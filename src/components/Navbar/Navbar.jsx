import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <NavItem relativePath="/profile" pageName="Profile"/>
      <NavItem relativePath="/messages" pageName="Messages"/>
      <NavItem relativePath="/news" pageName="News"/>
      <NavItem relativePath="/gallery" pageName="Gallery"/>
      <NavItem relativePath="/settings" pageName="Settings"/>
      {/* <div className={style.nav__item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/settings">Settings</NavLink>
      </div> */}
    </nav>
  )
}

export default Navbar;