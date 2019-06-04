import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Loading from './Loading';

class App2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loaded : false
        }
    }

    setUsers() {

        axios('https://api.randomuser.me/?nat=US&results=3').
        then(response => {
            this.setState({
                users : response.data.results,
                loaded: true
            });
        });
    }

    // Part of react life cycle; before component mounts
    componentWillMount() {
        this.setUsers();
    }

    // Part of react life cycle; at the end
    render() {
      return(
      <div className="App">
        <header className="App-header">
            {this.state.loaded ?
                <div>{this.state.users.map(user => <div>{user.name.first}</div>)}</div>
                :
                <Loading/>
            }
        </header>
      </div>
      );
    }
}

export default App2;

//<img src={logo} className="App-logo" alt="logo" />

