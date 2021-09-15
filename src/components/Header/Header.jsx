import React from 'react';
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <svg className={style.logo}>
          <use xlinkHref="#reactLogo" x="0" y="-45"></use>
        </svg>
    </header>
  )
}

export default Header;