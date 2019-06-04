import React, {Component} from 'react';
import axios from 'axios';
import './resources/css/App.css';
import Loading from './components/Loading';
import Users from './components/Users';

class App extends Component {

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
      const {loaded, users} = this.state;
      return(
      <div className="App">
        <header className="App-header">
            {loaded ?
                <Users users={users}/>
                :
                <Loading message='please wait'/>
            }
        </header>

      </div>
      );
    }
}

export default App;
//  <Users users={this.state.users} />
//<img src={logo} className="App-logo" alt="logo" />