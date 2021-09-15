import React from 'react';
import './App.css';
import Messages from './components/Messages/Messages';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Gallery from './components/Gallery/Gallery';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Route path="/profile" component={Profile}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/news" component={News}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
