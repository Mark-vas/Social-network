import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <NavBar friends={props.state.getState().friends} />
          <div className="content-page">
            <Route path='/profile' render={() =>
              <Profile {...props} state={props.state.getState()}
                changePost={props.state.changePost.bind(props.state)}
                addPost={props.state.addPost.bind(props.state)}
              />}
            />
            <Route path='/messages' render={() =>
              <Dialogs {...props} state={props.state.getState().dialogsPage} />}
            />
          </div>
        </div>
      </div >
    </BrowserRouter>
  );
}

// changePost={props.state.changePost.bind(props.state)} addPost={props.state.addPost.bind(props.state)}

export default App;