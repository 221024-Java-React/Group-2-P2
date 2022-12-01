import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Navigation from '../Navigation/Navigation';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import StatusBar from './StatusBar/StatusBar';
import './UserProfile.css';
import PostContainer from './Posts/PostContainer/PostContainer';
import Post from './Posts/Post/Post';

const UserProfile = () => {
  return (
    <>
      <Navigation />
      <ProfileBanner />
      <StatusBar />
      <AboutMe />
      <PostContainer>
        {/* <Post />
        <Post /> */}
      </PostContainer>
    </>
  );
};

export default UserProfile;
