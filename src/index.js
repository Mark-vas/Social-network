import store from './State/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderPage = () =>
    ReactDOM.render(
        <React.StrictMode>
            <App state={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );

renderPage(store)

store.subscribe(renderPage)