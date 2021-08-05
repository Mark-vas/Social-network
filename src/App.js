import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <NavBar />
          <div className="content-page">
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Dialogs} />
          </div>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
