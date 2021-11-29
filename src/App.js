import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <div className="content">
          <NavBar />
          <div className="content-page">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;