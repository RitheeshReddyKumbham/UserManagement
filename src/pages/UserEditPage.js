import React, { useEffect } from 'react';
import UserForm from '../components/UserForm';
import { useUsers } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';

const UserEditPage = () => {
    const { id } = useParams();
    const { state, dispatch } = useUsers();
    const navigate = useNavigate();
    const user = state.find(user => user.id === parseInt(id));

    useEffect(() => {
        if (!user) {
            navigate('/users');
        }
    }, [user, navigate]);

    const handleUpdateUser = (updatedUser) => {
        dispatch({ type: 'UPDATE_USER', payload: { id: user.id, ...updatedUser } });
        navigate('/users');
    };

    return (
        <div>
            <h1>Edit User</h1>
            {user && <UserForm onSubmit={handleUpdateUser} initialValues={user} />}
        </div>
    );
};

export default UserEditPage;
