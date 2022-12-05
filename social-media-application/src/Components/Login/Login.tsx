import React from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();


  const loginHandler = (event : any) => {

    event.preventDefault();

    axios.post("http://localhost:8090/login", {
      email: event.target[0].value,
      password: event.target[1].value
    }).then((response) => {
        document.cookie = `SESSION=${response.data}`;
        return navigate("/");
    });
  }

  return (
    <>
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
