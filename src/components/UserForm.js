import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState(initialValues.name || '');
    const [email, setEmail] = useState(initialValues.email || '');
    const [phone, setPhone] = useState(initialValues.phone || '');
    const [status, setStatus] = useState(initialValues.status || true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, phone, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <select value={status} onChange={(e) => setStatus(e.target.value === 'true')}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
