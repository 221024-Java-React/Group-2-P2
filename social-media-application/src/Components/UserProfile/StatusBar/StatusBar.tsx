import React from 'react';
import './StatusBar.css';
import axios from 'axios';
import { userid } from '../../../Util/Users';

const STATUS_POST_URL = "http://localhost:3000/post/create";

const StatusBar = () => {

  const submitHandler = (event : any) => {
    event.preventDefault();

    console.log(event);
    console.log(event.target[0].value);

    axios.post(STATUS_POST_URL, {
      userid: userid,
      message: event.target[0].value
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
