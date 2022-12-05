import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Navigation from '../Navigation/Navigation';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import StatusBar from './StatusBar/StatusBar';
import './UserProfile.css';
import PostContainer from './Posts/PostContainer/PostContainer';
import Post from './Posts/Post/Post';
import { PostData } from '../../Util/Posts';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from '../../Util/Users';

const UserProfile = () => {

  // const userPosts = posts.map((postData : PostData) => {
  //   return (postData.userid == userid) ? <Post key={postData.id} post={postData} /> : null;
  // });

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    // axios.get("http://localhost:8090/user/info").then((response) => {

    //   // setPosts(response.data);

    // });

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
      <ProfileBanner profileName={""} />
      <StatusBar />
      <AboutMe />
      <PostContainer>
        {/* {userPosts} */}
      </PostContainer>
    </>
  );
};

export default UserProfile;
