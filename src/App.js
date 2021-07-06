import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <NavBar />
        <Profile />
      </div>
    </div >
  );
}

export default App;
