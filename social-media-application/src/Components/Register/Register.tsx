import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Register.css';

const Register = () => {
  return (
    <>
      <Navigation />
      <form className='reg-form'>
        <h1>Register</h1>
        <input type='text' name='profileName' placeholder='Profile Name' />
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
        />
        <button type='submit'>Register</button>
        <h4>Already a member?</h4>
        <a href='#'>Login</a>
      </form>
    </>
  );
};

export default Register;
