import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [...state, { ...action.payload, id: state.length + 1 }];
        case 'UPDATE_USER':
            return state.map(user => user.id === action.payload.id ? { ...user, ...action.payload } : user);
        case 'DELETE_USER':
            return state.filter(user => user.id !== action.payload.id);
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: true },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: false },
        // Add more hardcoded users as needed...
    ];

    const [state, dispatch] = useReducer(userReducer, initialUsers);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => useContext(UserContext);
