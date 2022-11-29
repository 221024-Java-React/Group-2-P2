import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <div className='post-header'>
        <img src='' alt='Profile Pic' />
        <div>
          <h3>Jack Koscheka</h3>
          <p>9 hrs</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        debitis ducimus impedit illum accusantium consequatur voluptas natus
        quod minus. Ad maxime tempora vero incidunt? Quaerat porro suscipit esse
        qui vero.
      </p>
    </div>
  );
};

export default Post;
