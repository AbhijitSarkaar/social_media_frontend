import React from 'react';
import './index.scss';

const User = (props) => {
    return (
        <div className="user-container">
            <div>{props.user.id}</div>
            <div>{props.user.first_name}</div>
            <div>{props.user.last_name}</div>
        </div>
    );
};

export default User;