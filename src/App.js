import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Svgs from './components/Svgs/Svgs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Friends from './components/Friends/Friends';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div>
      <Svgs/>
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Route path="/profile">
            <Profile
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}/>
          </Route>
          <Route path="/friends" component={Friends}/>
          <Route path="/messages">
            <Messages 
              messagesPage={props.state.messagesPage}
              dispatch={props.dispatch}
            /> 
          </Route>
          <Route path="/news" component={News}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </div>
  );
}

export default App;
