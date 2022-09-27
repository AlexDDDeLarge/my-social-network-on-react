import React from 'react';
import style from './NavItem.module.css'
import { NavLink } from 'react-router-dom';

type PropsType = {
  relativePath: string
  pageName: string
}

const NavItem: React.FC<PropsType> = (props) => {
  return (
    <div className={style.nav__item}>
      <NavLink to={props.relativePath} activeClassName={style.nav__link_active}>
      <div className={style.arrow}/>{props.pageName}
      </NavLink>
    </div>
  )
}

export default NavItem;