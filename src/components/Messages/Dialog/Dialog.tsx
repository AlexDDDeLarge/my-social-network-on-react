import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css'

type PropsType = {
  firstName: string
  lastName: string
  path: string
}

const Dialog: React.FC<PropsType> = (props) => {
  let name = `${props.firstName} ${props.lastName}`;

  return (
    <div>
      <NavLink to={`/messages/${props.path}`} activeClassName={style.active} className={style.dialog}>{name}</NavLink>     
    </div>  
  )
}

export default Dialog;

// to={`/messages/${props.firstName}-${props.lastName}-${props.userId}`}