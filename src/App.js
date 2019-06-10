import React, {Component} from 'react';
import './resources/css/App.css';
import Users from './components/Users';

class App extends Component {

    constructor(props) {
        super(props);
    }

    // Part of react life cycle; at the end
    render() {
      return(
      <div className="App">
        <header className="App-header">
            <Users />
        </header>
      </div>
      );
    }
}

export default App;