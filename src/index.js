import React from 'react';              // Main react library
import ReactDOM from 'react-dom';       // Works as glue between react elements and reactJS
import './resources/css/index.css';     // Basic css
import App from './App';                // A react component
import * as serviceWorker from './serviceWorker';   // Let the app load faster on subsequent loads

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
