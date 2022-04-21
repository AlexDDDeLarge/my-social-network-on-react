import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Svgs from './components/Svgs/Svgs';
// import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
// import Profile from './components/Profile/Profile.jsx';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Hooks from './components/Hooks/Hooks';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    // this.props.loginThunk();
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) return <Preloader/>

    return (
      <div>
        <Svgs/>
        <HeaderContainer />
        <div className="app-wrapper">
          <Navbar />
          <div className="content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
            <Route path="/friends" component={Friends} />
            <Route path="/messages" render={() => <Messages/>} />
            <Route path="/users" render={() => <UsersContainer/>} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/login" render={() => <Login/>} />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

// function App (props) {
//   return (
//     <div>
//       <Svgs/>
//       <HeaderContainer />
//       <div className="app-wrapper">
//         <Navbar />
//         <div className="content">
//           <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
//           <Route path="/friends" component={Friends} />
//           <Route path="/messages" render={() => <Messages/>} />
//           <Route path="/users" render={() => <UsersContainer/>} />
//           <Route path="/news" component={News} />
//           <Route path="/settings" component={Settings} />
//           <Route path="/hooks" component={Hooks} />
//           <Route path="/login" render={() => <Login/>} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
