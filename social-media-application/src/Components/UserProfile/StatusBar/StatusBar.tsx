import React from 'react';
import './StatusBar.css';
import axios from 'axios';
import { userId } from '../../../Util/Users';
import { useNavigate } from "react-router";

const STATUS_POST_URL = "http://localhost:8090/posts/create/";

const StatusBar = () => {

    const navigate = useNavigate();

  const cookie = document.cookie.slice(8);


  const submitHandler = (event : any) => {
    event.preventDefault();

    axios.post(STATUS_POST_URL + cookie, {
      userId: userId,
      content: event.target[0].value
    }).then(() => {
        return navigate(0);
    });
  };

  return (
    <div className='status-bar'>
      <form onSubmit={submitHandler}>
        <textarea
          name='status'
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        ></textarea>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default StatusBar;
