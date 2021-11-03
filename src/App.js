import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Svgs from './components/Svgs/Svgs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div>
      <Svgs/>
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/friends" component={Friends}/>
          <Route path="/messages">
            <MessagesContainer/> 
          </Route>
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/news" component={News}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </div>
  );
}

export default App;
