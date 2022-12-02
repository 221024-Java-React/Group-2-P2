import React from 'react';
import './Login.css';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';

const Login = () => {

  const loginHandler = (event : any) => {

    event.preventDefault();

    axios.post("http://localhost:8090/login", {
      email: event.target[0].value,
      password: event.target[1].value
    }).then((response) => {

      // TODO redirect
      console.log(response);
    //   localStorage.setItem("CurrentUser", response.data);
        document.cookie = `SESSION=${response.data}`;

    });
  }

  return (
    <>
      <Navigation />
      <form className='login-form' onSubmit={loginHandler}>
        <h1>Login</h1>
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
        <h4>Not A Member?</h4>
        <a href='/register'>Sign Up</a>
      </form>
    </>
  );
};

export default Login;
