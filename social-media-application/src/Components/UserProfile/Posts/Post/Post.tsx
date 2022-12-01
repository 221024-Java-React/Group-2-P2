import React from 'react';
import './Post.css';
import { User, users } from '../../../../Util/Users';
import { PostData } from '../../../../Util/Posts';

const Post : React.FC<{post : PostData}> = ({post}) => {
  return (
    <div className='post'>
      <div className='post-header'>
        <img src='' alt='Profile Pic' />
        <div>
          <h3>{users[post.userid].profileName}</h3>
          <p>{post.time}</p>
        </div>
      </div>
      <p>{post.message}</p>
    </div>
  );
};

export default Post;
