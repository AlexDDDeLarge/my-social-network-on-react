import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props) => {
  let [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    let html = document.querySelector("html");

    html.classList.add(colorTheme);
    
    if (colorTheme === "light" && html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else if (colorTheme === "dark" && html.classList.contains("light")) {
      html.classList.remove("light"); 
    }
  }, [colorTheme]);

  const changeTheme = () => {
    if (colorTheme === "light") setColorTheme("dark")
    else setColorTheme("light"); 
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logoBox}>
          <svg className={style.logo}>
            <use xlinkHref="#reactLogo" x="0" y="0"></use>
          </svg>
        </div>
        <div onClick={changeTheme} >{
          (colorTheme === "light") 
          ? <button>dark</button>
          : <button>light</button>
        }</div>
        <div className={style.loginBlock}>
          {props.isAuth ?
            props.login 
            :<NavLink to="/login">Sign in</NavLink>
          }
        </div>
        <div className={style.burgerBtn}>
          <span></span>
        </div>
        { props.isAuth && <div className={style.logOutBtn} onClick={props.logout}></div> }
      </div>
    </header>
  )
}

export default Header;