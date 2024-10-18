import React, { useState, useEffect } from 'react';
import { useUsers } from '../context/UserContext';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const UserListPage = () => {
    const { state: users, dispatch } = useUsers();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Fetching user data from an external API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                dispatch({ type: 'CREATE_USER', payload: data.map(user => ({ id: user.id, name: user.name, email: user.email, phone: user.phone, status: true })) });
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [dispatch]);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || (filterStatus === 'active' ? user.status : !user.status);
        return matchesSearch && matchesStatus;
    });

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch({ type: 'DELETE_USER', payload: { id } });
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <Link to="/users/create">Create New User</Link>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <UserList users={currentUsers} onEdit={(id) => console.log('Edit user with id:', id)} onDelete={deleteUser} />
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default UserListPage;
