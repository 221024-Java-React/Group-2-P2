import React from 'react';

import './App.css';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Register from './Components/Register';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
