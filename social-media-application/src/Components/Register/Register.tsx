import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Register.css';
import axios from 'axios';

import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();

  const registerHandler = (event : any) => {

    event.preventDefault();

    axios.post("http://localhost:8090/users/register", {
      profileName: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }).then((response) => {
      return navigate("/login");
    });
  }

  return (
    <>
      <Navigation />
      <form className='reg-form' onSubmit={registerHandler}>
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
        <h4>Already A Member?</h4>
        <a href='/login'>Login</a>
      </form>
    </>
  );
};

export default Register;
