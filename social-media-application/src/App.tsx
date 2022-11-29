import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
