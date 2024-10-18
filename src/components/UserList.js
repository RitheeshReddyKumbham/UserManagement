import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserItem 
                        key={user.id} 
                        user={user} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserList;
