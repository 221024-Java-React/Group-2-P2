import React from 'react';
import Post from './Posts/Post/Post';
import './PostContainer.css';

const PostContainer = () => {
  return (
    <div className='post-container'>
      <h2 hidden>Posts</h2>
      <Post />
      <Post />
    </div>
  );
};

export default PostContainer;
