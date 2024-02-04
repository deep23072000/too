// src/components/Login.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading, setError } from './authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      dispatch(setLoading());

      // Replace this with your actual authentication API call
      const response = await axios.get('http://localhost:4000/reg');
      const user = await response.data;

      if (user) {
        let sss = user.find((e) => e.username === username && e.password === password);
        if (sss) {
          alert('Successful');
          dispatch(setUser(sss));
          nav("/home")
        } else {
          dispatch(setError('Invalid username or password'));
        }
      } else {
        dispatch(setError('Authentication failed'));
      }
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
