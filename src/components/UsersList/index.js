import React from 'react';
import '../../resources/css/bootstrap.css';

const UsersList = ({users, loadMore}) => (
    <div>
        {users.map(user => (
            <User user={user} key={user.id.value}/>
        ))}
        <form onSubmit={loadMore}>
            <input className="btn btn-info" type='submit' value='Load more'/>
        </form>
    </div>
);

const User = ({user}) => (
    <div style={{color: 'red'}} >
        <span>{user.name.first} {user.name.last}</span>
    </div>
);

export default UsersList;