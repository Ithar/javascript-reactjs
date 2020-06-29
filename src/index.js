import React from 'react';                          // Main react library
import ReactDOM from 'react-dom';                   // Works as glue between react elements and reactJS
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';                // A react component
import './resources/css/index.css';                // Basic css
import * as serviceWorker from './serviceWorker';  // Let the app load faster on subsequent loads

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
