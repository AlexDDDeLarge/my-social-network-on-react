import React from 'react';
import { connect } from 'react-redux';
import style from './Navbar.module.css'
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <NavItem 
        relativePath={props.authUserId
          ? `/profile/${props.authUserId}`
          : `/profile`
        } 
        pageName="Profile"
      />
      <NavItem relativePath="/users" pageName="Users"/>
      <NavItem relativePath="/friends" pageName="Friends"/>
      <NavItem relativePath="/messages" pageName="Messages"/>
      <NavItem relativePath="/news" pageName="News"/>
      <NavItem relativePath="/settings" pageName="Settings"/>
    </nav>
  )
}

let mapStateToProps = state => ({
  authUserId: state.auth.userId
})

export default connect(mapStateToProps, null)(Navbar);