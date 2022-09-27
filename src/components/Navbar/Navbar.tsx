import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import style from './Navbar.module.css'
import NavItem from './NavItem/NavItem';

type MapStatePropsType = {
  authUserId: number | null
}
type MapDispatchPropsType = {}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Navbar: React.FC<PropsType> = (props) => {
  console.log("render")
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  authUserId: state.auth.userId
})

export default connect
  <MapStatePropsType, MapDispatchPropsType | null, OwnPropsType, AppStateType>
  (mapStateToProps, null)(Navbar);