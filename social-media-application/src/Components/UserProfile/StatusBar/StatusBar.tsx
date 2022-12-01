import React from 'react';
import './StatusBar.css';

const StatusBar = () => {

  const submitHandler = () => {
    console.log("Submiting Post");
  };

  return (
    <div className='status-bar'>
      <form>
        <textarea
          name='status'
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        ></textarea>
        <button  onClick={submitHandler} type='submit'>Update</button>
      </form>
    </div>
  );
};

export default StatusBar;
