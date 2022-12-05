import React, { useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import Post from '../UserProfile/Posts/Post/Post';
import PostContainer from '../UserProfile/Posts/PostContainer/PostContainer';
import { PostData } from '../../Util/Posts';
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();

    type CreateUserResponse = {
        cookie: string;
      };

  const [activeUsers, setActiveUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const cookie = document.cookie.slice(8);

  useEffect(() => {

    axios.get("http://localhost:8090/" + cookie).then((response) => {
        console.log(response);
    }).catch(e => {
        return navigate("/login");
    });

    axios.get("http://localhost:8090/posts/all").then((response) => {
      setPosts(response.data);
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