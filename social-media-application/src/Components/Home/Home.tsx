import React from 'react'
import Navigation from '../Navigation/Navigation';
import Post from '../UserProfile/Posts/Post/Post';
import PostContainer from '../UserProfile/Posts/PostContainer/PostContainer';
import { PostData, posts } from '../../Util/Posts';

const Home = () => {
  const userPosts = posts.map((postData : PostData) => {
    return <Post key={postData.id} post={postData} />;
  });

  return (
    <>
        <Navigation />
        <PostContainer>
          {userPosts}
        </PostContainer>
    </>
  )
}

export default Home