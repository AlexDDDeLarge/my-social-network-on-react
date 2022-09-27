import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
  let [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    let html: HTMLHtmlElement | null = document.querySelector("html");

    html && html.classList.add(colorTheme);
    
    if (colorTheme === "light" && html && html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else if (colorTheme === "dark" && html && html.classList.contains("light")) {
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