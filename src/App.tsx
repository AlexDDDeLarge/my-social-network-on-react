import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Redirect, Route } from 'react-router-dom';
import Svgs from './components/Svgs/Svgs';
import Navbar from './components/Navbar/Navbar';
// import Friends from './components/Friends/Friends';
// import News from './components/News/News';
// import Settings from './components/Settings/Settings';
// import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import Login from './components/Login/Login';
// import Messages from './components/Messages/Messages';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import store, { AppStateType } from "./redux/reduxStore";
import EditProfile from './components/EditProfile/EditProfile';

const Login = lazy(() => import('./components/Login/Login'));
// const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Messages = lazy(() => import('./components/Messages/Messages'));
const Friends = lazy(() => import('./components/Friends/Friends'));

type MSPType = {
  initialized: boolean
}
type MDPType = {
  initializeApp: () => void
}
type OPType = {}
type PropsType = MSPType & MDPType & OPType

const App: React.FC<PropsType> = props => {
  const catchAllUnhandledErrors = (reason?: any, promise?: Promise<any>): void => {
    alert(reason);
  }

  useEffect(() => {
    props.initializeApp();
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
  }, [props.initialized])

  if (!props.initialized) return <Preloader/>

  return (
    <div>
      <Svgs/>
      <HeaderContainer />
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Suspense fallback={<Preloader/>} >
            <Route path="/" render={() => <Redirect to="/profile" />} />
            <Route path="/login" render={() => <Login/>} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
            <Route path="/messages" render={() => <Messages/>} />
            <Route path="/users" render={() => <UsersContainer/>} />
            <Route path="/friends" render={() => <Friends/>} />
            <Route path="/editProfile" render={() => <EditProfile/>} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = (state: AppStateType): MSPType => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.FC>(
  withRouter,
  connect
    <MSPType, MDPType, OPType, AppStateType>
    (mapStateToProps, {initializeApp})
)(App);

type GeneralAppPropsType = {}

let GeneralApp: React.FC<PropsType> = props => {
  return (
    <React.StrictMode>
      <BrowserRouter> 
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode> 
  )
}

export default GeneralApp;
