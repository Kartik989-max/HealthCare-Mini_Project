import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            onLoginSuccess(response.data); // Pass user data to parent component
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Username and password input fields */}
            {error && <div className="error">{error}</div>}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
