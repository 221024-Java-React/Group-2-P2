import React from 'react';
import './StatusBar.css';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <form>
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
