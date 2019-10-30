import React from 'react';
import './ButtonFetchUsers.css';

const ButtonFetchUsers = props => {
    return (
    <button className="btn" onClick={props.click}>Generate</button>
    );
}

export default ButtonFetchUsers;