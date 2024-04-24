// import React, { useState } from 'react';
// import axios from 'axios';
// const RegisterForm = ({ onRegisterSuccess }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const onLoginSuccess = (userData) => {
//         // Handle successful registration (e.g., display success message)
//         console.log('Registration successful:', userData);
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/register', { username, password });
//             onLoginSuccess(response.data); // Pass success message to parent component
//         } catch (err) {
//             setError(err.response.data.message || 'Registration failed');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Username and password input fields */}
//             {error && <div className="error">{error}</div>}
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (optional)
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      const response = await axios.post('/register', {
        email,
        phoneNumber,
        password,
      });
      onRegisterSuccess(response.data); // Pass success message to parent component
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
