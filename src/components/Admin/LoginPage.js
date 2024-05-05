import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import only necessary hook
import '../../Styles/LoginPage.scss';

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
      Navigate("/clients");
    } else {
      setError('Invalid username or password, enter again');
    }
  };

  return (
    <div className='main_div'>
      <div className='image_div'>
        <img className='banner_image' 
          src='login_image.jpg'
        />
      </div>
      <div className='login_div'>
        <div className='banners'>
          <h2>Hey, Welcome</h2>
          {error ? <p style={{ color: 'red' }}>{error}</p> : <p>Sign in with valid credentials.</p>}
        </div>
        <div className='inputs_div'>
          <div className='inputs'>
            <div className='label'>
              <label htmlFor="username">Username:</label>
            </div>
            <div className='input_field'>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className='inputs'>
            <div className='label'>
              <label htmlFor="password">Password:</label>
            </div>
            <div className='input_field'>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='inputs'>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
