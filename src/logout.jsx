// src/components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogout,resetState } from './reduxtoolkit3/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const nav = useNavigate()
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the setLogout action to clear user data in the Redux store
    dispatch(setLogout())
    dispatch(resetState())
    nav("/") 
  };
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Logout;
