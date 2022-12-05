import React from 'react';
import './Post.css';
import { User, userid } from '../../../../Util/Users';
import { PostData } from '../../../../Util/Posts';
import axios from 'axios';
import { Console } from 'console';

const DELETE_URL = "http://localhost:3000/posts/id?=";

const Post : React.FC<{post : PostData}> = ({post}) => {

  const deleteHandler = () => {
    //axios.delete(DELETE_URL + post.userid);
  };

  return (
    <div className='post'>
      <div className='post-header'>
        <img src='' alt='Profile Pic' />
        <div>
          <h3>{post.profileName}</h3>
          <p>{post.creationTime}</p>
        </div>
      </div>
      <p>{post.content}</p>
      { post.userid === userid ? <button onClick={deleteHandler}>Delete</button> : null }
    </div>
  );
};

export default Post;
