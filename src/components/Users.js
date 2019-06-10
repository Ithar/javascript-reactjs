import React, {Component} from 'react';
import axios from 'axios';
import Loading from './Loading';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loaded : false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Part of react life cycle; before component mounts
    componentWillMount() {
        this.loadUsers();
    }

    loadUsers() {
        axios('https://api.randomuser.me/?nat=US&results=3').
        then(response => {
            this.setState({
                users : [...this.state.users, ...response.data.results],
                loaded : true
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loaded : false
        });
        this.loadUsers();
    }

    showUsers = (users) => (
        <div>
            {users.map(user =>
                <div style={{color: 'red'}} key={user.id.value}>
                    <span>{user.name.first} {user.name.last}</span>
                </div>)
            }
            <form onSubmit={this.handleSubmit}>
                <input type='submit' value='Load more' />
            </form>
        </div>
    );

    // Part of react life cycle; at the end
    render() {

        const {loaded, users} = this.state;

        return(
            <div>
            {loaded ? this.showUsers(users) :  <Loading message='please wait ... '/>}
            </div>
        );
    }
}

export default Users;