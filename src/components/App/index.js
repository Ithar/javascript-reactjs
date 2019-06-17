import React, {Component} from 'react';
import './App.css';
import logo from '../../resources/images/spika.jpg';
import Users from '../../containers/Users/';

class App extends Component {

    // Part of react life cycle; at the end
    render() {
      return(
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Users />
        </header>
      </div>
      );
    }
}

export default App;
