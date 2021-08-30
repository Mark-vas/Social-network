import store from './State/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

let renderPage = () =>
    ReactDOM.render(
        <React.StrictMode>

            <App store={store} />

        </React.StrictMode>,
        document.getElementById('root')
    );

renderPage(store)

store.subscribe(renderPage)