import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className='login-form'>
      <h1>Login</h1>
      <input type='text' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <button type='submit'>Login</button>
      <h4>Not a member?</h4>
      <a href='#'>Sign Up</a>
    </form>
  );
};

export default Login;
