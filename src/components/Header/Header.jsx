import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logoBox}>
          <svg className={style.logo}>
            <use xlinkHref="#reactLogo" x="0" y="0"></use>
          </svg>
        </div>
        <div className={style.loginBlock}>
          {props.isAuth ?
            props.login 
            :<NavLink to="/login">Sign in</NavLink>
          }
        </div>
        <div className={style.burgerBtn}>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;