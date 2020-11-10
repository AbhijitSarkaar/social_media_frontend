import React from 'react';
import User from './User';
import './index.scss';

const Users = (props) => {
    return (
        <div className="users-container">
            <div className="users-table-header">
                <div>Id</div>
                <div>First Name</div>
                <div>Last name</div>
            </div>
            {
            props.users.map(user => 
                <User 
                    user={user}
                />
            )}   
        </div>
    );
};

export default Users;