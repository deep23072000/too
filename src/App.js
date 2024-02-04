// src/App.js
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';

import Login from './reduxtoolkit3/Login';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={(user)?<Home />:<Login/>}></Route>
       </Routes>
    </BrowserRouter>   
  );
}

export default App;


