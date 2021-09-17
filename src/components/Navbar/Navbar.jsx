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
    </nav>
  )
}

export default Navbar;