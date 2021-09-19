import React from 'react';
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logoBox}>
          <svg className={style.logo}>
            <use xlinkHref="#reactLogo" x="0" y="0"></use>
          </svg>
        </div>
        <div className={style.burgerBtn}>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;