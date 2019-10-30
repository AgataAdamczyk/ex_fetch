import React from 'react';
import './UsersList.css';

const UsersList = props => {
    console.log(props.users);

    const users = props.users.map(user => (
        <div className="user" key={user.login.uuid}>
            <img src={user.picture.large} alt={user.picture.last}/>
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.location.country}</p>
            <div className="loginData">
                <h4>{`e-mail: ${user.email}`}</h4>
                <p>{`login: ${user.login.username}`}</p>
                <p>{`password: ${user.login.password}`}</p>
            </div>
            
        </div>
    ))
    return (
    <div className="users">
        {users}
    </div>
    );
}

export default UsersList;