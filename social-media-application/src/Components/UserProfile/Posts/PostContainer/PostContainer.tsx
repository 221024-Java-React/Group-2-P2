import React from 'react';
import Post from '../Post/Post';
import './PostContainer.css';

const PostContainer = (props : any) => {
  return (
    <div className='post-container'>
      <h2 hidden>Posts</h2>
      {props.children}
    </div>
  );
};

export default PostContainer;
