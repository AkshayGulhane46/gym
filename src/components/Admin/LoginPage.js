import React, { useState } from 'react';
import { Link, Navigate, useHistory, useNavigate, useRoutes } from 'react-router-dom'; // Import useHistory hook from React Router
import '../../Styles/LoginPage.scss'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials for demonstration purposes
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Set authentication status in local storage
      localStorage.setItem('isAuthenticated', true);
      // Redirect to dashboard page
      Navigate("/clients")
      
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <div className='main_div'>
    <div className='image_div'>
      <p>Image will be placed here</p>  
    </div> 

    <div className='login_div'>
      <h2>Login Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>
  );
}

export default LoginPage;
