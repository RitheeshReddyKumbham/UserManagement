import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.status ? 'Active' : 'Inactive'}</td>
            <td>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default UserItem;
