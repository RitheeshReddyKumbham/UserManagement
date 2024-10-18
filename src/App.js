import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import UserListPage from './pages/UserListPage';
import UserCreatePage from './pages/UserCreatePage';
import UserEditPage from './pages/UserEditPage';
import './styles/App.css';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/users" element={<UserListPage />} />
                    <Route path="/users/create" element={<UserCreatePage />} />
                    <Route path="/users/edit/:id" element={<UserEditPage />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
