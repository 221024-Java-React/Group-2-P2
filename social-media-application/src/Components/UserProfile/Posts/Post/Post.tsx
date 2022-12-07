import React from 'react';
import './Post.css';
import { User, userId } from '../../../../Util/Users';
import { PostData } from '../../../../Util/Posts';
import axios from 'axios';
import { Console } from 'console';

const DELETE_URL = "http://localhost:3000/posts/id?=";

const Post = (props : any) => {

  const deleteHandler = () => {
    //axios.delete(DELETE_URL + post.userid);
  };

  return (
    <div className='post'>
      <div className='post-header'>
        <img src='' alt='Profile Pic' />
        <div>
          <h3>{props.post.profileName}</h3>
          <p>{props.post.creationTime}</p>
        </div>
      </div>
      <p>{props.post.content}</p>
      { props.post.userId === userId ? <button onClick={deleteHandler}>Delete</button> : null }
    </div>
  );
};

export default Post;
