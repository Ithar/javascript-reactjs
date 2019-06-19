import React, {Component} from 'react';
import './App.css';
import logo from '../../resources/images/spika.jpg';
import Main from '../Main';

class App extends Component {

    // Part of react life cycle; at the end
    render() {
      return(
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Main />
        </header>
      </div>
      );
    }
}

export default App;
