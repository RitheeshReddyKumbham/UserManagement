import React from 'react';
import UserForm from '../components/UserForm';
import { useUsers } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserCreatePage = () => {
    const { dispatch } = useUsers();
    const navigate = useNavigate();

    const handleCreateUser = (user) => {
        dispatch({ type: 'CREATE_USER', payload: user });
        navigate('/users');
    };

    return (
        <div>
            <h1>Create User</h1>
            <UserForm onSubmit={handleCreateUser} initialValues={{}} />
        </div>
    );
};

export default UserCreatePage;
