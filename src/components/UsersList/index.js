import React from 'react';
import '../../resources/css/bootstrap.css';
import './user.css';

const UsersList = ({users, loadMore}) => (
    <div className="userList">
        {users.map(user => (
            <User user={user} key={user.id.value}/>
        ))}
        <form onSubmit={loadMore}>
            <input className="btn btn-info" type='submit' value='Load more'/>
        </form>
    </div>
);

const User = ({user}) => {
    let thumbnail = user.picture.thumbnail;
    let firstName = upperFirst(user.name.first);
    let lastName = upperFirst(user.name.last);
    let address = upperFirst(user.location.city) + ' ' + upperFirst(user.location.state) + ' ' + user.nat;
    let email = user.email;

    return (
    <div>
        <img src={thumbnail} alt={firstName}/>
            <h1 className="username">{firstName} {lastName}</h1>
            <p className="address">{address}</p>
            <p className="email">{email}</p>
    </div>);
};

let upperFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default UsersList;