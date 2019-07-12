import React, {Component} from 'react';
import './App.css';
import logo from '../../resources/images/spika.jpg';
import Routing from '../../containers/Routing';

class App extends Component {

    // Part of react life cycle; at the end
    render() {
      return(
      <div className="App">
        <header className="App-header">
            <a href="http://localhost:3000">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <Routing />
        </header>
      </div>
      );
    }
}

export default App;
