import React, { useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import Post from '../UserProfile/Posts/Post/Post';
import PostContainer from '../UserProfile/Posts/PostContainer/PostContainer';
import { PostData } from '../../Util/Posts';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {

  const [activeUsers, setActiveUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8090/");

    axios.get("http://localhost:8090/posts/all").then((response) => {

      setPosts(response.data);

      console.log(response.data);

    });
  }, []);

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