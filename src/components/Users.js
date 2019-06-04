import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        axios('https://api.randomuser.me/?nat=US&results=3').
        then(response => {
            this.setState({
                users : [...this.state.users, ...response.data.results]
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.loadMore();
    }

    // Part of react life cycle; at the end
    render() {
        return(
            <div>
                {this.state.users.map(user =>
                    <div style={{color: 'red'}} key={user.id.value}>{user.name.first}</div>)
                }
                <form onSubmit={this.handleSubmit}>
                    <input type='submit' value='Load more' />
                </form>
            </div>
            );
    }
}

export default Users;