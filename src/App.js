import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  debugger
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <NavBar friends={props.store.getState()} />
          <div className="content-page">
            <Route path='/profile' render={() =>
              <Profile {...props} state={props.store.getState()}
                dispatch={props.store.dispatch.bind(props.store)}
              />}
            />
            <Route path='/messages' render={() =>
              <DialogsContainer {...props} state={props.store.getState()}
                dispatch={props.store.dispatch.bind(props.store)}
              />}
            />
          </div>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;

// const App = (props) => {
//   debugger
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <div className="content">
//           <NavBar friends={props.store.getState()} />
//           <div className="content-page">
//             <Route path='/profile' render={() =>
//               <Profile {...props} state={props.store.getState()}
//                 dispatch={props.store.dispatch.bind(props.store)}
//               />}
//             />
//             <Route path='/messages' render={() =>
//               <DialogsContainer {...props} state={props.store.getState()}
//                 dispatch={props.store.dispatch.bind(props.store)}
//               />}
//             />
//           </div>
//         </div>
//       </div >
//     </BrowserRouter>
//   );
// }