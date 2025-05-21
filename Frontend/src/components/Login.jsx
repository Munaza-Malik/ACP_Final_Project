import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wmlogo from '../assets/wmlogo.png';
const Login = ({ toggleAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
      
      else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <img src={wmlogo} alt="Furniture Store Logo" className="wmlogo" />
      <h1>Login</h1>
      <div className="input-group">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button onClick={handleLogin}>Sign in</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        <span>Don't have an account? </span>
        <b onClick={() => navigate('/signup')} className="pointer">Sign up here</b>
      </p>
    </div>
  );
};

export default Login;
